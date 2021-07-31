import express from "express";
import User from "../models/user.model";

export const getUsers = async (req: any, res: express.Response) => {

    const from = Number(req.query.from) || 0;

    const users = await User
        .find({_id: {$ne: req.uid}})
        .sort('-online')
        .skip(from)
        .limit(20)

    res.json({
        ok: true,
        users: users,
    })
}