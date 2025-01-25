import { FC, useState } from 'react';
import MainTemplate from 'src/widgets/template/MainTemplate/MainTemplate';
import ProductItemsModule from 'src/widgets/market/ProductItemModule/ProductItemsModule';
import FiltersPanel from 'src/widgets/market/FiltersPanel/FiltersPanel';
import { MarketFilters } from '../../widgets/market/FiltersPanel/types';
import { useQueryClient } from '@tanstack/react-query';
import { transformFiltersToApi } from './helpers';
import { useGetProducts } from 'src/shared/api/products/hooks/useGetProducts';
import { QueryKeys } from 'src/shared/api/queryKeys';

const Market: FC = () => {
  const [filters, setFilters] = useState<MarketFilters>({});

  const { data, isPending, fetchNextPage, hasNextPage } = useGetProducts({
    ...transformFiltersToApi(filters),
    take: 6,
  });

  const queryClient = useQueryClient();
  const handleRefetchTable = () => {
    queryClient.invalidateQueries({
      queryKey: [QueryKeys.PRODUCTS_LIST],
    });
  };

  return (
    <MainTemplate>
      <FiltersPanel filters={filters} setFilters={setFilters} />
      <button onClick={handleRefetchTable}>refetch table</button>
      <ProductItemsModule items={data?.items} isLoading={isPending} />
      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>Показать еще</button>
      )}
    </MainTemplate>
  );
};

export default Market;
