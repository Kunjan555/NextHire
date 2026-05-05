import { RegisterDto } from './dto/register.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        name: string | null;
        email: string;
        phone: string | null;
        role: string;
        id: number;
        isVerified: boolean;
        createdAt: Date;
    }>;
    login(dto: any): Promise<{
        message: string;
        userInfo: {
            name: string | null;
            email: string;
            password: string;
            phone: string | null;
            role: string;
            id: number;
            isVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
            refreshToken: string | null;
        };
        access_token: string;
        refresh_token: string;
    }>;
    refreshToken(refreshToken: string): Promise<{
        access_token: string;
    }>;
}
