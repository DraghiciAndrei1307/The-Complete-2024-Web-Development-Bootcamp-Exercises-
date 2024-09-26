//alert("Hello Andrei!");

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var selectedSound = new Audio(randomChosenColour + ".mp3");
    selectedSound.play();

}





