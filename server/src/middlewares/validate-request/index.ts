import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { badRequestError } from "../../errors/bad-request";

export const validateRequestMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) next();
  else {
    const error = badRequestError(errors);
    next(error);
  }
};
