interface Subcategory {
  name: string;
  id: string;
}

export interface Category {
  name: string;
  subcategories: Subcategory[];
}
