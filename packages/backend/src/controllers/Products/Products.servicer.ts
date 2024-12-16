import { AppDataSource } from 'src/database/data-source';
import { ProductsEntity } from 'src/entities/Products/Products.entity';
import { NotFoundError } from 'src/helpers/errors';
import type { ProductDTO } from 'src/controllers/Products/Products.DTO';

export class ProductsService {
  private productRepository = AppDataSource.getRepository(ProductsEntity);

  private mapToDTO(product: ProductsEntity): ProductDTO {
    return product;
  }

  public async getAll(): Promise<ProductDTO[]> {
    const products = await this.productRepository.find({ relations: ['category'] });
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
