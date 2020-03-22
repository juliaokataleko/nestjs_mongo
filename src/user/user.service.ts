import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';

import { RegisterUserDTO }from './dto/user.dto';

import { from } from 'rxjs';
import { UserSchema } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {

    }

    // aqui são definidas as requisições ao banco.
    
    async getUsers(): Promise<User[]> {
        const users = await this.userModel.find();
        return users;
    }

    async getUser(userID: string): Promise<User> {
        const user = await this.userModel.findById(userID);
        return user;
    }

    async login(email: string, password: string): Promise<any> {
        const user = await this.userModel.findOne({
            email: email, password: password
        });
        return user;
    }

    async registerUser(registerUserDTO: RegisterUserDTO): Promise<User> {
        const user = new this.userModel(registerUserDTO);
        await user.save();
        return user;
    }

    async deleteUser(userID: string): Promise<User> {
        const deletedUser = await this.userModel.findByIdAndDelete(userID);
        return deletedUser;
    }

    async updateUser(userID: string, registerUserDTO: RegisterUserDTO): Promise<User> {
        const updatedUser = await this.userModel
        .findByIdAndUpdate(userID, registerUserDTO, {new: true});
        return updatedUser;
    }

    changePassword() {

    }

    changeUserName() {

    }

    changeRole() {

    }

    changeStatus() {

    }
}
