
//VARIABLES AND INITIAL STATES

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;

$("h1").text("Press A Key to Start");

//FUNCTIONS

function nextSequence(){   //function that generates the next color of the gamePattern

    var randomNumber = Math.round(Math.random() * 3);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

    level++;

    $("h1").text("Level " + level);


}

function playSound(name){  //function that plays a certain sound

    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();

}

function animatePress(currentColour){ //function that animates the buttons when are clicked

    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    },100);

}

function checkAnswer(currentLevel){ //function that checks the answer 

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){  
        console.log("success");

        if(userClickedPattern.length === gamePattern.length){

            setTimeout(function(){
                userClickedPattern = [];
                nextSequence();
            }, 1000);

        }


    }
    else{
        console.log("wrong");

        playSound("wrong");

        $("body").addClass("game-over");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        $("h1").text("Game Over, Press Any Key to Restart");

        startOver();
    }

}

function startOver(){

    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}



//ADD EVENT LISTENERS TO WAIT FOR A KEYDOWN ON THE KEYBOARD

$(document).on("keydown", function(){

    if(started === false){
        started = true;
        $("h1").text("Level " + level);
        nextSequence();
    }
        
});


//ADD EVENT LISTENERS TO THE BUTTONS IN ORDER TO DETECT CLICKS

$(".btn").click(function(event){
    var userChosenColour = event.target.id;

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);

    console.log(userClickedPattern);
    console.log(gamePattern);

    checkAnswer(userClickedPattern.length - 1);

});
