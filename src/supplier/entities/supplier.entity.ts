import { User } from '../../user/entities/user.entity';
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
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  supplierCode: string;

  @Column()
  supplierName: string;

  @Column()
  supplierDescription: string;

  @Column()
  country: string;

  @Column()
  address: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => User, (user) => user.createdSuppliers, {
    createForeignKeyConstraints: false,
  })
  createdBy: User;

  @ManyToOne(() => User, (user) => user.updatedSuppliers, {
    createForeignKeyConstraints: false,
  })
  updatedBy: User;

  @Column()
  createdById: number;

  @Column()
  updatedById: number;
}
