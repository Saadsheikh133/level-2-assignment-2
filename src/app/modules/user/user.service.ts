import UserModel from "../user.model";
import { User } from "./user.interface";

const createUserFromDB = async (user: User) => {
    const result = await UserModel.create(user);
    return result;
};

export const userServices = {
    createUserFromDB,
}