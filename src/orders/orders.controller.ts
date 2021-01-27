import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { Order } from './order.entity';
import { OrdersService } from './orders.service';
import { OrderDto } from './dto/order.dto';
import { ItemDto } from 'src/items/dto/createitem.dto';

@Controller('orders')
export class OrdersController {
    itemServices: any;
  usersService: any;
    constructor(private orderservice: OrdersService) { }
    
    @Post('create')
    async create(@Body(new ValidationPipe()) order: OrderDto,) 
    {
    return this.orderservice.createorder(order);

    }

    @Get('/user/:first_Name')
    async findOrderBylastname(@Param('first_Name') first_Name: string):Promise<Order> 
    {
     return this.orderservice.findBylastname(first_Name);
   }

   @Get('/user/:first_Name')
    async findOrderByuser(@Param('first_Name') first_Name: string):Promise<Order> 
    {
     return this.orderservice.findByuser(first_Name);
   }

    @Get('/user/:email')
    async findOrderByemail(@Param('email') email: string):Promise<Order> 
    {
     return this.orderservice.findByemail(email);
   }
 

   @Get('/item/:ItemName')
   async findOrderByitem(@Param('ItemName') ItemName: string):Promise<Order> 
   {
    return this.orderservice.findByitem(ItemName);
  }

    @Get()
    index(): Promise<Order[]> {
      return this.orderservice.findAll();
    }

  
    @Get(':id')
    async getorder(@Param('id') id: number):Promise<Order> {
      return this.orderservice.findById(id);
    }   

    
    
@Put('/update/:id')
async updateorder(@Param('id')id:number,order:OrderDto):Promise<Order>{
  return this.orderservice.update(id,order);

}

@Delete('/delete/:id')
    async delete(@Param('id') id:number): Promise<any> {
      return this.orderservice.delete(id);
    }

}
