import type { BaseDataSourceOptions } from 'typeorm/data-source/BaseDataSourceOptions';
import { UsersEntity } from './Users/Users.entity';

export const entities: BaseDataSourceOptions['entities'] = [UsersEntity];
