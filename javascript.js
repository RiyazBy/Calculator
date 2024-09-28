function add(x,y){return x+y;}
function substract(x,y){return x-y;}
function divide(x,y){
  if (y === 0) {return "ERROR"}
  else {let result = x/y;
       return result.toFixed(3);}
}
function multiply(x,y){return x*y;}

const display = document.querySelector(".display");

let number1 = null ;
let number2 = null ;
let operator = null ;
let resultDisplayed = false;

function write(textArea, num){
  if (resultDisplayed === true) {
    textArea.textContent = num;
    if (textArea.textContent.length > 15) {textArea.textContent = textArea.textContent.substring(0, textArea.textContent.length-1)};
    resultDisplayed = false;}
  else {
    textArea.textContent += num;
    if (textArea.textContent.length > 15) {textArea.textContent = textArea.textContent.substring(0, textArea.textContent.length-1)};
  }
}

const one = document.querySelector("#one");
one.addEventListener("click", ()=>write(display,1));
const two = document.querySelector("#two");
two.addEventListener("click", ()=>write(display,2));
const three = document.querySelector("#three");
three.addEventListener("click", ()=>write(display,3));
const four = document.querySelector("#four");
four.addEventListener("click", ()=>write(display,4));
const five = document.querySelector("#five");
five.addEventListener("click", ()=>write(display,5));
const six = document.querySelector("#six");
six.addEventListener("click", ()=>write(display,6));
const seven = document.querySelector("#seven");
seven.addEventListener("click", ()=>write(display,7));
const eight = document.querySelector("#eight");
eight.addEventListener("click", ()=>write(display,8));
const nine = document.querySelector("#nine");
nine.addEventListener("click", ()=>write(display,9));
const zero = document.querySelector("#zero");
zero.addEventListener("click", ()=>write(display,0));
const point = document.querySelector("#point");
point.addEventListener("click", ()=>{
                       if (display.textContent.includes(".") === false){
                       write(display,".")};})


function storeNumber1() {
  if (display.textContent === "") {return number1 = 0}
  else {
    number1 = parseFloat(display.textContent);
    display.textContent="";
  }
}

function storeNumber2(){
  if (display.textContent === "") {return number2 = number1}
  else {
  number2 = parseFloat(display.textContent);
  }
}  

function operate(){
    if (operator === "+") {
      display.textContent = add(number1, number2);
    }
    else if (operator === "-") {
      display.textContent = substract(number1, number2);
    }
    else if (operator === "*") {
      display.textContent = multiply(number1, number2);
    }
    else if (operator === "/") {
      display.textContent = divide(number1, number2);
    }
  }
const addition = document.querySelector("#add");
addition.addEventListener("click", ()=>{
  operator = "+"
  storeNumber1();}                     
  )
const susbstraction = document.querySelector("#substract");
susbstraction.addEventListener("click", ()=>{
  operator = "-"
  storeNumber1();}                     
  )
const multiplication = document.querySelector("#multiply");
multiplication.addEventListener("click", ()=>{
  operator = "*"
  storeNumber1();}                     
  )
const division = document.querySelector("#divide");
division.addEventListener("click", ()=>{
  operator = "/"
  storeNumber1();}                     
  )
const equal = document.querySelector("#equal");
equal.addEventListener("click", ()=>{
  storeNumber2();
  operate();
  resultDisplayed = true;
  number1 = display.textContent;
  number2 = null;
  operator = null;
})

const clear = document.querySelector("#clear");
clear.addEventListener("click", ()=>{
  display.textContent = "";
  operator = null;
  number1 = null;
  number2 = null;
})

const deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", ()=>display.textContent = display.textContent.substring(0, display.textContent.length-1));

let font = display.style.fontSize;
while (display.textContent.length > 15) {
  font -= 2;
  display.style.fontSize = `${font}` ;
}
