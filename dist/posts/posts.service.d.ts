import { Model } from 'mongoose';
import { Post } from './schema/post.schema';
import { CreatePostDto, UpdatePostDto } from './dto/posts.dto';
export declare class PostsService {
    private postModel;
    constructor(postModel: Model<Post>);
    createPost(post: CreatePostDto, file?: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, Post, {}, import("mongoose").DefaultSchemaOptions> & Post & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getAllPosts(): Promise<(import("mongoose").Document<unknown, {}, Post, {}, import("mongoose").DefaultSchemaOptions> & Post & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getPostsByUserId(userId: string): Promise<(import("mongoose").Document<unknown, {}, Post, {}, import("mongoose").DefaultSchemaOptions> & Post & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getPostById(id: string): Promise<(import("mongoose").Document<unknown, {}, Post, {}, import("mongoose").DefaultSchemaOptions> & Post & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updatePost(id: string, post: UpdatePostDto): Promise<(import("mongoose").Document<unknown, {}, Post, {}, import("mongoose").DefaultSchemaOptions> & Post & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deletePost(id: string): Promise<(import("mongoose").Document<unknown, {}, Post, {}, import("mongoose").DefaultSchemaOptions> & Post & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
