import { Controller, Delete, Get, Post, Put, Param, Patch, Body,} from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CarDto } from "./dto/car/car";
import { UpdateCarDto } from "./dto/car/updatecar";
import { PatchCarDto } from "./dto/car/patchcars";


@ApiTags('Car Module')
@Controller('Car')
export class CarController {
    @ApiOperation({description:'Buscar un Carro', summary:'Find Car'})
    @Get()
    find(){
        return ['Mazda', 'Chevrolet','Toyoota','Kia']
    }

    @ApiOperation({description:'Buscar un Carro', summary:'Find One Car'})
    @Get(':id')
    findOne(@Param('id') id:number){
        return id;
    }

    @ApiOperation({description:'Agregar un Carro', summary:'Add Car'})
    @Post()
    create(@Body() payload:CarDto){
        return payload;
    }

    @ApiOperation({description:'Editar un Carro', summary:'Update Cars'})
    @Put(':id')
    update(@Param('id') id:number, @Body() payload:UpdateCarDto){
        return {id, body:payload}
    }

    @ApiOperation({description:'Cambiar un Carro', summary:'Change Car'})
    @Patch(':id')
    patch(@Param('id') id:PatchCarDto){
        return id
    }

    @ApiOperation({description:'Eliminar un Carro', summary:'Delete Cars'})
    @Delete(':id')
    delete(@Param('id') id:number){
        return 'Carro Eliminado ${id}';
    }

}

