import {  } from "class-validator";
import { CarDto } from "./car";
import { PickType } from "@nestjs/swagger";


export class PatchCarDto extends PickType(CarDto, 
    [
        'numeroPuertas',
        'precio',
        'modelo'
    ]
    )  {
   
}

