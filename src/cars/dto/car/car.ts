import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsPositive, IsString, Matches, Max, MaxLength, Min, MinLength } from "class-validator";

export class CarDto {

    @MinLength(5, {message:'El nombre debe tener minimo 5 caracteres'})
    @MaxLength(30, {message:'El nombre debe tener maximo 30 caracteres'})
    @IsNotEmpty({message:'El nombre es obligatorio'})
    name:string;

    @IsNotEmpty({ message: 'este campo no puede ser nulo' })
    @IsInt({ message: 'El número de puertas debe ser un número entero' })
    @Min(2, { message: 'El carro debe tener al menos 2 puertas' })
    @Max(5, { message: 'El carro no puede tener más de 5 puertas' })
    numberDoors: number;

    @IsNotEmpty({ message: 'este campo no puede ser nulo' })
    @IsPositive({ message: 'El precio debe ser un número positivo' })
    price: number;

    @IsNotEmpty({ message: 'este campo no puede ser nulo' })
    @IsBoolean({ message: 'El campo esNuevo debe ser un valor booleano' })
    new: boolean;

    @IsNotEmpty({ message: 'este campo no puede ser nulo' })
    @IsString({ message: 'este campo debe de ser de tipo string'})
    color: string;

}



