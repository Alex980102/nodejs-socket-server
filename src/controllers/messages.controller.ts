import Message from '../models/message.model'

export const obtainChat = async (req: any, res: any) => {
    const myId = req.uid;
    const mesageFrom = req.params.from;
    console.log(req.params);

    const last30 = await Message.find({
        $or: [{from: myId, to: mesageFrom}, {from: mesageFrom, to: myId}]
    })
    .sort({createdAt: 'desc'})
    .limit(30);

    res.json({
        ok: true,
        last30
    });
};

