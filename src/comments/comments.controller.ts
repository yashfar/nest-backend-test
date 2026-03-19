import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateCommentDto, UpdateCommentDto } from './dto/comments.dto';
import { CommentsService } from './comments.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('post/:postId/comments')
  createComment(
    @Body() comment: CreateCommentDto,
    @Param('postId') postId: string,
    @Req() req: any,
  ) {
    const userId = req.user.userId;
    return this.commentsService.createComment(comment, postId, userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('post/:postId/comments')
  getPostComments(@Param('postId') postId: string) {
    return this.commentsService.getPostComments(postId);
  }

  @UseGuards(AuthGuard('jwt'))
  // update comment
  @Patch('comments/:commentId')
  updateComment(
    @Param('commentId') commentId: string,
    @Body() updateComment: UpdateCommentDto,
    @Req() req,
  ) {
    const userId = req.user.userId;
    return this.commentsService.updateComment(commentId, updateComment, userId);
  }

  @UseGuards(AuthGuard('jwt'))
  // delete comment
  @UseGuards(AuthGuard('jwt'))
  @Delete('comments/:commentId')
  deleteComment(@Param('commentId') commentId: string, @Req() req) {
    const userId = req.user.userId;
    return this.commentsService.deleteComment(commentId, userId);
  }
}
