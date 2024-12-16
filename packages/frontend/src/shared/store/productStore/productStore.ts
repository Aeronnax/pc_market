import { create } from 'zustand';
import { Filters } from './types';
import { Product } from 'src/shared/api/products/types';
import { getProducts } from 'src/shared/api/products/products';
import { transformFilters } from './helpers';
import { devtools } from 'zustand/middleware';

interface ProductState {
  /**
   * актуальное состояние продуктов с учетом фильтров
   */
  products?: Product[];
  filters: Filters;

  isLoading?: boolean;
}
interface ProductActions {
  fetchProducts: (filters?: Filters) => void;

  setFilters: (filters: Filters) => void;
  setCategoryFilter: (category: Filters['category']) => void;
  setPriceFilter: (priceRange: Filters['priceRange']) => void;

  clearFilters: () => void;
}
type ProductStore = ProductState & ProductActions;

const DEFAULT_STATE: ProductState = {
  products: undefined,
  isLoading: undefined,
  filters: {
    category: undefined,
    priceRange: undefined,
  },
};

export const useProductStore = create<ProductStore>()(
  devtools((set, get) => ({
    ...DEFAULT_STATE,

    fetchProducts: (filters) => {
      const filtersLocal = filters ?? get().filters;

      if (!get().isLoading) {
        set({ isLoading: true });
      }
      getProducts(transformFilters(filtersLocal)).then((res) => {
        const data = res.data;
        set({ products: data, isLoading: false });
      });
    },

    setFilters: (filters) => {
      set({ filters });
      get().fetchProducts(filters);
    },
    setCategoryFilter: (category) => {
      const filters = get().filters;
      const updatedFilters = { ...filters, category };

      get().setFilters(updatedFilters);
    },
    setPriceFilter: (priceRange) => {
      const filters = get().filters;
      const updatedFilters = { ...filters, priceRange };

      get().setFilters(updatedFilters);
    },

    clearFilters: () => {
      get().setFilters(DEFAULT_STATE.filters);
    },
  }))
);
