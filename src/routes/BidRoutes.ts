import BidController from "../controllers/BidController";
import { Router } from "express";

const BidRouter = Router();

BidRouter.get('/bids', BidController.listBids)

BidRouter.post('/bid', BidController.createBid)

BidRouter.put('/bid', BidController.updateBid)

BidRouter.delete('/bid', BidController.deleteBid)

export default BidRouter;