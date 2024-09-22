interface Subcategory {
  name: string;
  id: string;
}

export interface CatalogMenuInfo {
  name: string;
  subcategories: Subcategory[];
}
