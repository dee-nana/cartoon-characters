// console.log('Repitition')
// console.log('Repitition')
// console.log('Repitition')
// console.log('Repitition')
// console.log('Repitition')
// console.log('Repitition')
// console.log('Repitition')
// console.log('Repitition')
// console.log('Repitition')
// console.log('Repitition')

// for (let i = 1; i< 3; i++){
//     console.log(`repitition ${i}`)
// } 

// let i =0
// while (i<=10){
//     console.log(`repitition ${i}`)
//     ++i
// }

let dice = Math.trunc(Math.random()*6)+1
console.log(dice)

while (dice !==6){
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random()*6)+1
console.log(dice)

    if (dice===6)
    console.log('loop is about to end...!')
}