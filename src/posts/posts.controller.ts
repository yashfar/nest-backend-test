import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PostsService } from './posts.service';
import { CreatePostDto, UpdatePostDto } from './dto/posts.dto';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  createPost(@Body() post: CreatePostDto) {
    return this.postService
      .createPost(post)
      .then(() => {
        return { message: 'Post created successfully' };
      })
      .catch(() => {
        return { message: 'Failed to create post' };
      });
  }
  @Get()
  getAllPosts() {
    return this.postService.getAllPosts();
  }
  @Get('user/:userId')
  getPostsByUserId(@Param('userId') userId: string) {
    return this.postService.getPostsByUserId(userId);
  }

  @Patch(':id')
  updatePost(@Body() post: UpdatePostDto, @Param('id') id: string) {
    return this.postService
      .updatePost(id, post)
      .then(() => {
        return { message: 'Post updated successfully' };
      })
      .catch(() => {
        return { message: 'Failed to update post' };
      });
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.postService
      .deletePost(id)
      .then(() => {
        return { message: 'Post deleted successfully' };
      })
      .catch(() => {
        return { message: 'Failed to delete post' };
      });
  }
}
