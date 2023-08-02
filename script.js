// Add your code to this file
let name="Kaleb";
alert("Hello"+name+"Welcome !")

function adder(class_name){
    for(let i=0;i<class_name.length;i++){
        class_name[i].textContent+="!"
    }
}
function dotter(class_name){
    for(let i=0;i<class_name.length;i++){
        class_name[i].style["border"]="5px orange dotted"
    }
}

let heading=document.querySelector("h1");
let heading2=document.querySelector("h2")
let body=document.querySelector("body")
let pic=document.querySelector("img")
let starters=document.getElementById("starters_image_div")
let Bcon=document.getElementById("bulbasaur_container")
let Scon=document.getElementById("squirtle_container")
let Ccon=document.getElementById("charmander_container")

let list=document.querySelector(".list")
let ss= document.querySelectorAll("img")
console.log(ss)
// ss.style["border-style"]="dotted"
dotter(ss)

let names=Bcon.getElementsByClassName("pokemon_names")
adder(names);
names=Scon.getElementsByClassName("pokemon_names")
adder(names);
names=Ccon.getElementsByClassName("pokemon_names")
adder(names); 





body.style["backgroundColor"]="#06188f"

heading.style["text-decoration"]="underline"
heading2.style["textAlign"]="center"
heading.style["fontSize"]="30px"
heading.style["padding"]="15px"

foot=document.querySelector("footer")
foot.style["text-decoration"]="underline overline white"

