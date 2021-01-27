import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './order.entity';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from '../users/users.module';
import { ItemsModule } from '../items/items.module'

@Module({
  imports: [UsersModule,ItemsModule,TypeOrmModule.forFeature([Order])],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
