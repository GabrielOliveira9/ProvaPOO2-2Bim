
import UserServices from "../services/UserServices";
import { Request, Response } from "express";

class UserController{
    
    constructor(){};
    
    async listUsers(req: Request, res: Response) {
        try {
            const users = await UserServices.listUsers();
            res.status(200).json({
                status:'ok',
                users: users
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async createUser(req: Request, res: Response) {
        try {
            const newUser = req.body;
            const newuser = await UserServices.createUser(newUser);
            res.status(200).json({
                status:'ok',
                newuser: newuser
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const updatedUser = req.body;
            const result = await UserServices.updateUser(id, updatedUser);
            if (!result) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deletedUser = await UserServices.deleteUser(id);
            if (!deletedUser) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(deletedUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
} export default new UserController;