// class NameOfYourClass {
//     constructor(color, height) {
//         this.color = color;
//         this.height = height;
//     }

//     sayProps() {
//         return `The color of this object is ${this.color} and is ${this.height}cm tall`;
//     }
// }

// const newInstance = new NameOfYourClass("red", 56);
// console.log(newInstance.sayProps())

// Encapsulation
// class Car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }

//     getMake() {
//         return `This car is of the ${this,this.make} make`
//     }

//     getModel() {
//         return `This car is a ${this.model} model`
//     }
// }

// const newCar = new Car('Tesla', 'Cybertruck');

// console.log(newCar.make)
// console.log(newCar.getMake())
// console.log(newCar.getModel())


// Inheritance
class Animal{
    constructor(name, type, diet) {
        this.name = name;
        this.type = type;
        this.diet = diet;
    }

    sound() {
        return `A ${this.name} also makes a sound`;
    }
}


class Crab extends Animal {
    constructor(name, type, diet, color, armsize) {
        super(name, type, diet)
        this.color = color;
        this.armsize = armsize;
    }

    sound() {
        return `This crab squeak's a bit`
    }

    showColor() {
        return `This crab name is ${this.name} and has a ${this.color} color`
    }
}

class Jaguar extends Animal {
    constructor(name, type, diet, furColor) {
        super(name, type, diet)                   
        this.furColor = furColor;
    }

    sound() {
        return `This jaguar roars a bit loud`            // Polymorphism
    }

    jump() {
        return `The jaguar has leaped into the air`
    }
}

const animal = new Animal("Girrafe", "land", "herbivore");
const crab = new Crab("flowercrab", "aquatic", "omnivores", "black", "small");
const jaguar = new Jaguar("Paraguay jaguar", "land", "carnivores", "black")

console.log(animal.sound());
console.log(crab.sound());
// console.log(crab.showColor());
console.log(jaguar.sound());

// 1. Open cmd 
// 2. git config --global user.name "your_github_username"
// 3. git config --global user.email "the_mail_you_used_for_github"
