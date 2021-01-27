import { Controller, Get, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service'
import { User } from  './users.entity';
import { Post,Put, Delete, Body, Param } from  '@nestjs/common';
import { UserDto } from './dto/createuser.dto';
import { UpdateDto } from './dto/createuser.dto'

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

        
@Post('create')

async create(@Body (new ValidationPipe ) createuserto:UserDto):Promise<any>{
    
    return this.usersService.create(createuserto);
}

@Get()
    index(): Promise<User[]> {
      return this.usersService.findAll();
    }


@Get(':id')
    async getuser(@Param('id') id: string):Promise<any> {
      return this.usersService.findByUserId(id);
    }


@Put('update/:id')
    async update(@Param('id') id:number, @Body() createuserto: UpdateDto): Promise<any> {

        console.log('Update #' + id)

    return this.usersService.update(id,createuserto);
    
    }


    @Delete('/delete/:id')
    async delete(@Param('id') id:number): Promise<any> {
      return this.usersService.delete(id);
    }
   
}