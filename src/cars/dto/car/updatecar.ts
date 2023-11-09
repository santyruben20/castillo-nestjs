import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsPositive, IsString, Matches, Max, Min, IsOptional } from "class-validator";

export class UpdateCarDto {

    @IsOptional()
    @IsInt({ message: 'El número de puertas debe ser un número entero' })
    @Min(2, { message: 'El carro debe tener al menos 2 puertas' })
    @Max(5, { message: 'El carro no puede tener más de 5 puertas' })
    numeroPuertas?: number;

    @IsOptional()
    @IsPositive({ message: 'El precio debe ser un número positivo' })
    precio?: number;

    @IsOptional()
    @IsBoolean({ message: 'El campo esNuevo debe ser un valor booleano' })
    esNuevo?: boolean;

    @IsOptional()
    @IsString({ message: 'Este campo debe ser de tipo string' })
    @Matches(/^[A-Za-z0-9\s]+$/, { message: 'El modelo debe contener solo letras, números y espacios' })
    modelo?: string;

    @IsOptional()
    @IsDate({ message: 'Este campo tiene que ser de tipo fecha' })
    fecha?: Date;

}
