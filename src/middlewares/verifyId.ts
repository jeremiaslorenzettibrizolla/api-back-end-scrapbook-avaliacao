import { NextFunction, Request, Response } from 'express';

export default function VerifyId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            success: false,
            message: 'Id do recado deve ser enviado na requisição',
        });
    }
    next();
}