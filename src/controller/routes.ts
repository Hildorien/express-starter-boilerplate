import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { handleError } from "./middlewares/error";

export let router = Router();

// Mapping routes

/**
 * Health route for all methods
 */
router.all("/health", async (req: Request, res: Response, next: Function) => {
    return res.status(StatusCodes.OK).send({ message: "Server is up and running" });
});



//Handle errors with a HttpError custom class
router.use(handleError);

//In any case a route does not match
router.all("*", function (req: Request, res: Response) {
    res.status(StatusCodes.NOT_FOUND).json({ message: "Endpoint not found" });
});