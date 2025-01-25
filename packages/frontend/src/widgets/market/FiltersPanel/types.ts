export interface MarketFilters {
  categoryId?: Components.Schemas.CategoriesDTO['id'];
  priceRange?: [number | undefined | null, number | undefined | null];
}
