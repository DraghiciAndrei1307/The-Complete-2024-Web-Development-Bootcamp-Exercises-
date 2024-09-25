//Variables

var tom1 = new Audio('./sounds/tom-1.mp3');
var tom2 = new Audio('./sounds/tom-2.mp3');
var tom3 = new Audio('./sounds/tom-3.mp3');
var tom4 = new Audio('./sounds/tom-4.mp3');
var kick = new Audio('./sounds/kick-bass.mp3');
var crash = new Audio('./sounds/crash.mp3');
var snare = new Audio('./sounds/snare.mp3');

//Detecting click press


for(var i = 0; i < document.querySelectorAll("button.drum").length; i++){



    document.querySelectorAll("button.drum")[i].addEventListener("click", function (){
       
        //this.style.color = "white";

        var buttonInnerHTML = this.innerHTML;

        playTheCorrectSound(buttonInnerHTML);

    });

}


//Detecting keyboard Press

document.addEventListener("keydown", function (event){

    playTheCorrectSound(event.key);

});


function playTheCorrectSound(character){

    switch(character){
        case "w":{
            tom1.play();
        } break;
        case "a":{
            tom2.play();
        } break;
        case "s":{
            kick.play();
        } break;
        case "d":{
            snare.play();
        } break;
        case "j":{
            crash.play();
        } break;
        case "k":{
            tom3.play();
        } break;
        case "l":{
            tom4.play();
        } break;
        default: console.log(buttonInnerHTML);
    }

}