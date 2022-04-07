import { IsInt, IsOptional, IsString } from 'class-validator';

export class EditProductDto {
  @IsString()
  @IsOptional()
  sku: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsInt()
  @IsOptional()
  price: number;
}
