import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsPositive, IsString, Matches, Max, Min } from "class-validator";

export class CarDto {

    @IsNotEmpty({ message: 'este campo no puede ser nulo' })
    @IsInt({ message: 'El número de puertas debe ser un número entero' })
    @Min(2, { message: 'El carro debe tener al menos 2 puertas' })
    @Max(5, { message: 'El carro no puede tener más de 5 puertas' })
    numeroPuertas: number;

    @IsNotEmpty({ message: 'este campo no puede ser nulo' })
    @IsPositive({ message: 'El precio debe ser un número positivo' })
    precio: number;

    @IsNotEmpty({ message: 'este campo no puede ser nulo' })
    @IsBoolean({ message: 'El campo esNuevo debe ser un valor booleano' })
    esNuevo: boolean;

    @IsNotEmpty({ message: 'este campo no puede ser nulo' })
    @IsString({ message: 'este campo debe de ser de tipo string'})
    @Matches(/^[A-Za-z0-9\s]+$/, { message: 'El modelo debe contener solo letras, números y espacios' })
    modelo: string;

    @IsNotEmpty({ message: 'este campo no puede ser nulo' })
    @IsDate({message: 'este campo tiene que ser de tipo fecha'})
    fecha: Date;

}



