import { HydratedDocument, Types } from 'mongoose';
export type CommentDocument = HydratedDocument<Comment>;
export declare class Comment {
    text: string;
    author: Types.ObjectId;
    post: Types.ObjectId;
}
export declare const CommentSchema: import("mongoose").Schema<Comment, import("mongoose").Model<Comment, any, any, any, (import("mongoose").Document<unknown, any, Comment, any, import("mongoose").DefaultSchemaOptions> & Comment & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, Comment, any, import("mongoose").DefaultSchemaOptions> & Comment & {
    _id: Types.ObjectId;
} & {
    __v: number;
}), any, Comment>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Comment, import("mongoose").Document<unknown, {}, Comment, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Comment & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    text?: import("mongoose").SchemaDefinitionProperty<string, Comment, import("mongoose").Document<unknown, {}, Comment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Comment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    author?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Comment, import("mongoose").Document<unknown, {}, Comment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Comment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    post?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Comment, import("mongoose").Document<unknown, {}, Comment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Comment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Comment>;
