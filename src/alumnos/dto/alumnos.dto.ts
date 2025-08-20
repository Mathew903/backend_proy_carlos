import { Type } from "class-transformer"
import { IsString, MaxLength, IsNotEmpty, Length, IsUUID, IsOptional, IsNumber, IsDate, IsPhoneNumber, IsEmail, Matches } from "class-validator"

export class AlumnosDTO {
    @IsOptional()
    @IsUUID()
    id?: string
    
    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    nombre: string
    
    @IsNotEmpty()
    @IsNumber()
    @Length(18, 100)
    edad: number
    
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    @Matches(/^\d{4}-\d{2}-\d{2}$/) // YYYY-MM-DD format
    fecha_nacimiento: Date
    
    @IsNotEmpty()
    @IsString()
    @Length(3, 255)
    direccion: string
    
    @IsNotEmpty()
    @MaxLength(40)
    @IsPhoneNumber()
    telefono: string
    
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(255)
    email: string
}
