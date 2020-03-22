import { Controller, Post, Put, Get, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { RegisterUserDTO } from './dto/user.dto';

import { UserService } from './user.service';
import { empty } from 'rxjs';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    // aqui são definidas as rotas do nosso controller

    @Post('/register')
    async registerPost(@Res() res, @Body() registerUserDTO: RegisterUserDTO) {
        const user = await this.userService.registerUser(registerUserDTO);

        console.log(registerUserDTO);
        res.status(HttpStatus.OK).json({
            message: 'usuário Registado',
            user
        })
    }

    @Get('/')
    async getUsers(@Res() res) {
        const users = await this.userService.getUsers();
        return res.status(HttpStatus.OK).json({
            users
        })
    }

    @Get('/:userID')
    async getUser(@Res() res, @Param('userID') userID) {
        const user = await this.userService.getUser(userID);
        if(!user) throw new NotFoundException("Usuário Não Encontrado");
        return res.status(HttpStatus.OK).json({
            user
        });
    }

    @Get('/login/:email/:password')
    async login(@Res() res, @Param('email') email, @Param('password') password) {
        const user = await this.userService.login(email, password);
        if(!user) throw new NotFoundException("O login falhou");
        if(user.length < 1) {
            return res.status(HttpStatus.OK).json({
                message: "O login falhou",
                user
            });
        }
        return res.status(HttpStatus.OK).json({
            message: "Login efectuado com sucesso",
            user
        });
    }

    @Delete('/delete')
    async deleteUser(@Res() res, @Query('userID') userID) {
        const userDeleted = await this.userService.deleteUser(userID);
        if(!userDeleted) throw new NotFoundException("Usuário Não Encontrado");
        return res.status(HttpStatus.OK).json({
            message: 'Usuário excluido com sucesso!!',
            userDeleted
        });
    }

    @Put('/update')
    async updateUser(@Res() res, @Body() registerUserDTO: RegisterUserDTO, @Query('userID') userID) {
        const userUpdated = await this.userService.updateUser(userID, registerUserDTO);
        if(!userUpdated) throw new NotFoundException("Usuário Não Encontrado");
        return res.status(HttpStatus.OK).json({
            message: 'Usuário editado com sucesso!!',
            userUpdated
        });
    }

}
