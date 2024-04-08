// // For Loops
// for (let a = 1; a <= 8; a++) {
//     // console.log(a);
// }

// nums = [1, 3, 78, 21, 33, 61, 90]
// // for (let a = 0; a <= 7; a++) {
// //     console.log(nums[a]);  // nums[1]
// // }

// // for (let a = 0; a <= (nums.length - 1); a++) {
// //     console.log(nums[a]);  // nums[1]
// // }

// let p = 0;
// // while(p <= 6) {
// //     console.log(p);
// //     p++;
// // }

// // while(p <= (nums.length - 1)) {
// //     console.log(nums[p]);
// //     p++;
// // }

// let k = 0;
// do {
//     console.log(k);
//     k++;
// } while (k <= 10);


// phones = ['tecno', 'pixel', 'itel', 'oppo', 'samsung'];
// // for (let phone of phones) {
// //     console.log(phone);
// // }

// // for (let phone in phones) {
// //     console.log(phone);     // This will display their indexes instead of the actual  elements
// // }

// phones.forEach(item => {
//     console.log(item);
// });


// Objects
const updateCarDetails = ({ make, year }) => {
    console.log(make, year);
};

const car = {
    make: "Toyota",
    model: "corolla",
    year: 2011,
    update: updateCarDetails
};

car.update({make: "Xiamoi", year: 2024});

console.log(car.make);   // using object name dot item
console.log(car["year"]);   // key-value pair

// for (let item in car) {
//     console.log(car[item]);
//     // console.log(car.item);  DNE because there is no key named item
// }


// Functions with Objects
const moveCar = () => {
    console.log(`The ${car.make} has moved from the original position`);
}

car.move = moveCar;
car.move();
