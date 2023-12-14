import Express from "express";
import { userControllers } from "./user.controller";

const router = Express.Router();

router.post('/users', userControllers.createUser);

export const userRoutes = router;