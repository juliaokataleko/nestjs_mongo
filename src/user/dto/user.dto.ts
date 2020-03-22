export class RegisterUserDTO {
    readonly name: string;
    readonly username: string;
    readonly email: string;
    readonly password: string;
    readonly status: number;
    readonly role: number;
    readonly token: string;
    readonly city: string;
    readonly createdAt: Date;
}