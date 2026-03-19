import { Model } from 'mongoose';
import { CreateCommentDto, UpdateCommentDto } from './dto/comments.dto';
import { Comment } from './schema/comments.schema';
export declare class CommentsService {
    private commentModel;
    constructor(commentModel: Model<Comment>);
    createComment(comment: CreateCommentDto, postId: string, userId: string): Promise<import("mongoose").Document<unknown, {}, Comment, {}, import("mongoose").DefaultSchemaOptions> & Comment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getPostComments(postId: string): Promise<(import("mongoose").Document<unknown, {}, Comment, {}, import("mongoose").DefaultSchemaOptions> & Comment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    updateComment(commentId: string, updateComment: UpdateCommentDto, userId: string): Promise<import("mongoose").Document<unknown, {}, Comment, {}, import("mongoose").DefaultSchemaOptions> & Comment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    deleteComment(commentId: string, userId: string): Promise<import("mongodb").DeleteResult>;
}
