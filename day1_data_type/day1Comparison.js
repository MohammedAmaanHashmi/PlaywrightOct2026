let num1 = 100;
let num2 = 100;
let num3 = "100";

console.log(num1 == num2); //True
console.log(num1 == num3); //T
console.log(num1 === num3); //F strict Comparison checks Data Type and value should match

let calc = 10 + 20 + "PW" + "JS" + 20 + 40;
console.log(calc);
let calc1 = 10 + 20 + "PW" + "JS" + (20 + 40);
console.log(calc1);
let calc2 = 10 + 20 + "PW" + "JS" + 20 + (40 + 10);
console.log(calc2);