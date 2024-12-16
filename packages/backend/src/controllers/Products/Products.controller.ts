import { Controller, Get, Path, Route, Response, Tags } from 'tsoa';
import type { ProductDTO } from './Products.DTO';
import { ProductsService } from './Products.servicer';
import type { NotFoundErrorJSON } from 'src/middlewares/error/types';

// TODO: Добавить фильтрацию (по категории): преобразовать listProducts в POST, добавить ДТО, поправить сервис

@Route('products')
@Tags('Product')
export class ProductsController extends Controller {
  /**
   * Получить список всех товаров
   */
  @Get()
  public async listProducts(): Promise<ProductDTO[]> {
    return new ProductsService().getAll();
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
