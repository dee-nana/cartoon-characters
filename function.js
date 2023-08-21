function logger() {
    console.log("Hello World")
}
logger();
logger();
logger();
function fruitprocessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges;`
    return juice;
}
let x = fruitprocessor(5, 2)
console.log(x)

const appleJuice = fruitprocessor(5, 0)
console.log(appleJuice)
const orangeJuice = fruitprocessor(0, 3)
console.log(orangeJuice)
const normalJuice = fruitprocessor(3, 4)
console.log(normalJuice)
function calcAge1(birthyear) {
    return 2023 - birthyear
}
const age1 = calcAge1(2011)

const calcAge2 = function (birthyear) {
    return 2023 - birthyear
}
const age2 = calcAge2(2009)
console.log(age1, age2)

const calcAge3 = birthyear=> 2023-birthyear
const age3 = calcAge3(2011)

const ageTillRetirement = (birthyear,firstname) =>{

    const age = 2023-birthyear

    const retirement = 12-age

    return `${firstname} retires in ${retirement} years`

}
function multiply (a,b){
    return a*b
}

function text (x,y,z){
    return z+ multiply(x,y)
}
console.log(text)

const calcAverage =(a,b,c)=>(a+b+c)/3
console.log(calcAverage(3,4,5))

const scoreDolphins = calcAverage(44,23,71)
const scorekuwala = calcAverage(65,54,49)
console.log(scoreDolphins,scorekuwala)

const checkwinner = function(avgagedol,avgkuw){
    if(avgagedol >= 2*avgkuw)
    console.log("dol wins")
    else if(avgkuw>=2*avgagedol)
    console.log("kuw wins")

    else
    console.log("no win or draw")
}
checkwinner(scoreDolphins,scorekuwala)