import type { SeederFactoryItem } from 'typeorm-extension';

import { UsersFactory } from './Users/Users.factory';

export const factories: SeederFactoryItem[] = [UsersFactory];
