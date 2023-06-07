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
 
// Function
function doSomething () {
//write the code you want the function to work
};
const doSomething = () => {
//write the code you want the function to run
};
function addNumbers (x,y,z) {
    console.log(x*y*z);

}
addNumbers(3,5,8);
addNumbers(2,15,10);
function pythagoras(opp,adj){
    //1st method
    console.log(opp**2 + adj**2 **0.5);
    //2nd method
    console.log()
}

 //Push 
