import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 1
    },
    role: {
        type: Number,
        default: 3
    },
    token: {
        type: String,
        default: "not"
    },
    city: String,
    createdAt: {
        type: Date,
        default: Date.now
    },

});