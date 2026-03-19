import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async createUser(user: CreateUserDto) {
    return this.userModel.create(user);
  }
  async getAllUsers() {
    return await this.userModel.find({});
  }
  async getUserById(id: string) {
    return await this.userModel.findOne({ _id: id });
  }
  async findUserByEmail(email: string) {
    return await this.userModel.findOne({ email }).select('+password');
  }
  async removeUser(id: string) {
    return await this.userModel.findOneAndDelete({ _id: id });
  }
  async updateUser(id: string, user: UpdateUserDto) {
    return await this.userModel.findOneAndUpdate({ _id: id }, user);
  }
}
