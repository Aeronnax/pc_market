import 'dotenv/config';

import { isExist } from 'src/helpers/isExist.js';
import type { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

class DbConfigError extends Error {}

type ValidDbConfig = Pick<
  PostgresConnectionOptions,
  'host' | 'port' | 'username' | 'password' | 'database'
>;
type DbConfigFormEnv = Record<keyof ValidDbConfig, string | undefined>;
const checkValidConfigWithError = (
  envConfig: DbConfigFormEnv,
): envConfig is Record<keyof ValidDbConfig, string> => {
  if (!isExist(envConfig)) {
    throw new DbConfigError(
      'Конфиг не найден. Возможно не существует .env файл. ' +
        'Если его нету - создайте в корне проекта файл ".env" с содержимым из .env.example и отредактируйте при необходимости',
    );
  }
  if (!isExist(envConfig.host)) {
    throw new DbConfigError(
      'В конфиге (.env) отсутствует поле VITE_DB_HOST. Попробуйте установить значение "localhost". ' +
        'Это значение должно совпадать с адресом, на котором хостуется PostgreSQL',
    );
  }
  if (!isExist(envConfig.port)) {
    throw new DbConfigError(
      'В конфиге (.env) отсутствует поле VITE_DB_PORT. Попробуйте установить значение вида "5432". ' +
        'Это значение должно совпадать с портом, на котором хостуется PostgreSQL',
    );
  }
  if (Number.isNaN(+envConfig.port)) {
    throw new DbConfigError(
      'В конфиге (.env) поле VITE_DB_PORT не является числом. Попробуйте установить значение вида "5432". ' +
        'Это значение должно совпадать с портом, на котором хостуется PostgreSQL',
    );
  }
  if (!isExist(envConfig.username)) {
    throw new DbConfigError(
      'В конфиге (.env) отсутствует поле VITE_DB_USERNAME. Тут должно быть имя пользователя в PostgreSQL',
    );
  }
  if (!isExist(envConfig.password)) {
    throw new DbConfigError(
      'В конфиге (.env) отсутствует поле VITE_DB_PASSWORD. Тут должен быть пароль пользователя в PostgreSQL',
    );
  }
  if (!isExist(envConfig.database)) {
    throw new DbConfigError(
      'В конфиге (.env) отсутствует поле VITE_DB_NAME. Тут должно быть название таблицы в PostgreSQL',
    );
  }

  return true;
};

const dbConfigFormEnv: DbConfigFormEnv = {
  host: process.env.VITE_DB_HOST,
  port: process.env.VITE_DB_PORT,
  username: process.env.VITE_DB_USERNAME,
  password: process.env.VITE_DB_PASSWORD,
  database: process.env.VITE_DB_NAME,
};

if (!checkValidConfigWithError(dbConfigFormEnv)) {
  throw new DbConfigError(
    'Проверьте содержимое .env файла. ' +
      'Если его нету - создайте с содержимым из .env.example и отредактируйте',
  );
}

export const dbConfig: ValidDbConfig = {
  ...dbConfigFormEnv,
  port: +dbConfigFormEnv.port,
};
