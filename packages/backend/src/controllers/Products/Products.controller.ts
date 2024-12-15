import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Route,
  SuccessResponse,
  Response,
  Tags,
} from 'tsoa';
import type { ProductDTO, ProductCreationParams } from './Products.DTO';
import { ProductsService } from './Products.servicer';
import type { NotFoundErrorJSON, ValidateErrorJSON } from 'src/middlewares/error/types';

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

  /**
   * Создание нового товара
   * @param requestBody Данные товара
   */
  @Response<ValidateErrorJSON>(422, 'Validation Failed')
  @SuccessResponse(201, 'Created')
  @Post()
  public async createProduct(@Body() requestBody: ProductCreationParams): Promise<ProductDTO> {
    const result = await new ProductsService().create(requestBody);
    this.setStatus(201);
    return result;
  }

  /**
   * Обновление данных товара
   * @param productId ID товара
   * @param requestBody Новые данные товара
   */
  @Response<NotFoundErrorJSON>(404, 'Not found')
  @Response<ValidateErrorJSON>(422, 'Validation Failed')
  @Put('{productId}')
  public async updateProduct(
    @Path() productId: ProductDTO['id'],
    @Body() requestBody: ProductCreationParams,
  ): Promise<ProductDTO> {
    return await new ProductsService().update(productId, requestBody);
  }

  /**
   * Удаление товара
   * @param productId ID товара
   */
  @Response<NotFoundErrorJSON>(404, 'Not found')
  @Delete('{productId}')
  public async deleteProduct(@Path() productId: ProductDTO['id']): Promise<void> {
    return await new ProductsService().delete(productId);
  }
}
