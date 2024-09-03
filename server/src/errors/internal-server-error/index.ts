import { ResponseError } from "../types";

export const internalServerError = (): ResponseError => {
  return {
    errors: [{ message: "Something went wrong.." }],
    statusCode: 500,
    type: "internal_error",
  };
};
