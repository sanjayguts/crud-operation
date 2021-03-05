import { IsString, IsInt, IsNumber, Length, Min } from 'class-validator';
export class OrderDto {
  
@IsNumber()
customer_id: number;
@IsNumber()
product_id: number;
@IsNumber()
@Min(1)
item_qty: number;


  }