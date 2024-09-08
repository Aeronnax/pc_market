import type { NextFunction, Request as ExRequest, Response as ExResponse } from 'express';
import { ValidateError } from 'tsoa';
import { NotFoundError } from 'src/helpers/errors';
import type { NotFoundErrorJSON, ValidateErrorJSON } from 'src/middlewares/error/types';

export const errorHandler = (
  err: unknown,
  _: ExRequest,
  res: ExResponse,
  next: NextFunction,
): ExResponse | void => {
  if (err instanceof ValidateError) {
    const errorMessage: ValidateErrorJSON = {
      message: 'Validation failed',
      details: err?.fields,
    };
    return res.status(422).json(errorMessage);
  }
  if (err instanceof NotFoundError) {
    const errorMessage: NotFoundErrorJSON = {
      message: err.message,
    };
    return res.status(404).send(errorMessage);
  }

  next();
};
