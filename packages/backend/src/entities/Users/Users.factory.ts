import { setSeederFactory } from 'typeorm-extension';
import { UsersEntity } from './Users.entity';

export const UsersFactory = setSeederFactory(UsersEntity, (faker) => {
  const user = new UsersEntity();

  user.firstName = faker.person.firstName('male');
  user.lastName = faker.person.lastName('male');
  user.email = faker.internet.email({
    firstName: user.firstName,
    lastName: user.lastName,
  });

  return user;
});
