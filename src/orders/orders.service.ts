import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, } from 'typeorm';
import { Order } from './order.entity';
import { OrderDto } from './dto/order.dto';
import { User } from '../users/users.entity';
import { UsersService } from '../users/users.service';
import { Item } from 'src/items/item.entity';
import { ItemsService } from '../items/items.service'

@Injectable()
export class OrdersService {

   constructor(@InjectRepository(Order) private ordersRepository: Repository<Order>, private usersService: UsersService, private itemService: ItemsService) { }

   async createorder(order: OrderDto): Promise<Order> {

      const item = await this.itemService.findById(order.product_id);
      const { item_qty } = order;
      const { Price, Qty } = item;

      if (Qty > item_qty) {
         const total_price = item_qty * Price;
         return await this.ordersRepository.save({ ...order, total_amount: total_price })
      }
      else {
         throw new HttpException('input qty is greater than availble qty...', HttpStatus.BAD_REQUEST);
      }
   }

   async findByuser(first_Name: string): Promise<Order> {

      const user = await this.usersService.findByKey("first_Name", first_Name);
      if (user) {
         return await this.ordersRepository.findOne({ customer_id: user.id });
      }
      else {
         throw new HttpException(`${first_Name} not found`, HttpStatus.BAD_REQUEST);
      }
   }
   async findBylastname(last_Name: string): Promise<Order> {

      const userlastname = await this.usersService.findByKey("last_Name", last_Name);
      console.log(userlastname)
      if (userlastname) {
         return await this.ordersRepository.findOne({ customer_id: userlastname.id });
      }
      else {
         throw new HttpException(`${last_Name} not found`, HttpStatus.BAD_REQUEST);
      }
   }

   async findByemail(email: string): Promise<Order> {

      const useremail = await this.usersService.findByKey("email", email);
      if (useremail) {
         return await this.ordersRepository.findOne({ customer_id: useremail.id });
      }
      else {
         throw new HttpException(`${email} not found`, HttpStatus.BAD_REQUEST);
      }
   }
   async findByitem(ItemName: string): Promise<any> {

      const item = await this.itemService.findByKey("ItemName", ItemName,);

      if (item) {
         return await this.ordersRepository.findOne({ product_id: item.Id });
      }
      else {
         throw new HttpException(`${ItemName} not found`, HttpStatus.BAD_REQUEST);
      }
   }

   async findAll(): Promise<Order[]> {

      return await this.ordersRepository.find();
   }

   async findById(id: number): Promise<Order> {
      return await this.ordersRepository.findOne(id);
   }

   async update(id: number, order: OrderDto): Promise<any> {
      return await this.ordersRepository.update(id, order);

   }
   async delete(id: number): Promise<any> {
      return await this.ordersRepository.delete(id);

   }
}