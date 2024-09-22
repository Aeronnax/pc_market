interface Subcategory {
  name: string;
}

export interface Category {
  name: string;
  subcategories: Subcategory[];
}
