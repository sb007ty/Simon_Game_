var gamePattern = [];

var buttonColours=["red", "blue", "green", "yellow"];

var userClickedPattern = [];

//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;

//2. Create a new variable called level and start at level 0.
var level = 0;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
document.addEventListener("keydown",keypressed);
function keypressed(){
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    document.querySelector("#level-title").innerHTML=("Level " + level);
    nextSequence();
    started = true;
  }
}
  
 

for (i=0; i<document.querySelectorAll(".btn").length; i++)
    document.querySelectorAll(".btn")[i].addEventListener("click",handle);

function handle()
{
      var userChosenColour=this.id;
      userClickedPattern.push(userChosenColour);
     console.log(userClickedPattern);

    playSound(userChosenColour);

  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);


}
function checkAnswer(currentLevel) {

  //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length){

      //5. Call nextSequence() after a 1000 millisecond delay.
      
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {

    console.log("wrong");
    playSound("wrong");

      //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
      document.querySelector("body").classList.add("game-over");
      setTimeout(function () {
        document.querySelector("body").classList.remove("game-over");
      }, 200);

      //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
      document.querySelector("#level-title").innerHTML=("Game Over, Press Any Key to Restart");

      startOver();

  }

}
function nextSequence(){

  userClickedPattern.length=0;

  level++;

  document.querySelector("#level-title").innerHTML=("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour=buttonColours[randomNumber];

    

    gamePattern.push(randomChosenColour);
    
    document.querySelector("#"+ randomChosenColour).classList.add("pressed");
    
    setTimeout(function()
    { 
        document.querySelector("#"+ randomChosenColour).classList.remove("pressed");   //after  1 sec the class removed 
    }, 500);

    playSound(randomChosenColour);


   
}
//var randomNumber=nextSequence();

function playSound(name) {

    //3. Take the code we used to play sound in the nextSequence() function and add it to playSound().
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

  function animatePress(currentColor) {
    document.querySelector("#"+ currentColor).classList.add("pressed");
    setTimeout(function()
    { 
        document.querySelector("#"+ currentColor).classList.remove("pressed");   //after  1 sec the class removed 
    }, 100);

   

  }
  //1. Create a new function called startOver().
function startOver() {

  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  
  gamePattern = [];
  started = false;
}




