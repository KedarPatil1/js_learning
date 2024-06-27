console.log(`-----------Task 01----------------`);
class Vehical {
    constructor(name,brand,CC,engine,topspeed){
        this.name=name;
        this.brand=brand;
        this.CC=CC;
        this.engine=engine;
        this.topspeed=topspeed;
    }
    details(){
        console.log(`Name of bike is ${this.name} from ${this.brand} whose CC is ${this.CC} which has ${this.engine} stoke whose top speed is ${this.topspeed}`);
    } 
}

let hero= new Vehical("Passion","Hero",110,2,90);
let honda= new Vehical("Shine","Honda",125,4,100);

hero.details();
honda.details();

console.log(`-----------Task 02----------------`);
class Collage {
    constructor(collName,city,type,dtecode){

    this.collName=collName;
    this.city=city;
    this.type=type;
    this.dtecode=dtecode;
    }
details(){
    console.log(`Name of collage is ${this.collName} located at ${this.city}, which is ${this.type} whose dte code is ${this.dtecode}`);
}
}

let siem= new Collage("SIEM","Nashik","Private",123);
siem.details()

let kk= new Collage("KK Wagh","Pune","Private",456);
kk.details()

