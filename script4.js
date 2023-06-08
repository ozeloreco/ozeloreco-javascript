//DOM - (Document Object Model) Manipulation:
// the interaction or manupulation of a web browser or web page using javaScript
document.write( 'This is the first dom script');
document.write("<h1> Let's begin</h1>");

// CSS using JS
document.body.style.backgroundColor='red';
document.body.style.color = 'white';
document.body.style.fontSize = '2.5rem';
document.body.style.fontFamily = 'cursive';

// selecting element using javaScript
let button1 = document.querySelector('.click');
let button2 = document.querySelector('.unclick');
let title = document.querySelector('h1');

button1.style.backgroundColor= 'green';
button1.style.color= 'white';
button1.style.fontSize= '2rem';
button1.style.padding= '1rem';

button2.style.backgroundColor= 'blue';
button2.style.color= 'white';
button2.style.fontSize= '2rem';
button2.style.padding= '1rem';

//Event listeners- method used to create interativity/user actions to the web browser.
button1.addEventListener('click', function() {
    document.body.style.backgroundColor= 'green';
    
})
button2.addEventListener('click', function() {
    document.body.style.backgroundColor= 'blue';
})

//Working with inputs
const input= document.querySelector('input');
const taskBtn =document.querySelector('.taskBtn');

taskBtn.addEventListener('click', function(){
    console.log(input.value);
})