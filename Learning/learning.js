// From https://youtu.be/8dWL3wF_OMw


//------------------------------------ Basic ------------------------------------


//Ineraction
console.log(age);
// let username = window.prompt("Enter name :");
console.log(`Hello ${username}`);   //template litterals
// alert("Test");


//Operations
let age = 21;
age++;
console.log(typeof age);
age = Number("3.2");
// Math.floor / Math.sqrt / Math.abs / Math.max etc


//Variables & Const
const RADIUS = 3.14;
// let is limited to a block {}     /   var is limited to a function(){}, if global it changes the brower's window props


//Basic counter
let count = 0;
document.getElementById("incBtn").onclick = function(){     //<button id="incBtn">+</button>
    count++;
    document.getElementById("countLabel").innerHTML = count;    //<label id="countLabel">0</label>
}


//String
// String props : .length    .charAt(n)  .indexOf("")    .substring(n)   .trim()     .toUpperCase()  .replaceAll("-",".")
// .slice(indexOf(" ")), extract a new subsection
// .toLocale.string("en-US", {style: "currency", currency :"USD"}) change string to locale version with option of a currency that is the USD


//Flow
// .checked property           switch( ){ case a : .... break;       default : ...}
// break quit the current branching ; continue skip an iteration



//------------------------------------ Beginner ------------------------------------


//Method chaining
let letter = username.trim().charAt(3)  //do a method after an other


//Function
function Bday(age){
    return age>=18 ? true : false;
}


//Array
let fruits = ["apple","banana","orange"];
fruits[0] = "coconut";
// grocery[0][0]
// .pusch(...)      .pop()   .length     for(let f of fruits){ }     .sort()     .reverse()    .forEach()
// .filter(fct)-> create new filtered array    .map(fct)-> create new array too      .reduce(fct) = Fold.left


//HashMap 
const store = new Map([ ["shirt,20"], ["jean", 30]]);   
// .get("shirt")   .set("new",price)   .delete("new")  .has("shirt")



//------------------------------------ Intermediate-Paradigm ------------------------------------


//Modularity
let maxi  = Math.max(...[1,2,3,4,5]);   // ... is the spread operator => 1 2 3 4 5 instead of the array (or string), unpack elements

function sum(...nbs){       // ... is the rest operator, here I can apply sum to 4,5,20,200 numbers directly (somewhat of an higher order function)
    let s=0;
    for (let i in nbs){s+=i;}
    return s;
}


//Functionnal-type things
function prod(x,y, call){call(x*y);}        // call is a function as an argument, it's called 'callback'

const x = function (x,y) {return x>y;}      // anonymous functions
const y = (a,b) => a>b;

function FG(){ F(); G(); function F(){}; function G(){}}    // nested functions



//Object-Oriented Programming
// Object
const car = { model:"Mustang", color:"red", year:"2023", drive : function(){console.log("H");}}
car.color();

//Class
class Player{

    // Atribute
    static score = 0;       

     // Constructor
    constructor(name, age){    
        this.name = name;
        this.age = age;
    }

    //Method
    static pause(){console.log("Pause");}   
}
//Instance
const p1 = new Player("Baba",16);

//Inheritance
class HockeyP extends Player{
    constructor(name,age,team){
        super(name,age);        // calls the Player constructor
        this._team = team;     // the _ is a convention that the property shouldn't be modified
    }

    //Getter
    get team(){     //shouldn't be the same name as the attribute
        return this._team;
    }

    //Setter
    set team(s){
        _team = s;
    }
}



//------------------------------------ Intermediate-Specific ------------------------------------


//Errors
try{
    if(isNaN(x)) throw "Nope";
    const p2 = new Player("Baba",16);
}catch(error){console.log(error);}
finally{ console.log("Always executes");}


//Timing
setTimeout(fct, 3000, args);  // wait and then do fct  |  Async fct -> doesn't pause the execution
clearTimeout(); // clear the waits

const timer = setInterval(fct, 1000, args);   // do fct repeatedly
clearInterval(timer);

let date = new Date();  // default constructor is the current time and date
let date1 = new Date(2023,0,1,2,3,4,5);
let date2 = new Date("January 1, 2023 00:00:00");
// .getMinutes()    .setDate()  

console.time("Response time");  // start a timer that track SYNCHRONOUS time (not the Timeouts)
console.timeEnd("Response time");   //end and display the timer


//Promise
const promise = new Promise((resolve,reject) => {   // encapsulate an async ope ; are pending then fulfilled or rejected
    // async op
    
    if(cond){resolve("Ok");}    // if endend-up true
    else{ reject("Nope")}   // if false
});
promise.then(fct).catch();

//async function ... => make a function return a promise
//await async_fct(); => make an async fct wait for a promise


//Module
// <script type="module" src="script.js"></script>
export const PI = 3.14; // in the module
import {PI} from "./script.js";  // to import the module
// or import * as MathUtil from ... then use MathUtil.PI



//------------------------------------ Intermediate-Interaction-With-HTML/CSS ------------------------------------


//Element Selector
document.getElementById("apple");
let fruit = document.getElementsByName("fruits");   // list of the elements with this name
fruit[0].value;
let vegetable = document.getElementsByTagName("ul");
let dessert = document.getElementsByClassName("desserts");
let element = document.querySelectorAll("#div,[for]"); // or querySelector(), return all the (resp. the first element) that matches the selector(s)
element.lastElementChild;
element.nextElementSibling;
element.parentElement;


//Modify HTML/CSS
const nameTag = document.createElement("h1");
nameTag.textContent = "Test";   //.innerHTMl is vulnerable to attacks
document.body.append(nameTag);
//Example : const myList = document.querySelector("#fruit"); myList.append(nameTag);

const title = document.getElementById("myTitle");
title.style.backgroundColor = "#2222222";
title.style.visibility = "hidden";


//Events
element.onclick = doSomething;
// .onload  .onchange   .onmouseover    .onmouseout .onmousedown (click)    .onmouseup

element.addEventListener("mouseover", fct);
// element.addEventListener("mouseout",otherfct, true); // the true makes the outer element to be activated first/preferred

window.addEventListener("keydown",event => console.log(event.key)); // to handle key presses


//Canvas
// HTML : <canvas id="Canvas" width="500" height="500"></canvas>
let canvas = document.getElementById("Canvas");
let context = canvas.getContext("2d");
context.strokeStyle = "purple";
context.fillStyle = "yellow";
context.lineWidth = 10;
context.beginPath();
context.strokeRect(0,0,250,250);
context.fillRect(0,0,250,250);
context.arc(250,250,10,0, 2*Math.PI,false);
context.textAlign = "center";
context.fillText("WIn !", canvas.width/2, canvas.height/2);
context.moveTo(0, 0);
context.lineTo(500,500);
context.stroke();


//Window
window.innerWidth   .innerHeight    .location.href  
.alert("")  .confirm("OK ?")    .alert("!")     .close()


//Cookies
navigator.cookieEnabled;
document.cookie = "firstName=SpongeBob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// create fct to create, delete, get cookies    ;   they are stored by name/value pairs
