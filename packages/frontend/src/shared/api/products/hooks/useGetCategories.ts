import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../products';
import { QueryKeys } from '../../queryKeys';

export const useGetCategories = () => {
  return useQuery({
    queryKey: [QueryKeys.CATEGORIES_LIST],
    queryFn: () => getCategories(),
  });
};
