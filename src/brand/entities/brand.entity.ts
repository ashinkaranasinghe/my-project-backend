import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brandName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => User, (user) => user.createdBrands, {
    createForeignKeyConstraints: false,
  })
  createdBy: User;

  @ManyToOne(() => User, (user) => user.updatedBrands, {
    createForeignKeyConstraints: false,
  })
  updatedBy: User;

  @Column()
  createdById: number;

  @Column()
  updatedById: number;
}
