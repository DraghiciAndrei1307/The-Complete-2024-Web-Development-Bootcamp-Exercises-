var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

function changeH1Text(){ 

    if(randomNumber1 > randomNumber2)
        document.querySelector(".container > h1").innerHTML = "Player 1 Wins";
    else if( randomNumber1 < randomNumber2)
        document.querySelector(".container > h1").innerHTML = "Player 2 Wins";
    else
       document.querySelector(".container > h1").innerHTML = "Draw";
}

function changeDice(){

    document.querySelector("img.img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    document.querySelector("img.img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");
}
play();
function play(){

    changeH1Text();
    changeDice();

}



document.querySelector(".flex-container > .button").onclick();
