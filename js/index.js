// // ifga doir misollar
// // // 1-misol
// let num = +prompt("Sonni kiriting");

// if (num > 0) {
//   num = num + 1;
// }

// console.log(num);

// // // 2-misol
// let numbertwo = +prompt("sonni kiriting");
// if (numbertwo > 0) {
//   numbertwo = numbertwo + 1;
// } else if (numbertwo < 0) {
//   numbertwo = numbertwo - 2;
// }

// console.log(numbertwo);

// // // // 3-misol
// let numberThree = +prompt("Sonni kiriting");
// if (numberThree > 0 && numberThree < 0 && numberThree == 0) {
//   numberThree = numberThree + 1;
//   numberThree = numberThree - 2;
// }

// // console.log(numberThree);

// // // 4-misol
// let number_first = +prompt("Enter the number 1");
// let number_two = +prompt("Enter the number 2");
// let number_three = +prompt("Enter the number 3");
// let count = 0;

// if (number_first > 0) count++;
// if (number_two > 0) count++;
// if (number_three > 0) count++;

// console.log(`Musbat sonlar soni: ${count}`);

// // // 5-misol
// let number$first = +prompt("Enter the number 1");
// let number$two = +prompt("Enter the number 2");
// let number$three = +prompt("Enter the number 3");
// let positiveCount = 0;
// let negativeCount = 0;

// if (number$first > 0) positiveCount++;
// if (number$first < 0) negativeCount++;

// if (number$two > 0) positiveCount++;
// if (number$two < 0) negativeCount++;

// if (number$three > 0) positiveCount++;
// if (number$three < 0) negativeCount++;

// console.log(`Musbat sonlar soni: ${positiveCount}`);
// console.log(`Manfiy sonlar soni: ${negativeCount}`);

// // 6-misol
// let num1 = +prompt("Birinchi sonni kiriting:");
// let num2 = +prompt("Ikkinchi sonni kiriting:");

// let aLargeNumber;

// if (num1 > num2) {
//   aLargeNumber = num1;
// } else {
//   aLargeNumber = num2;
// }
// console.log("Ikkita sonni kottasi", aLargeNumber);

// 7-misol
// let sevenA = +prompt("1-son");
// let sevenB = +prompt("2-son");
// let position;

// if(sevenA<sevenB){
//   position =sevenA;
// } else if(sevenB<sevenA){
//   position=sevenB;
// } else{
//   console.log("Ikkita son teng");
// }

// if(position){
//   console.log("Kichik sonni tartib raqami:" + position);
// }
// // 8-misol
// let num_first = +prompt("1-sonni kiriting");
// let num_two = +prompt("2-sonni kiriting");
// let $larger, $smaller;

// if (num_first > num_two) {
//   larger = num_first;
//   smaller = num_two;
// } else {
//   larger = num_two;
//   smaller = num_first;
// }
// console.log("Katta son:", $larger);
// console.log("Kichik son:", $smaller);

// 12-misol
// let twelveA = +prompt("1-son");
// let twelveB = +prompt("2-son");
// let twelveC = +prompt("3-son");
// let smallest = twelveA;

// if(twelveB<smallest){
//   smallest=twelveB;
// }
// if(twelveC<smallest){
//   smallest=twelveC;
// }

// console.log("Eng kichik son", smallest);

// 14-misol
// let son_1 = +prompt("1-sonni kiriting");
// let son_2 = +prompt("2-sonni kiriting");
// let larger, smaller;

// if (son_1 > son_2) {
//   larger = son_1;
//   smaller = son_2;
// } else {
//   larger = son_2;
//   smaller = son_1;
// }

// console.log("Kichik son:", smaller);
// console.log("Katta son:", larger);

// 15-misol
// let fifteen$A = +prompt("1-son");
// let fifteen$B = +prompt("2-son");
// let fifteen$C = +prompt("3-son");
// let sum = fifteen$A+fifteen$B+fifteen$C;
// console.log("Uchta sonni yig'indisi ", sum);

// // Booleanga doir misollar
// // 1-Boolean
// let a = +prompt("a sonini kiriting");
// if (a > 0) {
//   console.log("a soni musbat");
// } else {
//   console.log("a sonni musbat emas");
// }

// // 2-Boolean
// let boolean_a = +prompt("a sonini kiriting");
// if (boolean_a % 2 == 1) {
//   console.log("Kiritgan soningiz toq son");
// } else {
//   console.log("Kiritgan soningiz toq son emas");
// }

// // 3-boolean
// let three_a = +prompt("three number ");
// if (three_a % 2 == 0) {
//   console.log("A soni juft son");
// } else {
//   console.log("A soni juft son emas");
// }

// // 4-bollean
// let bollean$A = +prompt("a sonini kiriting");
// let bollean$B = +prompt("b sonini kiriting");
// if (bollean$A > 2 && bollean$B <= 3) {
//   console.log("jumla tog'ri ");
// } else {
//   console.log("notog'ri");
// }

// // 5-boolean
// let A = +prompt("a sonini kiriting");
// let B = +prompt("B sonini kiriting");

// if (A >= 0 || B < -2) {
//   console.log("jumla tog'ri");
// } else {
//   console.log("notog'ri");
// }

// // 6-boolean
// let six_A = +prompt("A soni");
// let six_B = +prompt("B soni");
// let six_C = +prompt("C soni");

// if (six_A <= six_B <= six_C) {
//   console.log("Jumla tog'ri");
// } else {
//   console.log("Jumla no'tog'ri");
// }

// // 8-boolean
// let num_a = +prompt("a soni");
// let num_b = +prompt("b soni");

// if (num_a % 2 != 0 && num_b % 2 != 0) {
//   console.log("Jumla rost");
// } else {
//   console.log("Jumla yolg'on");
// }

// // 9-boolean
// let numA = +prompt("a soni");
// let numB = +prompt("B soni");

// if (numA % 2 != 0 || numB % 2 != 0) {
//   console.log("Jumla rost");
// } else {
//   console.log("Jumla yolg'on");
// }

// // 10-boolean
// let num__A = +prompt("a soni");
// let num__B = +prompt("a soni");

// if (num__A % 2 !== 0 || num__B % 2 !== 0) {
//   console.log("jumla rost ");
// } else {
//   console.log("Jumla yolg'on");
// }
