import { Controller, Get, Path, Route, Tags } from 'tsoa';
import { CategoriesService } from './Categories.service';
import { type CategoriesDTO } from './Categories.DTO';
import { AppDataSource } from 'src/database/data-source';
import { CategoriesEntity } from 'src/entities/Categories/Categories.entity';
import { type ListResponseDTO } from 'src/types/listResponseTypes';
import { toListResponse } from 'src/helpers/transformToListResponse';

@Route('categories')
@Tags('Product')
export class CategoriesController extends Controller {
  private readonly service = new CategoriesService(AppDataSource.getRepository(CategoriesEntity));

  @Get()
  public async getCategories(): Promise<ListResponseDTO<CategoriesDTO>> {
    return toListResponse(await this.service.getAll());
  }

  @Get('{categoryId}')
  public async getCategory(@Path() categoryId: CategoriesDTO['id']): Promise<CategoriesDTO> {
    return this.service.getOne(categoryId);
  }
}
