import { Document } from 'mongoose';

export interface Product extends Document {
    readonly name: string;
    readonly description: string;
    readonly imageURL: string;
    readonly price: number;
    readonly user_id: string;
    readonly createdAt: Date;
}