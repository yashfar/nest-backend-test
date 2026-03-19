import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PostsService } from './posts.service';
import { CreatePostDto, UpdatePostDto } from './dto/posts.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/post-images',
        filename: (req, file, cb) => {
          const uniqueName = Date.now() + '-' + file.originalname;

          cb(null, uniqueName);
        },
      }),
    }),
  )
  createPost(
    @Body() post: CreatePostDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.postService
      .createPost(post, file)
      .then(() => {
        return { message: 'Post created successfully' };
      })
      .catch(() => {
        return { message: 'Failed to create post' };
      });
  }
  @Get()
  @UseGuards(JwtAuthGuard)
  getAllPosts() {
    return this.postService.getAllPosts();
  }
  @Get('user/:userId')
  @UseGuards(JwtAuthGuard)
  getPostsByUserId(@Param('userId') userId: string) {
    return this.postService.getPostsByUserId(userId);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
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
