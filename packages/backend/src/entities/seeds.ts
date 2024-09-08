import type { SeederConstructor } from 'typeorm-extension';
import { UsersSeeder } from './Users/Users.seeder';

export const seeds: SeederConstructor[] = [UsersSeeder];
