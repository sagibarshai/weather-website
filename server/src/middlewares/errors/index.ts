import { NextFunction, Request, Response } from "express";
import { internalServerError } from "../../errors/internal-server-error";
import { ResponseError } from "../../errors/types";

export const errorMiddleware = (err: ResponseError, req: Request, res: Response, next: NextFunction) => {
  if (!err?.type) {
    // unexpected error occurred
    const error = internalServerError();
    res.status(error.statusCode).json({ errors: error.errors });
  } else {
    res.status(err.statusCode).json({ errors: err.errors });
  }
};
