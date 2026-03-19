import { CreateCommentDto, UpdateCommentDto } from './dto/comments.dto';
import { CommentsService } from './comments.service';
export declare class CommentsController {
    private commentsService;
    constructor(commentsService: CommentsService);
    createComment(comment: CreateCommentDto, postId: string, req: any): Promise<import("mongoose").Document<unknown, {}, import("./schema/comments.schema").Comment, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/comments.schema").Comment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getPostComments(postId: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/comments.schema").Comment, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/comments.schema").Comment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    updateComment(commentId: string, updateComment: UpdateCommentDto, req: any): Promise<import("mongoose").Document<unknown, {}, import("./schema/comments.schema").Comment, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/comments.schema").Comment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    deleteComment(commentId: string, req: any): Promise<import("mongodb").DeleteResult>;
}
