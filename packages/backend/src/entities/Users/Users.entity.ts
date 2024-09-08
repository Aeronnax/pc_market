import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Users' })
export class UsersEntity {
  @PrimaryGeneratedColumn()
  declare id: number;

  @Column()
  declare firstName: string;

  @Column()
  declare lastName: string;

  @Column()
  declare email: string;
}
