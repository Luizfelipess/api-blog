import { Router, Request, Response } from "express";

import * as PostController from '../controllers/postController';
import * as UserController from '../controllers/userController';

import AuthValidator from "../validators/AuthValidator";

const router = Router();


router.get('/posts', PostController.all);
router.get('/users', UserController.all);

router.get('/post/:id', PostController.one);

router.post('/post', PostController.create);
router.post('/user', AuthValidator.create, UserController.create);

router.put('/posts/:id', PostController.togglePost);

router.delete('/post/:id', PostController.deletePost);


export default router;