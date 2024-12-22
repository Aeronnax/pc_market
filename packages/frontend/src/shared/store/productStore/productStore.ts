import { create } from 'zustand';
import { Filters } from './types';
import { getProducts } from 'src/shared/api/products/products';
import { transformFilters } from './helpers';
import { devtools } from 'zustand/middleware';

interface ProductState {
  /**
   * актуальное состояние продуктов с учетом фильтров
   */
  products?: Components.Schemas.ProductDTO[];
  filters: Filters;

  pagination: {
    skip: number;
    take: number;
  };

  isLoading?: boolean;
}
interface ProductActions {
  fetchProducts: (filters?: Filters) => void;

  setPagination: (pagination: Partial<ProductState['pagination']>) => void;
  setFilters: (filters: Filters) => void;
  setCategoryFilter: (category: Filters['categoryId']) => void;
  setPriceFilter: (priceRange: Filters['priceRange']) => void;

  clearFilters: () => void;
}
type ProductStore = ProductState & ProductActions;

const DEFAULT_STATE: ProductState = {
  products: undefined,
  isLoading: undefined,
  filters: {
    categoryId: undefined,
    priceRange: undefined,
  },
  pagination: {
    skip: 0,
    take: 30,
  },
};

export const useProductStore = create<ProductStore>()(
  devtools((set, get) => ({
    ...DEFAULT_STATE,

    fetchProducts: (filters) => {
      const filtersLocal = filters ?? get().filters;
      const pagination = get().pagination;

      if (!get().isLoading) {
        set({ isLoading: true });
      }
      getProducts({ ...transformFilters(filtersLocal), ...pagination }).then(
        (res) => {
          const data = res.data;
          set({ products: data.data, isLoading: false });
        }
      );
    },

    setPagination: (pagination) => {
      set((prev) => ({
        ...prev,
        pagination: {
          ...prev.pagination,
          pagination,
        },
      }));
      get().fetchProducts();
    },

    setFilters: (filters) => {
      set({ filters });
      get().fetchProducts(filters);
    },
    setCategoryFilter: (category) => {
      const filters = get().filters;
      const updatedFilters: Filters = { ...filters, categoryId: category };

      get().setFilters(updatedFilters);
    },
    setPriceFilter: (priceRange) => {
      const filters = get().filters;
      const updatedFilters: Filters = { ...filters, priceRange };

      get().setFilters(updatedFilters);
    },

    clearFilters: () => {
      get().setFilters(DEFAULT_STATE.filters);
    },
  }))
);
