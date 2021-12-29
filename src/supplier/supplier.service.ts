import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Supplier } from './entities/supplier.entity';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier)
    private supplierRepository: Repository<Supplier>,
  ) {}

  async create(createSupplierDto: CreateSupplierDto) {
    return await this.supplierRepository.save(createSupplierDto);
  }

  async findAll() {
    return await this.supplierRepository.find();
  }

  async findOne(id: number) {
    return await this.supplierRepository.findOne(id);
  }

  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return await this.supplierRepository.update(id, updateSupplierDto);
  }

  async remove(id: number) {
    return await this.supplierRepository.softDelete(id);
  }
}
