import { Document } from 'mongoose';

export interface User extends Document {
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