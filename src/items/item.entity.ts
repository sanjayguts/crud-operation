import { Order } from 'src/orders/order.entity';
import { User } from 'src/users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';

@Entity()
export class Item {
    

/* used for create table in database */

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    ItemName:string;

    @Column() 
    
    Price: number;

    @Column() 
    Qty: number;

}