"use strict";
class PersonnageFactory {
    constructor(stamina, strenght) {
        this.stamina = stamina;
        this.strength = strenght;
    }
    takeOff(action) {
        console.log(action);
    }
    ;
}
const obj = new PersonnageFactory(1000, 200);
obj.takeOff("Fight");
