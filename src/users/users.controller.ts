import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }

  @Get()
  getUsers(@Query('email') email?: string) {
    if (!email) {
      return this.usersService.getAllUsers();
    }
    return this.usersService.findUserByEmail(email);
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }
  @Get('email/:email')
  getUserByEmail(@Param('email') email: string) {
    return this.usersService.findUserByEmail(email);
  }

  @Delete(':id')
  removeUser(@Param('id') id: string) {
    this.usersService
      .removeUser(id)
      .then(() => {
        return { message: 'User removed successfully' };
      })
      .catch(() => {
        return { message: 'Failed to remove user' };
      });
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.usersService.updateUser(id, user);
  }
}
