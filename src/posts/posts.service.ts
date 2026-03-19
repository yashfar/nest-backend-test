import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './schema/post.schema';
import { CreatePostDto, UpdatePostDto } from './dto/posts.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name)
    private postModel: Model<Post>,
  ) {}

  async createPost(post: CreatePostDto) {
    await this.postModel.create(post);
  }

  async getAllPosts() {
    return await this.postModel.find({}).populate('author');
  }
  async getPostsByUserId(userId: string) {
    return await this.postModel.find({ author: userId }).populate('author');
  }

  async getPostById(id: string) {
    return await this.postModel.findOne({ _id: id });
  }

  async updatePost(id: string, post: UpdatePostDto) {
    return await this.postModel.findOneAndUpdate({ _id: id }, post);
  }

  async deletePost(id: string) {
    return await this.postModel.findOneAndDelete({ _id: id });
  }
}
