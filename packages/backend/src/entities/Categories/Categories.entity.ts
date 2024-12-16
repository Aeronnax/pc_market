import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Categories' })
export class CategoriesEntity {
  @PrimaryGeneratedColumn()
  declare id: number;

  @Column()
  declare name: string;
}
