// 1

const result = 5 + 5 + "5";
const typeOfResult = typeof result;

console.log(typeOfResult);

// 2

const email = "e.ryaboshapka777@gmail.com";
const emailCheck = email.includes("@");
const emailLenght = email.length;

console.log(emailCheck);
console.log(emailLenght);

// 3

const sentencePart1 = "My";
const sentencePart2 = "name";
const sentencePart3 = "is";
const fullName = sentencePart1 + " " + sentencePart2 + " " + sentencePart3;
const newFullName = fullName + " Maksym";

console.log(newFullName);

// 4

const userName = "Олександре";
const payment = 1200;
const message = `Дякуємо, ${userName}! До сплати ${payment} гривень`;

alert(message);