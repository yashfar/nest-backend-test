import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto, UpdateCommentDto } from './dto/comments.dto';
import { Comment } from './schema/comments.schema';
import { Post } from 'src/posts/schema/post.schema';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name)
    private commentModel: Model<Comment>,
  ) {}
  async createComment(
    comment: CreateCommentDto,
    postId: string,
    userId: string,
  ) {
    return await this.commentModel.create({
      text: comment.text,
      post: postId,
      author: userId,
    });
  }

  async getPostComments(postId: string) {
    return await this.commentModel.find({ post: postId }).populate('author');
  }

  async updateComment(
    commentId: string,
    updateComment: UpdateCommentDto,
    userId: string,
  ) {
    const comment = await this.commentModel.findOne({ _id: commentId });
    if (!comment) {
      throw new NotFoundException('Comment not found');
    }
    if (comment.author.toString() !== userId) {
      throw new UnauthorizedException('You are not the owner of this comment');
    }

    comment.text = updateComment.text;
    return await comment.save();
  }

  async deleteComment(commentId: string, userId: string) {
    const comment = await this.commentModel
      .findOne({ _id: commentId })
      .populate('post');
    if (!comment) {
      throw new NotFoundException('Comment not found');
    }
    const isCommentAuthor = comment.author._id.toString() === userId;
    const isPostOwner =
      (comment.post as any as Post).author._id.toString() === userId;
    if (!isCommentAuthor && !isPostOwner) {
      throw new UnauthorizedException('You are not the owner of this comment');
    }

    return comment.deleteOne();
  }
}
