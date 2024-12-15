import { Controller, Get, Path, Route, Tags } from 'tsoa';
import { CategoriesService } from './Categories.service';
import { CategoriesDTO } from './Categories.DTO';
import { AppDataSource } from 'src/database/data-source';
import { CategoriesEntity } from 'src/entities/Categories/Categories.entity';

@Route('categories')
@Tags('Categories')
export class CategoriesController extends Controller {
  private readonly service = new CategoriesService(AppDataSource.getRepository(CategoriesEntity));

  @Get()
  public async getCategories(): Promise<CategoriesDTO[]> {
    return this.service.getAll();
  }

  @Get('{categoryId}')
  public async getCategory(@Path() categoryId: string): Promise<CategoriesDTO> {
    return this.service.getOne(Number(categoryId));
  }
}
