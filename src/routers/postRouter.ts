import express from "express"
import { PostController } from "../controller/PostController"
import { PostBusiness } from "../bussines/PostBusiness"
import { PostDataBase } from "../database/PostDataBase"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"
import { UserDataBase } from "../database/UserDataBase"



export const postRouter = express.Router()

export const postController = new PostController(

    new PostBusiness(

        new PostDataBase(),
        new UserDataBase(),
        new IdGenerator(),
        new TokenManager(),
    )
)

postRouter.post("/", postController.createPost)
postRouter.get("/", postController.getPosts)
postRouter.put("/:id", postController.editPost)
postRouter.delete("/:id", postController.deletePost)

postRouter.put("/:id/like", postController.likeOrDislikePost)