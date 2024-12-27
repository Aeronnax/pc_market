import { FC, useState } from 'react';
import MainTemplate from 'src/widgets/template/MainTemplate/MainTemplate';
import ProductItemsModule from 'src/widgets/market/ProductItemModule/ProductItemsModule';
import FiltersPanel from 'src/widgets/market/FiltersPanel/FiltersPanel';
import { MarketFilters } from '../../widgets/market/FiltersPanel/types';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getProducts } from 'src/shared/api/products/products';
import { transformFiltersToApi } from './helpers';
import { useDebounce } from 'src/shared/helpers/useDebounce';

const Market: FC = () => {
  const [filters, setFilters] = useState<MarketFilters>({});
  const apiFilters = useDebounce(filters, 1000, transformFiltersToApi);

  const { data, isPending } = useQuery({
    queryKey: ['Market', apiFilters],
    queryFn: () => getProducts({ ...apiFilters, take: 30, skip: 0 }),
  });

  const queryClient = useQueryClient();
  const handleRefetchTable = () => {
    queryClient.invalidateQueries({
      queryKey: ['Market'],
    });
  };

  return (
    <MainTemplate>
      <FiltersPanel filters={filters} setFilters={setFilters} />
      <button onClick={handleRefetchTable}>refetch table</button>
      <ProductItemsModule items={data?.data.items} isLoading={isPending} />
    </MainTemplate>
  );
};

export default Market;
