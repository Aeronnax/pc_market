import { CategoriesDTO } from './Categories.DTO';
import { CategoriesEntity } from 'src/entities/Categories/Categories.entity';
import { Repository } from 'typeorm';
import { NotFoundError } from 'src/helpers/errors';

export class CategoriesService {
  constructor(private readonly categoriesRepository: Repository<CategoriesEntity>) {}

  public async getAll(): Promise<CategoriesDTO[]> {
    return this.categoriesRepository.find();
  }

  public async getOne(categoryId: number): Promise<CategoriesDTO> {
    const category = await this.categoriesRepository.findOne({ where: { id: categoryId } });

    if (!category) {
      throw new NotFoundError('Category');
    }
    return category;
  }
}
