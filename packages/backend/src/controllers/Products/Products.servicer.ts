import { AppDataSource } from 'src/database/data-source';
import { ProductsEntity } from 'src/entities/Products/Products.entity';
import { CategoriesEntity } from 'src/entities/Categories/Categories.entity';
import { NotFoundError } from 'src/helpers/errors';
import type { ProductCreationParams, ProductDTO } from 'src/controllers/Products/Products.DTO';

export class ProductsService {
  private productRepository = AppDataSource.getRepository(ProductsEntity);
  private categoryRepository = AppDataSource.getRepository(CategoriesEntity);

  private mapToDTO(product: ProductsEntity): ProductDTO {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      categoryId: product.category.id,
    };
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

  public async create(data: ProductCreationParams): Promise<ProductDTO> {
    const category = await this.categoryRepository.findOne({ where: { id: data.categoryId } });

    if (!category) {
      throw new NotFoundError('Категория');
    }

    const product = new ProductsEntity();
    product.name = data.name;
    product.description = data.description;
    product.price = data.price;
    product.category = category;

    const savedProduct = await this.productRepository.save(product);
    return this.mapToDTO(savedProduct);
  }

  public async update(
    productId: ProductDTO['id'],
    updatedProduct: ProductCreationParams,
  ): Promise<ProductDTO> {
    const product = await this.productRepository.findOne({
      where: { id: productId },
      relations: ['category'],
    });
    if (!product) {
      throw new NotFoundError('Продукт');
    }

    const category = await this.categoryRepository.findOne({
      where: { id: updatedProduct.categoryId },
    });
    if (!category) {
      throw new NotFoundError('Категория');
    }

    this.productRepository.merge(product, updatedProduct);
    product.category = category;

    const savedProduct = await this.productRepository.save(product);
    return this.mapToDTO(savedProduct);
  }

  public async delete(productId: ProductDTO['id']): Promise<void> {
    const productToRemove = await this.productRepository.findOne({ where: { id: productId } });

    if (!productToRemove) {
      throw new NotFoundError('Продукт');
    }

    await this.productRepository.remove(productToRemove);
  }
}
