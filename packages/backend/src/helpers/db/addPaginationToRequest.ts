import { type FindManyOptions } from 'typeorm';
import { type PaginationDTO } from './types';

export const addPaginationToRequest = <T extends object>(
  request: FindManyOptions<T>,
  pagination: PaginationDTO,
): void => {
  request.take = pagination.take;
  request.skip = pagination.skip;
};
