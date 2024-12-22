import { AppDataSource } from 'src/database/data-source';
import { ProductsEntity } from 'src/entities/Products/Products.entity';
import { type ProductDTO, type ProductListRequestDTO } from 'src/controllers/Products/Products.DTO';
import { type FindManyOptions, type FindOptionsWhere } from 'typeorm';
import { isExist } from 'src/helpers/isExist';
import { getMinMaxFilter } from 'src/helpers/db/getMinMaxFilter';
import { getSortRequest } from 'src/helpers/db/getSortRequest';
import { addPaginationToRequest } from 'src/helpers/db/addPaginationToRequest';
import { NotFoundError } from 'src/helpers/errors';
import { type PaginatedResult } from 'src/types/db';

export class ProductsService {
  private productRepository = AppDataSource.getRepository(ProductsEntity);

  /**
   * Получить список товаров с фильтрацией.
   * @param filters Параметры фильтрации
   */
  public async getMany(filters: ProductListRequestDTO): Promise<PaginatedResult<ProductsEntity>> {
    const dbRequest: FindManyOptions<ProductsEntity> = {
      relations: {
        category: true,
      },
    };

    dbRequest.order = getSortRequest(filters.sort) ?? {
      id: 'asc',
    };

    addPaginationToRequest(dbRequest, filters);

    const filtersRequest: FindOptionsWhere<ProductsEntity> = {};
    dbRequest.where = filtersRequest;

    if (isExist(filters.categoryId)) {
      filtersRequest.category = {
        id: filters.categoryId,
      };
    }

    filtersRequest.price = getMinMaxFilter(filters.minPrice, filters.maxPrice);

    return this.productRepository.findAndCount(dbRequest);
  }

  public async getOne(productId: ProductDTO['id']): Promise<ProductsEntity> {
    const product = await this.productRepository.findOne({
      where: { id: productId },
      relations: ['category'],
    });

    if (!product) {
      throw new NotFoundError('Продукт');
    }
    return product;
  }
}
