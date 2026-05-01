import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        name: string | null;
        email: string;
        phone: string | null;
        role: string;
        id: number;
        isVerified: boolean;
        createdAt: Date;
    }>;
    login(dto: LoginDto): Promise<{
        message: string;
        access_token: string;
    }>;
}
