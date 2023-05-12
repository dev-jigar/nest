import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/createUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/allUsers')
  async getUsers() {
    return this.userService.listUsers();
  }
  @Get('/profile/:id')
  async getProfile(@Param('id') params: number) {
    return await this.userService.getUserProfileData(params);
  }

  @Post('/login')
  async createUser(@Body() createUserDetails: CreateUserDto) {
    return await this.userService.createUser(createUserDetails);
  }

  @Put('/profilaa/:id')
  async updateUser(
    @Body() updateUserDetails: UpdateUserDto,
    @Param('id') params: number,
  ) {
    return await this.userService.UptUser(params, updateUserDetails);
  }
}
