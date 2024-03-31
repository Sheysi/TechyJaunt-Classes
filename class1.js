function sayHi() {
    console.log("Hello there")
}

// sayHi("Helen")

const whatCar = ({brand = "Honda", colour}) => {
    console.log("This is the " + brand + " brand with a colour of " + colour)
}

// whatCar(colour = "blue", brand = "Lexus")
// whatCar({colour: "blue", brand: "Lexus"})     // Parameters are objects

const sumUpValues = ({x, y, z}) => {
    let c = x + y + z;
    return c;
}

console.log(sumUpValues({x: 2, y: 3, z: 1}))

const fullName = ({Firstname, Lastname}) => {
    return Firstname + " " + Lastname;
}

console.log(fullName({Firstname: "Fatima", Lastname: "Lanre"}));

const scores = [20, 30, 68, 12]
const englishScores = [50, 70, 10]
const scores2 = [...scores, ...englishScores]

const sumUpScores = (scores) => {
    let sum = 0
    for (let score of scores) {
        sum += score
        // sum = sum + score
    }

    return sum
}

console.log(sumUpScores(scores))

const sumUpScoresV2 = (...scores) => {
    return scores.reduce((total, score) => total + score, 0);
}

console.log(sumUpScoresV2(...scores2))


const sumFunc = sumUpScores(scores);
console.log("sumfunc result: ", sumFunc)
