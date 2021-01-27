import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ItemsModule } from './items/items.module';
import { OrdersModule } from  './orders/orders.module'
import { from } from 'rxjs';
@Module({
  imports: [UsersModule,ItemsModule,OrdersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
     username: 'root',
     password: '',
      database: 'crud_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
   }),
    AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
