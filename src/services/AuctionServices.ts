import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AuctionServices {
    constructor() {}

    async listAuctions(id?: string) {
        try {
            if (id) {
                const auction = await prisma.auction.findUnique({
                    where: {
                        id
                    }
                });
                return auction;
            } else {
                const auctions = await prisma.auction.findMany();
                return auctions;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async createAuction(auction: Prisma.AuctionCreateInput) {
        try {
            const newAuction = await prisma.auction.create({
                data: auction
            });
            return newAuction;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async updateAuction(id: string, auction: Prisma.AuctionUpdateInput) {
        try {
            const updatedAuction = await prisma.auction.update({
                where: {
                    id
                },
                data: auction
            });
            return updatedAuction;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async deleteAuction(id: string) {
        try {
            const deletedAuction = await prisma.auction.delete({
                where: {
                    id
                }
            });
            return deletedAuction;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

export default new AuctionServices();
