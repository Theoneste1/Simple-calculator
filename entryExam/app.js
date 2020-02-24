
/*
//function for comparing string

function compare(firstString,secondString,thirdString){
  
    var names=[firstString,secondString,thirdString];

    

var output= "";

//Using sort() to sort the names
var sortedNames= names.sort();

output = sortedNames[0]+sortedNames[1]+sortedNames[2];

return output;
}
console.log(compare("amouse","akeyboard","ahouse"));

*/

// var x=100;
// function test(){
//     if(x=='true'){
//         var x=199;
//     }
//     console.log(x);
// }
// test();

// // cls
// function splitArray(a,b,c,d)
// {
//     var allArray=[a,b,c,d];

//     var sumleft=0;
//     var sumRight=0;
//     var number=0;
//     for(i=0; i<allArray.length-1; i++){

//        var sum1=0;
//         var sum2=0;

//         for(j=0; j<=i; j++){
//             // console.log(allArray[j]);
//             sum1+=allArray[j];
           
                
//         }
//         console.log(sum1);
//         console.log("------------------");


//         for(k=i+1; k<allArray.length; k++){
//             // console.log(allArray[k]);
//             sum2+=allArray[k];
//         }
//         console.log(sum2);
//         if(sum1>sum2){
//             number+=1;
//         }
//         console.log("------------------");
       
//     } 
//     return number;
    

// }
// console.log(splitArray(5,2,3,4));



// function isEvenNumber(number){
//  return number%2===0
// }

// arr=[1,2,3,4,5,67,8];
// console.log(arr.filter(isEvenNumber));


// function myFunction(total, number){
//     return total-number;

// }

// arr=[1,2,3,6,7];
// const result=arr.reduce(myFunction);
// console.log(result);


function higherFunction(total, number)
{
	return total+number;
}
array2=[1,2,3,4,5];
const doubleArray=array2.map((x)=>
	x*2+1
	);
const multipleBythree=array2.filter(x=> x%3===0)
	console.log(multipleBythree);

	console.log(array2.reduce(higherFunction))

