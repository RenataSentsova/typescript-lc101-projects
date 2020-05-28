import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
import { Payload } from './Payload';

export class Rocket {
    name : string;
    totalCapacityKg : number;
    cargoItems : Array<Cargo> = [];
    astronauts : Array<Astronaut> = [];

    constructor (name : string, totalCapacityKg : number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass ( items : Array<Payload> ) : number {
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    }

    currentMassKg () : number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }

    canAdd (item: Payload) : boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }

    addCargo (cargo: Cargo) : boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo); 
            return true;
        }
        return false;
    }

    addAstronaut (astronaut: Astronaut) : boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}