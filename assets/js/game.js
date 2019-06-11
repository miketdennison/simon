var gamePattern = [];
var userClickedPattern = []
var buttonColors = ["red", "blue", "green", "yellow"];

$(".btn").on("click", function () {
    userChosenColor = $(this).attr("id");
});

function nextSequence() {
    var randomNumber = Math.floor((Math.random() * 4));
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    console.log("assets/sounds/" + randomChosenColor + ".mp3");
    var audio = new Audio("assets/sounds/" + randomChosenColor + ".mp3");
    audio.play();
}

nextSequence();

