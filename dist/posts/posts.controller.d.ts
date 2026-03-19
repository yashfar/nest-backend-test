import { PostsService } from './posts.service';
import { CreatePostDto, UpdatePostDto } from './dto/posts.dto';
export declare class PostsController {
    private postService;
    constructor(postService: PostsService);
    createPost(post: CreatePostDto, file: Express.Multer.File): Promise<{
        message: string;
    } | {
        message: string;
    }>;
    getAllPosts(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/post.schema").Post, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/post.schema").Post & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getPostsByUserId(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/post.schema").Post, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/post.schema").Post & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    updatePost(post: UpdatePostDto, id: string): Promise<{
        message: string;
    } | {
        message: string;
    }>;
    deletePost(id: string): Promise<{
        message: string;
    } | {
        message: string;
    }>;
}
