import { Item } from 'src/items/item.entity';
import { Order } from 'src/orders/order.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity()
export class User {
    ordersRepository: any;
    username(username: any): User | PromiseLike<User> {
        throw new Error('Method not implemented.');
    }
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_Name: string;

    @Column()
    last_Name: string;

    @Column()
    password:string;

    @Column()
    email: string;

    @Column()
    phone: number;

    @Column()
    city: string;

    @Column()
    country: string;
    @Column()
    avatar: string;

}