//do--while

// var i = 10;
// do{
//     console.log('hello');
//     i++;
// }while(i<5)

//-------------------------------------------
//while

//  var i = 10;
//  while(i<5){
//     console.log('hello');
//     i++;
//  }


//-------------------------------------------------------
/////////////////////////////////////////////////////////////problems-///////////////////////////////////////////////////
//1-Write a program to print all natural numbers from 1 to n.using while loop 
// var n = +window.prompt('enter number')

// var i =1;
// while(i<=n){
//     console.log(i);
//     i++;
// }


//-------------------------------------------------------------------------
//2-Write a program to print all numbers in reverse from n to 1 using 
//while loop.

// var n = +window.prompt('enter number')

// while(n>=1){
//    console.log(n) ;
//    n--;
// }


//--------------------------------------------------------------------
//3-Write a program to print all alphabets from a to z using while loop //97-->122

// var charCode=97;
// while(charCode<=122){
//     console.log(String.fromCharCode(charCode));
//     charCode++;
// }



//---------------------------------------------------------------------------
//4-Write a program to print all even  numbers between n to 100 .-using while loop 
// var n = +window.prompt('enter number')

// while(n<=100){
//     if(n%2==0){
//         console.log(n)
//     }
//     n++;
// }

//---------------------------------------------------------------------------
//5-Write a program to find sum of all  number between  1 to n
// var n = +window.prompt('enter number');
// //4
// var sum=0;
// var i =1;
// while(i<=n){
//     sum =sum+i;
//     //1
//     //3
//     //6
//     //10
//     i++;
// }
// console.log(sum);

//--------------------------------------------------------------------------------
//6-Write a program to find sum of all even numbers between  1 to n

// var n = +window.prompt('enter number');
// var sum=0;
// var i =1;
// while(i<=n){
//     if(i%2==0){
//         sum +=i;
//     }
//     i++;
// }
// console.log(sum);
//---------------------------------------------------------------------------
//7-Write a program to find sum of all odd  numbers between 1 to n
// var n = +window.prompt('enter number');

// var sum=0;
// var i =1;
// while(i<=n){
//     if(i%2!==0){
//         sum +=i;
//     }
//     i++;
// }
// console.log(sum);

//----------------------------------------------------------------------------
//8-Write a program to print multiplication table of any number
// var n = +window.prompt('enter number');

// var i =1;
// while(i<=12){
//     console.log(i*n)
//     i++;
// }


//--------------------------------------------------------------------------
//9-Write a program to count number of digits in a number

//1000/10 --->100/10-->10/10----->1/10--->0

// var n = +window.prompt('enter number');

// var count=0;

// while(n!==0){
//     n = Math.floor(n/10);
//     count++;

// }
// console.log(count)

//--------------------------------------------------------------------------
//10-Write a program to find first and last digit of a number and sum

///1234--->1,4

// var n = +window.prompt('enter number');

// var lastDigit = n%10;
// var firstDigit ;

// while (n>=10){
// n=Math.floor(n/10);
// }
// firstDigit=n;
// console.log(firstDigit)
// console.log(lastDigit)
// console.log(firstDigit+lastDigit)



//---------------------------------------------------------------------------

//11-Write a program to calculate sum of digits of a number 
//1234---10
// var n = +window.prompt('enter number');

// var sum =0;
// while(n>0){

// sum +=n%10;//4+3+2+1//10
// n = Math.floor(n/10);
// //1234--1234/10-->123/10-->12/10--->1/10


// }
// console.log(sum)


//----------------------------------------------------------------------
//12-Write a program to  print all ASCII Character with their values

// for(var i=0;i<=255;i++){
//     console.log(i+" "+String.fromCharCode(i))
// }

//-----------------------------------------------------------------------
//13-Square Star Pattern
// *****
// *****
// ***** 
// ***** 
// *****

// var row=5;
// var columns=5;

// for(var i=1;i<=row;i++){
//    var stars='';
//    for(var j=1;j<=columns;j++) {
//     stars+="*";
   
//    }
//    console.log(stars);
// }





//-------------------------------------------------------------------------
//14-Right Triangle Star Pattern 

// * 
// ** 
// *** 
// **** 
// *****

// var rows = 5;

// for(var i=1;i<=rows;i++){
//     var stars='';
//     for(var j=1;j<=i;j++){
//         stars+="*";
    
//     }
//     console.log(stars)
// }



//------------------------------------------------------------------------------

//15-Inverted Right Triangle Star Pattern 

// ***** 
// **** 
// *** 
// ** 
// * 

// var rows=5;
// for(var i=rows;i>=1;i--){
//     var stars='';
//     for(var j=1;j<=i;j++){
//         stars+="*"
        
//     }
//     console.log(stars);
    
// }



//--------------------------------------------------------------------------------------------------------------
//function

// var x=10;
// var y=5;
// var res =x+y;
// console.log(x+y)
// sum(3,4)
// function sum(x,y){ //paremeters
//     var res= x+y;
//     console.log(res)
// }
// sum(3,4)//argument

// sum(3) //3+undefined

//hoisiting
//var x;
// console.log(x);
// var x=10;


// var x=10;

// function myFunc(){
//     var x=20;
//     console.log(x);
// }

// myFunc();
// console.log(x)



//-----------------------------------------------------------------------
// //expression function
// sayHi()
// var sayHi = function(){
//     console.log("hi")
// }


//------------------------------------------------------
//difference between declartion function , expression function
//1-syntax
//2- hoisting



/////////////////////////////problems function/////////////////////////////////////////////////////////////////////

//1-Write a program  to find cube of any number using function 

// function calculateCube(n){
//     console.log(n*n*n);
// }
// calculateCube(5)

//------------------------------------------------------------------------------------
//2-Write a program  to check  whether a number is oven or odd using a function 

// function checkEvenOdd(n){
//     if(n%2==0){
//         console.log('even')
//     }
//     else{
//         console.log('odd');
//     }
// }
// checkEvenOdd(5)

//------------------------------------------------------------------------------------
//3-Write a program  to find Average  of all natural numbers between 1 to n 

// function calculateAvg(n){
//     var sum =0;
//     for(var i=1;i<=n;i++){
//         sum+=i 
//     }
//     var avg = sum/n;
//     console.log(avg)
// }
// calculateAvg(5)
  //----------------------------------------------------------------------------------------------------------------------
  
/////////////////////////////string examples/////////////////////////////////

//1-Write a program to find length of a string .

// let str = window.prompt('enter string');
// console.log(str.length)

//--------------------------------------------------------------------------------------------------------
//2- Write a program to concatenate two string .
// let str_one = window.prompt('enter string');
// let str_two = window.prompt('enter string');
// // console.log(str_one + str_two)
// console.log(str_one.concat(str_two))

//--------------------------------------------------------------------
//3-Write a program to compare two string 

// let str_one = window.prompt('enter string');
// let str_two = window.prompt('enter string');

// if(str_one.toLowerCase()==str_two.toLowerCase()){
//     console.log('both string are equal');
// }
// else{
//     console.log('both string are not equal');
// }


//--------------------------------------------------------------------------
//4-Write a program to convert lowercase string  to uppercase 

// var str = window.prompt('enter string')
// // console.log(str.toUpperCase())
// console.log(str.toLowerCase())

//-----------------------------------------------------------------------------
//5-Write a program to toggle case of each character  of a string 
//  var str = window.prompt('enter string') //HeLLo --->hEllO
// let result=''
// for(let i =0;i<str.length;i++){
//     let char = str[i];
//     if(char === char.toUpperCase()){
//        result+=char.toLowerCase()
//     }
//     else{
//         result+=char.toUpperCase() 
//     }
// }
// console.log(result);
//-----------------------------------------------------------------------------------------------------------------
//6-Write a program to count total number of vowels and consonants in a string 
// var str = window.prompt('enter string') 


//----------------------------------------------------------------------------------------------------------------
//7-Write a program to find reverse of a string 
// var str = window.prompt('enter string')
 
// 
//-------------------------------------------------------------------------------------------
//8-Write a program to check whether a string is palindrome or not  //level,noon
// var str = window.prompt('enter string')

//--------------------------------------------------------------------------------------------------------
//9- Write a program to remove first character from string


//------------------------------------------------
//10-Write a program to remove character from string 
// var str = window.prompt('enter string')

//-------------------------------------------------------------
//11-Write a program to remove white space characters from string 
// var str = window.prompt('enter string')

//-----------------------------------------------------------------
//12-Write a program to remove all repeated characters from string 
// var str = window.prompt('enter string')

//-----------------------------------------------------------------------------------------------------------
//object --->nonpermitive

// let student = {
//     name:'aya',
//     age:14,
//     gender:'female',
//    studentOrgraduate:true,
//    study:function(){
//     console.log('aya is studying')
//    }
// }
//method:function in object


//-----------------------------------------------------
//let , var , const

//1-scope
//2-hoisting
//3-declaration

// if(true){
//    let x=10;
// }

// console.log(x);
//----------------

// let x=10;
// x=50;
// console.log(x)
// const x=10;
// x=50;

//let x;
// console.log(x)
// let x=10;

//---------------------------------


//--------------------------------------------array problems--------------------------------------------------------------------------------
//1-Write a program to print all negative elements in an array .
// let arr = [1,4,5,6,-20,-30,-40]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]<0){
//         console.log(arr[i])
//     }
// }

//-------------------------------------------------------------------------------
//2-Write a program to find sum of all array elements .
//  let arr = [1,4,5,6,-20,-30,-40]
//  let sum=0;
// for(let i=0;i<arr.length;i++){
// sum += arr[i];
// //0+1+4

// }
// console.log(sum);

//-------------------------------------------------------------------------------------
// 3-Write a program to count total number of even and odd elements in an array 
// let arr = [1,4,5,6,-20,-30,-40]

// let evenCount =0;
// let oddCount =0;

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         evenCount++;
//     }
//     else{
//         oddCount++;
//     }
// }
// console.log(evenCount);
// console.log(oddCount);

//------------------------------------------------------------------------------------------
//4-Write a program to count number of negative elements in an array .
// let arr = [1,4,5,6,-20,-30,-40]
// let negativeCount =0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<0){
// negativeCount++
//     }
// }
// console.log(negativeCount)


//---------------------------------------------------------------------------------
//5-Write a program to copy all elements from an array to another array

// let arr = [1,4,5,6,-20,-30,-40]
// let newArr=[];


// for(let i =0;i<arr.length;i++){
//     newArr.push(arr[i]);
// }
// console.log('arr',arr);
// console.log('new arr',newArr);

//--------------------------------------------------------------------------------
//6- Write a program to insert an element to array. splice(position,numof element will be removed,element to insert)
// let arr = [1,4,5,6,-20,-30,-40]

// arr.splice(3,0,10);

// console.log(arr);


//--------------------------------------------------------------------------------------
//7-Write a program to find reverse of an array.

//  let arr = [1,4,5,6,-20,-30,-40]
//  arr.reverse();
//  console.log(arr);

//------------------------------------quotes----------------------------------------------------//
let arrayOfQuotes = [
    {author: 'Jim Rohn', 
    quote: 'Beware of what you become in pursuit of what you want.'
    },
    {author: 'Epictetus', 
    quote: 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {author: 'Frank Sinatra', 
    quote: 'The best revenge is massive success.'
    },
    {author: 'Wayne Gretzy', 
    quote: 'You miss 100% of the shots you don\'t take.'
    },
    {author: 'Nelson Mandela', 
    quote: 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {author: 'Elbert Hubbard', 
    quote: 'Do not take life too seriously. You will not get out alive.'
    },
];

document.getElementById('show').onclick =generateQuote;
let lastRandom =null;
let random =0;
function generateQuote(){
    do{
        random = Math.floor(Math.random()*arrayOfQuotes.length)
    }
    while(random == lastRandom)
        lastRandom = random;

console.log(random)
document.getElementById('quote').innerHTML=arrayOfQuotes[random].quote;
document.getElementById('author').innerHTML=arrayOfQuotes[random].author;
}




