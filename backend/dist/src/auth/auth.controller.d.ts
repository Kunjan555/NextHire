import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(data: any): Promise<{
        name: string | null;
        email: string;
        password: string;
        phone: string | null;
        role: string;
        isVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
}
