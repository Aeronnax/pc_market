import { addTimeout } from '../../helpers/addTimeout';
import { isExist } from '../../helpers/isExist';
import { mockProducts } from './mocks';
import { GetProductsRequest, GetProductsResponse, Product } from './types';

const filterProducts = (
  filters: GetProductsRequest,
  products: Product[]
): Product[] => {
  const { category, priceFrom, priceTo } = filters;

  return products.filter((product) => {
    const inCategory = !isExist(category) || product.category === category;
    const inPriceFrom = !isExist(priceFrom) || product.price >= priceFrom;
    const inPriceTo = !isExist(priceTo) || product.price <= priceTo;
    return inCategory && inPriceFrom && inPriceTo;
  });
};
const sortProducts = (products: Product[]): Product[] => {
  return [...products].sort((a, b) => a.id - b.id);
};

// TODO: Убрать моки, подключить бэк
export const getProducts = (
  request: GetProductsRequest
): Promise<GetProductsResponse> => {
  const filteredData = filterProducts(request, mockProducts);
  const sortedData = sortProducts(filteredData);

  return addTimeout(Promise.resolve(sortedData));
};
