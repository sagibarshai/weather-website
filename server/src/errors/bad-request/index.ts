import { Result, ValidationError } from "express-validator";
import { ResponseError } from "../types";

export const badRequestError = (errors: Result<ValidationError>): ResponseError => {
  return {
    errors: errors.array().map((err) => ({ message: err.msg, field: err.type === "field" ? err.path : undefined })),
    statusCode: 400,
    type: "bad_request",
  };
};
