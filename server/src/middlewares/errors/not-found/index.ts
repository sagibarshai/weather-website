import { NextFunction, Request, Response } from "express";
import { notFoundError } from "../../../errors/not-found";

export const notFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const error = notFoundError();
  next(error);
};
