import { Body, Controller, Get, Path, Post, Route, Response, Tags } from 'tsoa';
import type { ProductDTO, ProductListRequestDTO } from './Products.DTO';
import { ProductsService } from './Products.servicer';
import type { NotFoundErrorJSON } from 'src/middlewares/error/types';

@Route('products')
@Tags('Product')
export class ProductsController extends Controller {
  /**
   * Получить список товаров с фильтрацией и пагинацией
   */
  @Post()
  public async getFilteredProducts(@Body() filters: ProductListRequestDTO): Promise<ProductDTO[]> {
    const service = new ProductsService();
    return service.getMany(filters);
  }

  /**
   * Получить конкретный товар
   * @param productId ID товара
   */
  @Response<NotFoundErrorJSON>(404, 'Not found')
  @Get('{productId}')
  public async getProduct(@Path() productId: ProductDTO['id']): Promise<ProductDTO> {
    return new ProductsService().getOne(productId);
  }
}
