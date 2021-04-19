
// //1. When the red button is clicked, another random button becomes red.
// const numberOfButtons = 3;
// let ranNum = Math.floor(Math.random() * numberOfButtons);

// //2. Set a random button to be the red button (every button has an id as: 'b0', 'b1, & 'b2')
// document.querySelector(`#b${ranNum}`).setAttribute("class", "red-btn");

// //3. When the red button is clicked, current button stops being red and another one becomes red.
// document.querySelector(`#b${ranNum}`).addEventListener("click", function () {
//     this.setAttribute("class", ""); //a. current button stops being red
//     ranNum = Math.floor(Math.random() * numberOfButtons); //b. give the variable another random number 
//     document.querySelector(`#b${ranNum}`).setAttribute("class", "red-btn"); //the new random button becomes red
// })

//select all button node List iterable array 🙂
const button = document.querySelectorAll('button');

//this function will generate random number
function random(){ return Math.floor(Math.random() * button.length );}
let num1 = random();

//add red class to first button on page load
button[num1].classList.add('red-btn');

//forEach goes for every button and check for click action on any buttin
button.forEach(e=>{
    e.addEventListener('click',()=>{
        //this will check if clicked button contain the red class in it
        if(e.classList.contains('red-btn')){
            //remove if found on clicked button
        e.classList.remove('red-btn');

        //generate new numbeer and add to other button
        let num2 = random();
            button[num2].classList.add('red-btn');
        }
    })
})