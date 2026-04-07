import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
    async register(data: any) {
        // Registration logic goes here
        const hashedPassword = await bcrypt.hash(data.password, 10);

        // Save the user to the database (this is just a placeholder)
        const user = await this.prisma.user.create({
            data: {
              ...data,
                password: hashedPassword,
            },
        });
        return user;
    }
}
