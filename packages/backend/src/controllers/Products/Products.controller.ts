import { Body, Controller, Get, Path, Post, Route, Response, Tags } from 'tsoa';
import type { ProductDTO, ProductListRequestDTO } from './Products.DTO';
import { ProductsService } from './Products.servicer';
import type { NotFoundErrorJSON } from 'src/middlewares/error/types';
import { type ListPaginatedResponseDTO } from 'src/types/listResponseTypes';
import { type ProductsEntity } from 'src/entities/Products/Products.entity';
import { toListPaginatedResponseWithMap } from 'src/helpers/transformToListResponse';

@Route('products')
@Tags('Product')
export class ProductsController extends Controller {
  private mapToDTO({ id, name, description, price, category }: ProductsEntity): ProductDTO {
    return { id, name, description, price, category };
  }

  /**
   * Получить список товаров с фильтрацией и пагинацией
   */
  @Post()
  public async getProducts(
    @Body() filters: ProductListRequestDTO,
  ): Promise</** Список товаров */ ListPaginatedResponseDTO<ProductDTO>> {
    const result = await new ProductsService().getMany(filters);

    return toListPaginatedResponseWithMap(...result, this.mapToDTO.bind(this));
  }

  /**
   * Получить конкретный товар
   * @param productId ID товара
   */
  @Response<NotFoundErrorJSON>(404, 'Not found')
  @Get('{productId}')
  public async getProduct(@Path() productId: ProductDTO['id']): Promise<ProductDTO> {
    const result = await new ProductsService().getOne(productId);
    return this.mapToDTO(result);
  }
}
