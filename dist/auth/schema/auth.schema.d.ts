import { Document } from 'mongoose';
export type AuthDocument = Auth & Document;
export declare class Auth {
    username: string;
    email: string;
    password: string;
}
export declare const AuthSchema: import("mongoose").Schema<Auth, import("mongoose").Model<Auth, any, any, any, (Document<unknown, any, Auth, any, import("mongoose").DefaultSchemaOptions> & Auth & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Auth, any, import("mongoose").DefaultSchemaOptions> & Auth & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Auth>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Auth, Document<unknown, {}, Auth, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Auth & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    username?: import("mongoose").SchemaDefinitionProperty<string, Auth, Document<unknown, {}, Auth, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Auth & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, Auth, Document<unknown, {}, Auth, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Auth & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    password?: import("mongoose").SchemaDefinitionProperty<string, Auth, Document<unknown, {}, Auth, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Auth & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Auth>;
