// // // // function logger() {
// // // //     console.log("Hello World")
// // // // }
// // // // logger();
// // // // logger();
// // // // logger();
// // // // function fruitprocessor(apples, oranges) {
// // // //     console.log(apples, oranges);
// // // //     const juice = `Juice with ${apples} apples and ${oranges} oranges;`
// // // //     return juice;
// // // // }
// // // // let x = fruitprocessor(5, 2)
// // // // console.log(x)

// // // // const appleJuice = fruitprocessor(5, 0)
// // // // console.log(appleJuice)
// // // // const orangeJuice = fruitprocessor(0, 3)
// // // // console.log(orangeJuice)
// // // // const normalJuice = fruitprocessor(3, 4)
// // // // console.log(normalJuice)
// // // // function calcAge1(birthyear) {
// // // //     return 2023 - birthyear
// // // // }
// // // // const age1 = calcAge1(2011)

// // // // const calcAge2 = function (birthyear) {
// // // //     return 2023 - birthyear
// // // // }
// // // // const age2 = calcAge2(2009)
// // // // console.log(age1, age2)

// // // // const calcAge3 = birthyear=> 2023-birthyear
// // // // const age3 = calcAge3(2011)

// // // // const ageTillRetirement = (birthyear,firstname) =>{

// // // //     const age = 2023-birthyear

// // // //     const retirement = 12-age

// // // //     return `${firstname} retires in ${retirement} years`

// // // // }
// // // // function multiply (a,b){
// // // //     return a*b
// // // // }

// // // // function text (x,y,z){
// // // //     return z+ multiply(x,y)
// // // // }
// // // // console.log(text)

// // // // const calcAverage =(a,b,c)=>(a+b+c)/3
// // // // console.log(calcAverage(3,4,5))

// // // // const scoreDolphins = calcAverage(44,23,71)
// // // // const scorekuwala = calcAverage(65,54,49)
// // // // console.log(scoreDolphins,scorekuwala)

// // // // const checkwinner = function(avgagedol,avgkuw){
// // // //     if(avgagedol >= 2*avgkuw)
// // // //     console.log("dol wins")
// // // //     else if(avgkuw>=2*avgagedol)
// // // //     console.log("kuw wins")

// // // //     else
// // // //     console.log("no win or draw")
// // // // }
// // // // checkwinner(scoreDolphins,scorekuwala)


// // // const desire = ['Desire', 'Michael', '2011', 'Student', ['Eunice', 'Nyakno', 'Chinemeren',], false]
// // // console.log(desire[4][0, 1, 2])
// // // console.log(desire.length)
// // // desire.push(5000)
// // // console.log(desire)
// // // desire.unshift('mr')
// // // console.log(desire)
// // // desire.shift()
// // // console.log(desire)
// // // console.log(desire.indexOf('desire'))
// // // console.log(desire.indexOf('kayode'))
// // // console.log(desire.includes('desire'))
// // // console.log(desire.includes('kayode'))

// // // const desire2 = {
// // //     firstname: 'Desire',
// // //     lastname: 'Michael',
// // //     birthyear: '2011',
// // //     job: 'student',
// // //     driversLicense: false,
// // //     firstname: 'Desire',
// // //     friends: ['Princess', 'Angel', 'Anna'],
// // //     calcAge: function (){
// // //         return 2023-this.birthyear;
// // //     }

// // // }
// // // // console.log(desire2)
// // // // console.log(desire2.friends)

// // // // // const x = prompt('Select from the object firstname, lastname, birthyear, job, friends, driversLicense')
// // // // console.log(x)
// // // // // console.log(desire2.x)
// // // // console.log(desire2[x])
// // // // desire2.location = 'Abuja'
// // // // desire2['twitter'] = '@desire2'
// // // // console.log(desire2)
// // // // console.log('${desire2.firstname} has ${desire2.friends.lenght} friends and his best friend is ${desire2.friends[1]')

// // // console.log(desire2.calcAge())
// // const Mike = {
// //     firstname: 'Mike',
// //     lastname: 'Peter',
// //     mass:' 78',
// //     height: '1.69',
// //     calcBMi: function () {
// //         return(this.mass/this.height**2)
// //  }
// // }

// //  const Ola = {
// //     firstname: 'OLA',
// //     lastname: 'Daniel',
// //     mass:'92',
// //     height: '1.92',
// //     calcBMi: function (){
// //         return(this.mass/this.height**2)

// //     }
// // }

// // let MikeBMI


// const calCTip = function (bill) {
//     return bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const calTip = function (bill) {
//     let tip = 0;
//     if(bill >=50 && bill <= 300)
//         tip = bill * 0.15
//     else
//         tip = bill * 0.2
//     return tip;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// for(let i=0; i< bills.length; i++) {
//     // const tip = calCTip(bill[i]);
//     // tips.push(tip);
//     // totals.push(bills[i] + tips[i]);

//     tips[i] = calCTip(bills[i])
//     totals[i] = bills[i] + tips[i];

// }

// console.log(bills, tips, totals);

// const calcAverage = function (array) {
//     let sum = 0;
//     for(let i=0; i<array.length; i++){
//         sum += array[i];
//     }
//     // console.log(sum)

//     return sum/array.length
// }


// console.log(calcAverage(bills))
// console.log(calcAverage(tips))
// console.log(calcAverage(totals))





// const friend1 = 'Emeka'
// const friend2 = 'Peter'
// const friend3 = 'Ola'
// const friend4 = 'Wale'
// const friend5 = 'Paul'


// const friends = ['Emeka', 'Peter', 'Ola', 'Wale', 'Paul']

// student1score = 89
// student2score = 45

// const studentScore = [39, 49, 78, 26, 37]

// const ike = {
//     firstname: 'Peter',
//     lastname: 'Paul',
//     age: 56,
// }

'use strict'
let hasDriversLicence = false
const passTest = true
if (passTest)
    hasDriverLicence = true
if (hasDriversLicence)
    console.log("Hey Congratilation")