import AuctionController from "../controllers/AuctionController";
import { Router } from "express";

const AuctionRouter = Router();

AuctionRouter.get('/auctions', AuctionController.listAuctions)

AuctionRouter.post('/auction', AuctionController.createAuction)

AuctionRouter.put('/auction', AuctionController.updateAuction)

AuctionRouter.delete('/auction', AuctionController.deleteAuction)

export default AuctionRouter;