let nm = 0 ;
let nm2 = 0 ;

const button1 = document.querySelector("#button1");
const display1 = document.querySelector("#display1");
const button2 = document.querySelector("#button2");
const display2 = document.querySelector("#display2");


button1.addEventListener("click", () => {
      nm++ ;
      display1.textContent = nm ; 
});

button2.addEventListener("click", () => {
      nm2++ ;
      display2.textContent = nm2 ; 
});