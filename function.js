// function logger() {
//     console.log("Hello World")
// }
// logger();
// logger();
// logger();
// function fruitprocessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges;`
//     return juice;
// }
// let x = fruitprocessor(5, 2)
// console.log(x)

// const appleJuice = fruitprocessor(5, 0)
// console.log(appleJuice)
// const orangeJuice = fruitprocessor(0, 3)
// console.log(orangeJuice)
// const normalJuice = fruitprocessor(3, 4)
// console.log(normalJuice)
// function calcAge1(birthyear) {
//     return 2023 - birthyear
// }
// const age1 = calcAge1(2011)

// const calcAge2 = function (birthyear) {
//     return 2023 - birthyear
// }
// const age2 = calcAge2(2009)
// console.log(age1, age2)

// const calcAge3 = birthyear=> 2023-birthyear
// const age3 = calcAge3(2011)

// const ageTillRetirement = (birthyear,firstname) =>{

//     const age = 2023-birthyear

//     const retirement = 12-age

//     return `${firstname} retires in ${retirement} years`

// }
// function multiply (a,b){
//     return a*b
// }

// function text (x,y,z){
//     return z+ multiply(x,y)
// }
// console.log(text)

// const calcAverage =(a,b,c)=>(a+b+c)/3
// console.log(calcAverage(3,4,5))

// const scoreDolphins = calcAverage(44,23,71)
// const scorekuwala = calcAverage(65,54,49)
// console.log(scoreDolphins,scorekuwala)

// const checkwinner = function(avgagedol,avgkuw){
//     if(avgagedol >= 2*avgkuw)
//     console.log("dol wins")
//     else if(avgkuw>=2*avgagedol)
//     console.log("kuw wins")

//     else
//     console.log("no win or draw")
// }
// checkwinner(scoreDolphins,scorekuwala)


const desire = ['Desire', 'Michael', '2011', 'Student', ['Eunice', 'Nyakno', 'Chinemeren', ], false ]
console.log(desire[4][0,1,2])
console.log(desire.length)
desire.push(5000)
console.log(desire)
desire.unshift('mr')
console.log(desire)
desire.shift()
console.log(desire)
console.log(desire.indexOf('desire'))
console.log(desire.indexOf('kayode'))
console.log(desire.includes('desire'))
console.log(desire.includes('kayode'))

const desire2 = {
    firstname : 'Desire',
    lastname : 'Michael',
    birthyear : '2011',
    job : 'student',
    driversLicense : false,
    firstname : 'Desire',
    friends : [ 'Princess', 'Angel', 'Anna']
}
   console.log(desire2)
   console.log(desire2 . friends)
   
   const x = prompt ('Select from the object firstname, lastname, birthyear, job, friends, driversLicense')
console.log(x)
// console.log(desire2.x)
console.log(desire2[x])