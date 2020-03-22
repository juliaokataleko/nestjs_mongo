import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    imageURL: String,
    price: Number,
    user_id: {
        type: String,
        default: 'sem user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
