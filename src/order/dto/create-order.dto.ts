import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  docNumber: string;

  @IsNotEmpty()
  @IsInt()
  totalAmount: number;

  @IsInt()
  @IsNotEmpty()
  invoiceNumber: number;

  @IsString()
  @IsNotEmpty()
  poName: string;

  @IsString()
  @IsNotEmpty()
  shippingRoute: string;

  @IsString()
  @IsNotEmpty()
  orderStatus: string;

  @IsInt()
  @IsNotEmpty()
  staffId: number;

  @IsNumber()
  @IsNotEmpty()
  customerId: number;
}
