import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsPositive, IsString, Matches, Max, Min, IsOptional, MinLength, MaxLength } from "class-validator";

export class UpdateCarDto {

    @MinLength(5, {message:'El nombre debe tener minimo 5 caracteres'})
    @MaxLength(30, {message:'El nombre debe tener maximo 30 caracteres'})
    @IsNotEmpty({message:'El nombre es obligatorio'})
    name?:string;

    @IsOptional()
    @IsInt({ message: 'El número de puertas debe ser un número entero' })
    @Min(2, { message: 'El carro debe tener al menos 2 puertas' })
    @Max(5, { message: 'El carro no puede tener más de 5 puertas' })
    numberDoors?: number;

    @IsOptional()
    @IsPositive({ message: 'El precio debe ser un número positivo' })
    price?: number;

    @IsOptional()
    @IsBoolean({ message: 'El campo new debe ser un valor booleano' })
    new?: boolean;

    @IsOptional()
    @IsString({ message: 'Este campo debe ser de tipo string' })
    color?: string;

}
