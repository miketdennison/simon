var gamePattern = [];
var userClickedPattern = []
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;

$(".btn").on("click", function () {
    userChosenColor = $(this).attr("id");
    playSound(userChosenColor)
    animatePress(userChosenColor);
});

$(document).one("keypress", function() {
    $("#level-title").text(`Level ${level}`);
    nextSequence();
});

function nextSequence() {
    level++;
    $("#level-title").text("Level " + level);
    
    var randomNumber = Math.floor((Math.random() * 4));
    var randomChosenColor = buttonColors[randomNumber];
    
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function playSound(name) {
    var audio = new Audio("assets/sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

