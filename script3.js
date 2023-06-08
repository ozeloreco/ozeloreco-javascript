//Array Methods
// push =  adds item(s) to the end of an array
let array = ['a', 'b', 'c', 'd', 'e', 'f'];
array.push('g', 1, 'z');
console.log(array);

 //pop = removes an item from the end of an array
 array = ['a', 'b', 'c', 'd', 'e', 'f'];
 array.pop();
 console.log(array);

 //shift = removes an item from the start of an array
 array = ['a', 'b', 'c', 'd', 'e', 'f'];
 array.shift();
 console.log(array);

 //unishift= adds item(s) to the start of an array
 array = ['a', 'b', 'c', 'd', 'e', 'f'];
 array.unshift('g', 1, 'z');
 console.log(array);
 //spread
 array = ['a', 'b', 'c', 'd', 'e', 'f'];
 let newArray= [...array, 'g', 'h', 'i'];
 console.log(newArray);

// reverse 
console.log(array.reverse());
 //find 
 let studentsArray = [
{id : 12, name: 'Jacob', sex: 'm'},
{id : 13, name: 'Robb', sex: 'm'},
{id : 34, name: 'Gertrude' , sex:'f' },
{id : 38, name: 'Nonye', sex: 'f'},

 ];
 let student = studentsArray.find(x => x.id===34);
 console.log(student);


//filter 
let femaleStudents = studentsArray.filter (x => x.sex=== 'f');
console.log(femaleStudents);

 //map 
 const numbers =[1, 2, 3, 4, 5];
 const numbersDouble = numbers.map(multiply);
// function double(value, index, arr) {
 //   return value*2;

 //}
 function multiply(value, index, arr) {
    return value*index
 }
 console.log(numbersDouble);

 const products =[
    {
        name: 'laptop',
        price: 2000,
        count: 7
    },
    {
        name: 'desktop',
        price: 2500,
        count: 6
    },
    {
        name: 'phone',
        price: 850,
        count: 12
    }
 ];
 const totalProductsValue = products.map(item=>  ({
    name:item.name,
   totalValue: item.price * item.count}));
 console.log(totalProductsValue);

 const students =[
    {
        name: 'Elvis',
        gender: 'male',
        age: 24,
        rating: 9
    },
    {
        name: 'Mary',
        gender: 'female',
        age: 9,
        rating: 16
    },
    {
        name: 'Collins',
        gender: 'male',
        age: 4,
        rating: 4
    },
    {
        name: 'Martha',
        gender: 'female',
        exam: 9,
        test: 9
    }
    
 ]
 const totalNumberStudents= students.map(x=> 
    ({
        name:x.name,
        totalStudentsValue: x.exam * x.test
    }));
 console.log(totalNumberStudents);

 const persons =[
    {
        firstname: 'Elvis', lastname: 'Okezuonu'
    },
    {
        firstname: 'Victor', lastname: 'Okeke'
    },
    {
        firstname: 'Maris', lastname: 'Okezuonu'
    }

 ];
 persons.map(getFullName);

 function getFullName (x){
    return [x.firstname, x.lastname].join('');
 }
console.log(persons);
 
 
// Function
function doSomething () {
//write the code you want the function to work
};
//const doSomething = () => {
//write the code you want the function to run
//};
function addNumbers (x,y,z) {
    console.log(x*y*z);

}
addNumbers(3,5,8);
addNumbers(2,15,10);
function pythagoras(opp,adj){
    //1st method
    console.log(opp**2 + adj**2 **0.5);
    //2nd method
   // console.log(Math.sqrt( opp**2 + adj**2));
};
pythagoras (3,4);
pythagoras (7,24);

 //Push 
