import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: dto.email }, { phone: dto.phone ?? undefined }],
      },
    });

    if (existing) {
      if (existing.email === dto.email) {
        throw new ConflictException('Email already in use');
      }
      throw new ConflictException('Phone number already in use');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    try {
      return await this.prisma.user.create({
        data: {
          ...dto,
          password: hashedPassword,
        },
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          role: true,
          isVerified: true,
          createdAt: true,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        const field = error.meta?.target?.[0];
        throw new ConflictException(`${field} already in use`);
      }
      throw new InternalServerErrorException();
    }
  }

  async login(dto: any) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    const payload = {
      userId: user.id,
      email: user.email,
    };

    // ✅ Access Token
    const access_token = this.jwtService.sign(
      { ...payload, type: 'access' },
      { secret: 'ACCESS_SECRET', expiresIn: '30m' },
    );

    // ✅ Refresh Token
    const refresh_token = this.jwtService.sign(
      { ...payload, type: 'refresh' },
      { secret: 'REFRESH_SECRET', expiresIn: '7d' },
    );

    try {
      const hashedRefreshToken = await bcrypt.hash(refresh_token, 10);

      await this.prisma.user.update({
        where: { id: user.id },
        data: { refreshToken: hashedRefreshToken } as any,
      });

      return {
        message: 'Login successful',
        userInfo: {
          id: user.id,
          email: user.email,
          role: user.role,
        },
        access_token,
        refresh_token,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to save refresh token',
      );
    }
  }

  async refreshToken(refreshToken: string) {
    try {
      if (!refreshToken) {
        throw new UnauthorizedException('No refresh token provided');
      }

      // ✅ Verify refresh token
      const decoded = this.jwtService.verify(refreshToken, {
        secret: 'REFRESH_SECRET',
      });

      // ✅ Ensure correct token type
      if (decoded.type !== 'refresh') {
        throw new UnauthorizedException('Invalid token type');
      }

      const user = await this.prisma.user.findUnique({
        where: { id: decoded.userId },
      });

      if (!user || !user.refreshToken) {
        throw new UnauthorizedException('Access denied');
      }

      // ✅ Compare hashed token
      const isMatch = await bcrypt.compare(
        refreshToken,
        user.refreshToken,
      );

      if (!isMatch) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      const payload = {
        userId: user.id,
        email: user.email,
      };

      // ✅ New Access Token
      const newAccessToken = this.jwtService.sign(
        { ...payload, type: 'access' },
        { secret: 'ACCESS_SECRET', expiresIn: '30m' },
      );

      return {
        access_token: newAccessToken,
      };
    } catch (error) {
      throw new UnauthorizedException(
        'Invalid or expired refresh token',
      );
    }
  }
}