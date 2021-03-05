import { IsEmail, IsNumber, IsString, Length } from "class-validator";

export class UserDto {
   @IsString()
   first_Name: string;

    @IsString()
    last_Name: string;

    @IsString()
    password: string;

    @IsEmail()
    email: string;

    @IsNumber()
    phone:number;

    @IsString()
    city:string;

    @IsString()
    country:string;

  }
  export class UpdateDto {

    @IsString()
   first_Name: string;
   @IsString()
   last_Name: string;
   @IsString()
   password: string;
   @IsEmail()
   email: string;
   @IsNumber()
   phone:number;
   @IsString()
   city:string;
   @IsString()
   country:string;

 }