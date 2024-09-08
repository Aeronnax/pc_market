import { AppDataSource } from 'src/database/data-source';
import { UsersEntity } from 'src/entities/Users/Users.entity';
import { NotFoundError } from 'src/helpers/errors';
import type { UserCreationParams, UsersDTO } from 'src/controllers/Users/Users.DTO';
import { isExist } from 'src/helpers/isExist';

export class UsersService {
  private userRepository = AppDataSource.getRepository(UsersEntity);

  public async getAll(): Promise<UsersDTO[]> {
    return this.userRepository.find();
  }

  public async getOne(userId: UsersDTO['id']): Promise<UsersDTO> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundError('User');
    }
    return user;
  }

  public async create(data: UserCreationParams): Promise<UsersDTO> {
    const user = new UsersEntity();
    user.firstName = data.firstName;
    user.lastName = data.lastName;
    user.email = data.email;

    return await this.userRepository.save(user);
  }

  public async update(userId: UsersDTO['id'], updatedUser: UserCreationParams): Promise<UsersDTO> {
    const user = await this.userRepository.findOneBy({
      id: userId,
    });
    if (!isExist(user)) {
      throw new NotFoundError('User');
    }

    this.userRepository.merge(user, updatedUser);
    return await this.userRepository.save(user);
  }

  public async delete(userId: UsersDTO['id']): Promise<void> {
    const userToRemove = await this.userRepository.findOneBy({ id: userId });

    if (!userToRemove) {
      throw new NotFoundError('User');
    }

    await this.userRepository.remove(userToRemove);
    return;
  }
}
