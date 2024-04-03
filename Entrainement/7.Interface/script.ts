interface personnage {
    stamina: number
    strength: number
    takeOff: (action: string) => void;
}

class PersonnageFactory implements personnage {
stamina: number;
strength: number;

constructor(stamina: number, strenght:number){
    this.stamina = stamina
    this.strength = strenght
}


takeOff(action: string) {
    console.log(action)

};
}

const obj = new PersonnageFactory(1000, 200);

obj.takeOff("Fight");
