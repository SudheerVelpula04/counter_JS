// let count=document.getElementById('count')
// let increment=document.getElementById('incre')
// let decremnt=document.getElementById('decre')
// let reset=document.getElementById('reset')


// let counte=0;

// function updateDispaly(){
//     count.textContent=counte;
// }
// // increment.addEventListener('click',()=>{
// //     counte++
// //     updateDispaly()

// // })
// // decremnt.addEventListener('click',()=>{
// //     counte--
// //     updateDispaly()
// // })
// // reset.addEventListener('click',()=>{
// //     counte = 0;
// //     updateDispaly()
// // })

// // updateDispaly()

// increment.addEventListener('click',function name(){
//     counte++
//     updateDispaly()
// })
// decremnt.addEventListener('click',function name(){
//     counte--
//     updateDispaly()
// })
// reset.addEventListener('click',function name(){
//     counte=0
//     updateDispaly()
// })
// updateDispaly()
let count = document.getElementById('count');
let increment = document.getElementById('incre');
let decrement = document.getElementById('decre');
let reset = document.getElementById('reset');

let counter = 0;

function updateDisplay() {
    count.textContent = counter;
}

increment.addEventListener('click', function () {
    counter++;
    updateDisplay();
});

decrement.addEventListener('click', function () {
    counter--;
    updateDisplay();
});

reset.addEventListener('click', function () {
    counter = 0;
    updateDisplay();
});

updateDisplay();

