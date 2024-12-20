import { AppDataSource } from 'src/database/data-source';
import { ProductsEntity } from 'src/entities/Products/Products.entity';
import { type ProductDTO, type ProductListRequestDTO } from 'src/controllers/Products/Products.DTO';
import { type FindManyOptions, type FindOptionsWhere } from 'typeorm';
import { isExist } from 'src/helpers/isExist';
import { getMinMaxFilter } from 'src/helpers/db/getMinMaxFilter';
import { getSortRequest } from 'src/helpers/db/getSortRequest';
import { addPaginationToRequest } from 'src/helpers/db/addPaginationToRequest';
import { NotFoundError } from 'src/helpers/errors';

export class ProductsService {
  private productRepository = AppDataSource.getRepository(ProductsEntity);

  private mapToDTO({ id, name, description, price, category }: ProductsEntity): ProductDTO {
    return { id, name, description, price, category };
  }

  /**
   * Получить список товаров с фильтрацией.
   * @param filters Параметры фильтрации
   */
  public async getMany(filters: ProductListRequestDTO): Promise<ProductDTO[]> {
    const dbRequest: FindManyOptions<ProductsEntity> = {
      relations: {
        category: true,
      },
    };

    dbRequest.order = getSortRequest(filters.sort);

    addPaginationToRequest(dbRequest, filters);

    const filtersRequest: FindOptionsWhere<ProductsEntity> = {};
    dbRequest.where = filtersRequest;

    if (isExist(filters.categoryId)) {
      filtersRequest.category = {
        id: filters.categoryId,
      };
    }

    filtersRequest.price = getMinMaxFilter(filters.minPrice, filters.maxPrice);

    const products = await this.productRepository.find(dbRequest);
    return products.map(this.mapToDTO.bind(this));
  }

  public async getOne(productId: ProductDTO['id']): Promise<ProductDTO> {
    const product = await this.productRepository.findOne({
      where: { id: productId },
      relations: ['category'],
    });

    if (!product) {
      throw new NotFoundError('Продукт');
    }
    return this.mapToDTO(product);
  }
}
