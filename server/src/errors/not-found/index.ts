import { ResponseError } from "../types";

export const notFoundError = (): ResponseError => {
  return {
    errors: [{ message: "Not found" }],
    statusCode: 404,
    type: "not_found",
  };
};
