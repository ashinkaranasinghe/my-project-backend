export class CreateSupplierDto {
  supplierCode: string;
  supplierName: string;
  supplierDescription: string;
  country: string;
  address: string;

  createdById: number;
  updatedById: number;
}
