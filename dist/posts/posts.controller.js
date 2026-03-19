"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const posts_service_1 = require("./posts.service");
const posts_dto_1 = require("./dto/posts.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let PostsController = class PostsController {
    postService;
    constructor(postService) {
        this.postService = postService;
    }
    createPost(post, file) {
        return this.postService
            .createPost(post, file)
            .then(() => {
            return { message: 'Post created successfully' };
        })
            .catch(() => {
            return { message: 'Failed to create post' };
        });
    }
    getAllPosts() {
        return this.postService.getAllPosts();
    }
    getPostsByUserId(userId) {
        return this.postService.getPostsByUserId(userId);
    }
    updatePost(post, id) {
        return this.postService
            .updatePost(id, post)
            .then(() => {
            return { message: 'Post updated successfully' };
        })
            .catch(() => {
            return { message: 'Failed to update post' };
        });
    }
    deletePost(id) {
        return this.postService
            .deletePost(id)
            .then(() => {
            return { message: 'Post deleted successfully' };
        })
            .catch(() => {
            return { message: 'Failed to delete post' };
        });
    }
};
exports.PostsController = PostsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/post-images',
            filename: (req, file, cb) => {
                const uniqueName = Date.now() + '-' + file.originalname;
                cb(null, uniqueName);
            },
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [posts_dto_1.CreatePostDto, Object]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getAllPosts", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getPostsByUserId", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [posts_dto_1.UpdatePostDto, String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "deletePost", null);
exports.PostsController = PostsController = __decorate([
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
//# sourceMappingURL=posts.controller.js.map