import { NextFunction, Request, Response } from 'express';

export default function VerifyBody(req: Request, res: Response, next: NextFunction) {
    const { description, details } = req.body;

    if (!description || !details) {
        return res.status(400).json({
            success: false,
            message: 'Descrição do recado deve ser preenchida',
        });
    }
    next();
};