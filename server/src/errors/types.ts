interface BadRequestError {
  message: string;
  field?: string;
}

export interface ResponseError {
  errors: BadRequestError[];
  statusCode: number;
  type: "bad_request" | "not_found" | "internal_error";
}
