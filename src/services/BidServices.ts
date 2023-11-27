import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class BidServices {
    constructor(){

}
    async listBids(id?:string){
        try{
            if(id){
                const bid = await prisma.bid.findUnique({
                    where: {
                        id
                    }
                });
                return bid;
            }else{
                const bids = await prisma.bid.findMany();
                return bids;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createBid(bid: Prisma.BidCreateInput){
        try{
            const newbid = await prisma.bid.create({
                data: bid
            });
            return newbid;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateBid(id: string, bid: Prisma.BidUpdateInput){
        try{
            const updatedbid = await prisma.bid.update({
                where: {
                    id
                },
                data: bid
            });
            return updatedbid;
        }catch(error){
            console.log(error);
            return null;
        }
    }
    async deleteBid(id:string){
        try{
            const deletedBid = await prisma.bid.delete({
                where: {
                    id
                }
            });
            return deletedBid;
        }catch(error){
            console.log(error);
            return null;
        }
    }

}
export default new BidServices();