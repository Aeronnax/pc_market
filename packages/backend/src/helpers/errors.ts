export class NotFoundError extends Error {
  constructor(message: string, isCustom?: boolean) {
    super(isCustom ? message : `${message} not found`);
  }
}
