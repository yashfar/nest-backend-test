export declare class CreateUserDto {
    username: string;
    email: string;
    name?: string;
    password: string;
}
export declare class UpdateUserDto {
    username?: string;
    name?: string | undefined;
    email?: string;
}
