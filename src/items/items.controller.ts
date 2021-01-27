import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { Item } from './item.entity';
import { ItemsService } from './items.service';
import { ItemDto } from './dto/createitem.dto';


@Controller('items')
export class ItemsController {

    constructor(private itmsservice: ItemsService) { }

    @Post('create')
    async create(@Body(new ValidationPipe()) createitem: ItemDto, ) {

        return this.itmsservice.createItem(createitem);

    }

    @Get()
    index(): Promise<Item[]> {
      return this.itmsservice.findAll();
    }
    
    @Put('update/:id')
    async update(@Param('id') id:number, @Body() createitem: ItemDto): Promise<any> {

        console.log('Update #' + id)

    return this.itmsservice.updateitem(id,createitem);
    }

    @Delete('/delete/:id')
    async delete(@Param('id') id:number): Promise<any> {
      return this.itmsservice.delete(id);
    }

}
