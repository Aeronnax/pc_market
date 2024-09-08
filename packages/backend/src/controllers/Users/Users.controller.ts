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
import type { UsersDTO, UserCreationParams } from './Users.DTO';
import { UsersService } from './Users.service';
import type { NotFoundErrorJSON, ValidateErrorJSON } from 'src/middlewares/error/types';

@Route('users')
@Tags('User')
export class UsersController extends Controller {
  /**
   * @summary Получение списка пользователей
   */
  @Get()
  public async listUsers(): Promise<UsersDTO[]> {
    return new UsersService().getAll();
  }

  /**
   * @summary Получение указанного пользователя
   * @param userId Идентификатор существующего пользователя
   */
  @Response<NotFoundErrorJSON>(404, 'Not found')
  @Get('{userId}')
  public async getUser(@Path() userId: UsersDTO['id']): Promise<UsersDTO> {
    return new UsersService().getOne(userId);
  }

  /**
   * @summary Создание нового пользователя
   * @param requestBody Данные для нового пользователя
   */
  @Response<ValidateErrorJSON>(422, 'Validation Failed')
  @SuccessResponse(201, 'Created')
  @Post()
  public async createUser(@Body() requestBody: UserCreationParams): Promise<UsersDTO> {
    const result = await new UsersService().create(requestBody);
    this.setStatus(201);
    return result;
  }

  /**
   * @summary Изменение пользователя
   * @param userId Идентификатор пользователя, у которого нужно изменить данные
   * @param requestBody Новые данные пользователя
   */
  @Response<NotFoundErrorJSON>(404, 'Not found')
  @Response<ValidateErrorJSON>(422, 'Validation Failed')
  @Put('{userId}')
  public async updateUser(
    @Path() userId: UsersDTO['id'],
    @Body() requestBody: UserCreationParams,
  ): Promise<UsersDTO> {
    return await new UsersService().update(userId, requestBody);
  }

  /**
   * @summary Удаление пользователя
   * @param userId  Идентификатор существующего пользователя, которого нужно удалить
   */
  @Response<NotFoundErrorJSON>(404, 'Not found')
  @Delete('{userId}')
  public async deleteUser(@Path() userId: UsersDTO['id']): Promise<void> {
    return await new UsersService().delete(userId);
  }
}
