import { Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
   try {
     const {user} = req.body;
     const result = await userServices.createUserFromDB(user);

     //send response
     res.status(200).json({
       success: true,
       message: "User is created successfully !",
       data: result,
     });
   } catch (error) {
    console.log(error)
   }
};

export const userControllers = {
    createUser,
}