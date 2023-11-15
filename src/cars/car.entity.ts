import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'carros'})
export class CarEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ name:'name', type: 'varchar', length:'50', comment:'Nombre para el carro'})
    name:string;

    @Column({ name:'numberDoors', type: 'varchar', nullable:true ,comment:'Numero de puertas que debe tener el carro'})
    numberDoors:number;

    @Column( {name:'price', type:'integer', comment:'El precio del carro'})
    price:number;

    @Column({name:'new', type: 'boolean',default:true, comment:'Si es nuevo o no'})
    new:boolean;

    @Column({name:'color'})
    color:string;


}

