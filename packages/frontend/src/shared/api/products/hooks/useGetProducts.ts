import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../products';
import { QueryKeys } from '../../queryKeys';

export const useGetProducts = (
  request: Omit<Paths.GetProducts.RequestBody, 'take' | 'skip'>
) => {
  return useQuery({
    queryKey: [QueryKeys.PRODUCTS_LIST, request],
    //TODO: Перевести на useInfiniteQuery - https://tanstack.com/query/latest/docs/framework/react/reference/useInfiniteQuery
    queryFn: () => getProducts({ ...request, take: 30, skip: 0 }),
  });
};
