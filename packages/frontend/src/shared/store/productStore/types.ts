export interface Filters {
  categoryId?: Components.Schemas.CategoriesDTO['id'];
  priceRange?: [number | undefined, number | undefined];
}
