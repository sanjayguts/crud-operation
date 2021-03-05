import { Body, Controller, Post } from '@nestjs/common';
import { Param } from  '@nestjs/common';
import { User } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { diskStorage } from  'multer';
import { extname } from  'path';
import { UseInterceptors, UploadedFile } from  '@nestjs/common';
import { FileInterceptor } from  '@nestjs/platform-express';
import { Get, Res } from  '@nestjs/common';

@Controller('auth')
export class AuthController {

  SERVER_URL:  string  =  "http://localhost:3000/";
  
    constructor(private  readonly  authService:  AuthService,private readonly userService:UsersService) {}
    @Post('login')
    async login(@Body() user: User): Promise<any> {
      return this.authService.login(user);
    }

    @Get('avatars/:fileId')
    async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
      res.sendFile(fileId, { root: 'avatars'});
    }

    @Post(':id/avatar')
    @UseInterceptors(FileInterceptor('file',
      {
        storage: diskStorage({
          destination: './avatars', 
          filename: (req, file, cb) => {
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
          return cb(null, `${randomName}${extname(file.originalname)}`)
        }
        })
      }
    )
    )
    uploadAvatar(@Param('id') id, @UploadedFile() file) {
      
      console.log("hh");
      this.userService.setAvatar(Number(id), `${this.SERVER_URL}${file.path}`);
    

    }



}


