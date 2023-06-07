// alert(`connected`);
// console.log(`connected`);

// 1. Data types and variable types
// Data types includes ;
// Strings, Numbers Boolean, objects, array. null etc. 

// Variable Types includes;
// Constant( const), let and var .
// Declaration and assignments of variables


const name= 'Elvis'; //String
const surname= 'Okezuonu';
let age= 15;        //Number
var job ='Tutor';   //string
let married = false; //boolean i.e true or false
let height ='1.5m';  // string
let nickname = '007'; //string
let state = 'Imo';

age= 16;  // reassigning a variable



console.log(name);
console.log(age);
console.log(job);
console.log(married);
console.log(height);
console.log(nickname);



// String Concatenation=====
console.log(name + ' ' + surname);



// Okezuonu Elvis is hails from Imo state and he is a 15 years old.

console.log( name + ' ' +surname  + ' hails from ' + ' ' + state  + ' state and he is a ' + ' ' +  age + ' years old ' + ' ' + job);

// an alternative way is using template string 

console.log( `${name} ${surname} hails from ${state} state and he is a ${age} years old ${job}`);

// Arithmetic  Operations 
console.log(12+2); //add
console.log(12-2); //subtract 
console.log(12/2); //divide 
console.log(12*2); //multiply
console.log(12**2); //power 
console.log(12%7); //remainder

// Equality or Comparison Operators 

// Equality or Comparison Operators includes;
 //  ==(equal) 
 //  === (equivalent)
  // != (not equal) 
  // !==( not eqivalent) 

 // Logical Operators includes;
 // && and 
 // || or 
 
 console.log(3+5 == 8); //true
 console.log(3+5===8); //true
 console.log(8== '8'); //true
 console.log(8=== '8'); //false
 console.log('3' + '5'); //false
 console.log('3' + '5'); //false
 console.log( '3' + 5 ==8); //false
 console.log('3' + 5 === 35); //false

//  Inequality and inequivalence 
 
console.log(9+5 != 14); //false 
console.log(9+5 !==14); // false 
console.log(9+5 != 10); // true 
console.log(9+5 !==10); // true
console.log(9 != '9'); // false
console.log(9 !== '9'); // true
console.log('9' + '5' != '14'); //false
console.log('9' + '5' !== '14'); //true
console.log( '9' + '5' != '95'); //true 
console.log('9' + '5' !== '95'); // false 
console.log( '9' + '5' != 95); // false
console.log( '9' + '5' !== 95); // true


console.log('conditional statementss====');
//  Conditional Statements 
// If statement 
// if else statement
// if else if statement 
// ternary
// conditional and statement
// switch statement


if (2 + 4 ===6) {
console.log('correct')
} else {
    console.log('incorrect')
}

// if else if statement 
if(2+4 ===6){
    console.log(' 1st is correct');
    
} else if (3*8 ===24){
    console.log('2nd is correct');
} else if (45-30=== 15) {
    console.log( '3rd is correct');
} else if( 16/2===8){
    console.log(' 4th is correct');
} else{
    console.log('none is correct');
}

// ternary Operator for if else statement
2+4===6? console.log('correct'): console.log('incorrect');

// ternary operators for if else if statement 
2+4 ===6? console.log('ist is correct'):
3*8===24 ? console.log('2nd is correct'):
45-30=== 15? console.log(' 3rd is correct'):
16/2=== 8? console.log('4th is correct'):
console.log('none is correct');


// conditional and  statements
2+4 ===6 && console.log('1st is correct');
3*8===24 && console.log('2nd is correct');
45-30===15 && console.log('3rd is correct');
16/2=== 8 && console.log('4th is correct');
console.log('none is correct');

// Switch Statement

//Conditional Logical Operators

if (2 +2 === 4|| 3*8 === 24){
    console.log(true);
} else {
    console.log(false); 
} ;
if (2+2 ===4 && 3*8 ===24){
    console.log(true);
}else {
    console.log(false);
}