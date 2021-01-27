import { Item } from 'src/items/item.entity';
import { User } from 'src/users/users.entity';

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customer_id:number;

    @Column()
    product_id:number;

    @Column()
   item_price: number;

    @Column() 
    item_qty: number;
    
    @Column() 
    total_amount: number;
    
    

    @ManyToOne(()=> User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "customer_id" })
    user: User;

    @ManyToOne(()=> Item, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "product_id"})
    product: Item;

}