
import AuctionServices from "../services/AuctionServices";
import { Request, Response } from "express";

class AuctionController{
    
    constructor(){};
    
    async listAuctions(req: Request, res: Response) {
        try {
            const auctions = await AuctionServices.listAuctions();
            res.status(200).json({
                status:'ok',
                auctions: auctions
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async createAuction(req: Request, res: Response) {
        try {
            const newAuction = req.body;
            const newauction = await AuctionServices.createAuction(newAuction);
            res.status(200).json({
                status:'ok',
                newauction: newauction
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateAuction(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const updatedAuction = req.body;
            const result = await AuctionServices.updateAuction(id, updatedAuction);
            if (!result) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteAuction(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deletedAuction = await AuctionServices.deleteAuction(id);
            if (!deletedAuction) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(deletedAuction);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
} export default new AuctionController;