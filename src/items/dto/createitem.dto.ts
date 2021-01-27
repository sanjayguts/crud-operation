import { IsString, IsInt, Length, IsEmail, IsNumberString, IsNumber, Max, Min } from 'class-validator';

/* check validation */  
export class ItemDto {
  
    @IsString()
    ItemName: string;
    @IsNumber()
    Price:number;
    @IsNumber()
    @Min(1)
  @Max(1000)
    Qty:number; 

  }