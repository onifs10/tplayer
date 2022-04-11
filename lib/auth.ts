import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const validateRoute = (handler) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        //valiadate the user
        //then return handler when authenticated

        const { TRAX_ACCESS_TOKEN: token } = req.cookies;

        if (token) {
            let user: any;
            try {
                let { id } = jwt.verify(token, "hello");
                user = prisma.user.findUnique({ where: { id } });
                if (!user) {
                    throw new Error("user not found");
                }
            } catch (e) {
                res.status(401);
                res.json({ error: "Not authorized" });
                return;
            }
            return handler(req, res, user);
        }
        res.status(401);
        res.json({ error: "Not authorized" });
        return;
    };
};
