import type { FieldErrors } from 'tsoa';

export interface ValidateErrorJSON {
  message: 'Validation failed';
  details: FieldErrors;
}

export interface NotFoundErrorJSON {
  message: string;
}
