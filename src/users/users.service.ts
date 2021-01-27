import { Injectable } from '@nestjs/common';
import { DeleteResult, getRepository, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { UserDto } from './dto/createuser.dto';
import { UpdateDto } from './dto/createuser.dto';
import {getConnection} from "typeorm";

@Injectable()
export class UsersService {
  /* findOne(arg0: { where: { email: any; password: any; }; }): import("../orders/order.entity").Order | PromiseLike<import("../orders/order.entity").Order> {
      throw new Error('Method not implemented.');
    }
    static find(arg0: { relations: string[]; }) {
      throw new Error('Method not implemented.');
    }*/


    constructor(@InjectRepository(User) private userRepository: Repository<User>,) { }


    async create(createuserdto: UserDto): Promise<UserDto> {
        return await this.userRepository.save(createuserdto);
    }



    

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }


    async findByuserId(id: number): Promise<User> {
        return await this.userRepository.findOne(id);
    }

    async update(id: number, createuserto: UpdateDto): Promise<UpdateResult> {

        return await this.userRepository.update(id, createuserto);
    }
    public async setAvatar(id: number, avatarUrl: string){
        this.userRepository.update(id, {avatar: avatarUrl});
    }

    async delete(id): Promise<DeleteResult> {
        return await this.userRepository.delete(id);
    }    

    
    async findByEmail(email: string, password: string): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                email: email,
                password: password,
            }
        });
    }

  async findByKey(key: string,value:string): Promise<User> {
      console.log("hhh",key,value)
        return await this.userRepository.findOne({
            where: {
                [key]:value
            }
        });
    }  

    findByUserId(username: string): Promise<User | undefined> {
        const user = getRepository(User)
          .createQueryBuilder("user")
          .where("user.id = :id", { id: 2 })
          .getOne();
    
        return user;
      }

}
