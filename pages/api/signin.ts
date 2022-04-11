import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const salt = bcrypt.genSaltSync();
    const { email, password } = req.body;
    //@ts-ignore
    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign(
                { email: user.email, id: user.id, time: Date.now() },
                "hello",
                { expiresIn: "8h" }
            );
            res.setHeader(
                "Set-Cookie",
                cookie.serialize("TRAX_ACCESS_TOKEN", token, {
                    httpOnly: true,
                    maxAge: 8 * 3600,
                    path: "/",
                    sameSite: "lax",
                    secure: process.env.NODE_ENV === "production",
                })
            );
            res.json(user);
            return;
        }
    } catch (e) {
        console.log(e.message);
        res.status(401);
        res.json({ error: "Invalid user information" });
        return;
    }
};
