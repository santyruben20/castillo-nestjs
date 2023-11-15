import { Injectable, NotFoundException } from "@nestjs/common";
import {CarEntity} from './car.entity'
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateCarDto } from "./dto/car/update-car";
import { CarDto } from "./dto/car/car";



@Injectable()
export class CarService{
    constructor(
        @InjectRepository(CarEntity)
        private CarRepository: Repository<CarEntity>,
    ){}
    async find(){
        const cars= await this.CarRepository.find();
        return cars
    }

    async findOne(id:number){
        const car= await this.CarRepository.findOne({where:{id:id}});
        if(!car){
            throw new NotFoundException({message:'Estudiante no encontrado', error:'No se ha encontrado'});
        }
        return car
    }

    create(payload:CarDto){
        const newCar= this.CarRepository.create();
        newCar.name = payload.name;
        newCar.numberDoors = payload.numberDoors;
        newCar.price = payload.price;
        newCar.new = payload.new;
        newCar.color = payload.color;

        const response = this.CarRepository.save(newCar);

        return response
    }


    async update(id: number, payload: UpdateCarDto){
        const Car= await this.findOne(id);
        Car.name = payload.name;
        Car.numberDoors = payload.numberDoors;
        Car.price = payload.price;
        Car.new = payload.new;
        Car.color = payload.color;
        if(!Car){
            throw new NotFoundException({message:'el Carro no existe', error:'No encontrado'});
        }
        const response = await this.CarRepository.update(id, Car);
        return response 
    }



    async delete(id: number){
        //const Book= await this.findOne(id)
        const Car= await this.findOne(id);
    if(!Car){
        throw new NotFoundException({message:'el Carro no existe', error:'No encontrado'});
    }
        const response = await this.CarRepository.delete(id);
        
        return response
    }
}