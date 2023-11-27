
import BidServices from "../services/BidServices";
import { Request, Response } from "express";

class BidController{
    
    constructor(){};
    
    async listBids(req: Request, res: Response) {
        try {
            const bids = await BidServices.listBids();
            res.status(200).json({
                status:'ok',
                bids: bids
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async createBid(req: Request, res: Response) {
        try {
            const newBid = req.body;
            const newbid = await BidServices.createBid(newBid);
            res.status(200).json({
                status:'ok',
                newbid: newbid
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateBid(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const updatedBid = req.body;
            const result = await BidServices.updateBid(id, updatedBid);
            if (!result) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteBid(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deletedBid = await BidServices.deleteBid(id);
            if (!deletedBid) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(deletedBid);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
} export default new BidController;