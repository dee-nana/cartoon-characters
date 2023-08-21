const age = 30
if (age>18){
    console.log("Old Man or Woman");
}
else{
    console.log("Young Guy or Lady");
}

/* a =Excellent
b =Good
c =Average
d =Fair
e =Poor
f =Fail
*/
const grade = "Desire";
if (grade == "A")
console.log("excellent");
else if (grade =="B")
console.log("good");
else if (grade =="C")
console.log("average");
else if (grade =="D")
console.log("fair");
else if (grade =="E")
console.log("poor");
else if  (grade =="F")
console.log("fail");
else
console.log(`your grade ${grade} is invalid `);


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