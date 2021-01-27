import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Item } from './item.entity';
import { ItemDto } from './dto/createitem.dto'


@Injectable()
export class ItemsService {

    constructor(@InjectRepository(Item) private itemsRepository: Repository<Item>) { }    
    async createItem(createitem: ItemDto): Promise<ItemDto> {
        return await this.itemsRepository.save(createitem)
    }

    async updateitem(id: number, createitem: ItemDto): Promise<UpdateResult> {

        return await this.itemsRepository.update(id, createitem);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.itemsRepository.delete(id);
    }

    async findByKey(key: string,value:string): Promise<Item> {
        
        return await this.itemsRepository.findOne({
            where: {
                [key]:value
            }
        });
    }




async findById(id: number): Promise<Item> {
        return await this.itemsRepository.findOne(id);
    } 
    
    async findAll(): Promise<Item[]> {
        return await this.itemsRepository.find();
    }

}
   
