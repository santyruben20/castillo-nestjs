import {  } from "class-validator";
import { CarDto } from "./car";
import { PickType } from "@nestjs/swagger";


export class ChangStateCarDto extends PickType(CarDto, 
    [
        'numberDoors',
        'price',
        'color'
    ]
    )  {
   
}

