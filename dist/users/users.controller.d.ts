import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(user: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/user.schema").User, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getUsers(email?: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/user.schema").User, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]> | Promise<(import("mongoose").Document<unknown, {}, import("./schema/user.schema").User, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    getUserById(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/user.schema").User, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    getUserByEmail(email: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/user.schema").User, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    removeUser(id: string): void;
    updateUser(id: string, user: UpdateUserDto): Promise<(import("mongoose").Document<unknown, {}, import("./schema/user.schema").User, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
