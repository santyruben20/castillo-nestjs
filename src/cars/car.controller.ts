import { Controller, Delete, Get, Post, Put, Param, Patch, Body, Query, ParseIntPipe,} from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CarDto } from "./dto/car/car";
import { UpdateCarDto } from "./dto/car/update-car";
import { ChangStateCarDto } from "./dto/car/chang-state-cars";
import { CarService } from "./car.service";
import { CreateCarDto } from "./dto/car/create-car";


@ApiTags('Car Module')
@Controller('Car')
export class CarController {

    constructor(private readonly carService:CarService){
    }

    @ApiOperation({description:'Buscar un Carro', summary:'Find Car'})
    @Get()
    async find(@Query() query:any ){
        const response = await this.carService.find();
        return response
    }


    @ApiOperation({description:'Buscar un Carro', summary:'Find One Car'})
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id:number){
        const response = await this.carService.findOne(id);

        return response;
    }

    @ApiOperation({description:'Agregar un Carro', summary:'Add Car'})
    @Post()
    async create(@Body() payload: CreateCarDto){
        const response = await this.carService.create(payload);
        return response;
    }

    @ApiOperation({description:'Editar un Carro', summary:'Update Cars'})
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id:number, @Body() payload:UpdateCarDto){
        const response = await this.carService.update(id, payload);
        return {id, body:payload}
    }

    @ApiOperation({description:'Cambiar un Carro', summary:'Change Car'})
    @Patch(':id')
    patch(@Param('id') id:ChangStateCarDto){
        return id
    }

    @ApiOperation({description:'Eliminar un Carro', summary:'Delete Cars'})
    @Delete(':id')
    async delete(@Param('id') id:number){
        const response = await this.carService.delete(id);

        return response;
    }

}

