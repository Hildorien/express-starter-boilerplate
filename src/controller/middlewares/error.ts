import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { HttpError } from "../../models/error";


export function handleError(
    error: Error | HttpError,
    req: Request,
    res: Response,
    next: Function,
) {
    if (error instanceof HttpError) {
        return res.status(error.code).json({
            error: error.message,
        });
    }
    return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
}
