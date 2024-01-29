
function apresentation(name){
    
    return `My name is ${name}`;
}

//Arrow Function
const apresentationArrow = name => `My name is ${name}`;
const sum = (num1, num2) => num1 + num2;

console.log(apresentarArrow);
console.log(sum);

const sumSmallNumbers = (num1, num2) => {

    if(num1 > 10 || num2 > 10){
        return "Somente de 1 a 9";
    }else{
        return num1 + num2;
    }
} 