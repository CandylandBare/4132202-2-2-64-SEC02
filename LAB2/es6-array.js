let cars = ["Toyota","Honda","Mazda"];
let fruit = [];
fruit[0] = "Apple";
fruit[3] = "Mango";
let rname = new Array("Yellow","SeaRueang","Mamuang");
console.log(rname);

let popCar = cars.pop();
console.log(popCar);
console.log(cars);

cars.unshift("Kubota");
console.log(cars);
cars.shift();
console.log(cars);

cars.splice(1,0,"Honda","Mazda");
console.log(cars);

const carSlide = cars.slice(1,2);
console.log(carSlide);

const newArr = cars.concat(rname);
console.log(newArr);
const newArr2 = [...cars,...rname];
console.log(newArr2);

console.log(newArr.toString());