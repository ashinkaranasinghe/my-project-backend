import { Brand } from '../../brand/entities/brand.entity';
import { Supplier } from '../../supplier/entities/supplier.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  address: string;

  @Column()
  PhoneNo: string;

  @OneToMany(() => Brand, (brand) => brand.createdBy)
  createdBrands: Brand[];

  @OneToMany(() => Brand, (brand) => brand.updatedBy)
  updatedBrands: Brand[];

  @OneToMany(() => Supplier, (supplier) => supplier.createdBy)
  createdSuppliers: Supplier[];

  @OneToMany(() => Supplier, (supplier) => supplier.updatedBy)
  updatedSuppliers: Supplier[];
}
