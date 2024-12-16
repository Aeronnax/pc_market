import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CategoriesEntity } from 'src/entities/Categories/Categories.entity';

@Entity({ name: 'Products' })
export class ProductsEntity {
  @PrimaryGeneratedColumn()
  declare id: number;

  @Column()
  declare name: string;

  @Column()
  declare description: string;

  @Column('decimal')
  declare price: number;

  @ManyToOne(() => CategoriesEntity, { nullable: false })
  @JoinColumn({ name: 'categoryId' })
  declare category: CategoriesEntity;
}
