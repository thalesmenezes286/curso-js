
function sum(num1, num2){

    return num1 + num2;
}

function nameAndAge(name, age){

    return `My name is ${name} and my age is ${age}`;
}

function sqrt(number){

    return Math.pow(number,2);
}


console.log("Soma: ",sum(2,2));
console.log("Soma: ",sum(3.15,17));
console.log(nameAndAge("Thales",35));
console.log(sqrt(2));
console.log(sum(1,2));
console.log(sqrt(sum(1,2)));