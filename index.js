$(document).ready(function() {
     buttoncolors=["red", "blue", "green", "yellow"];



var answer=[];
var patterns=[];
var level=0;
var started=false;



$(document).on('keypress',function(e){
   if(!started){ $("h1").text("Level "+level);
    nextSequence();
    started=true;
   }
})









function nextSequence(){
    patterns=[];
level++;
$("h1").text("Level "+level);
var n=Math.random()*4;
n=Math.floor(n);


var randomcolor=buttoncolors[n];
answer.push(randomcolor);
$("#" + randomcolor).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomcolor);


}

$(".btn").click(function(){

    var userChosenColour=$(this).attr("id");
    patterns.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(patterns.length-1);
})

function checkAnswer(currentLevel){
    if(answer[currentLevel]==patterns[currentLevel]){

        if (patterns.length === answer.length){

            
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    
        } else {
    
          playSound("wrong");
          $("body").addClass("game-over");
          setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
          $("h1").text("Game over, please press any key to restart");
            startOver();
        }
}


function playSound(name){
    var audio= new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    var but= $("#"+ currentColor);
    but.addClass("pressed");
    setTimeout(function() {
        
        $(but).removeClass("pressed");
      }, 100);

}

function startOver(){
level=0;
patterns=[];
started=false;

}



  });



