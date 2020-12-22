var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var check=false,level=1;

function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

$("*").keypress(function()
{
if(check==false)
{
check=true;
nextSequence();
}
}

);
function nextSequence()
{
  $('#level-title').text("level "+level);
  level++;
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColur=buttonColours[randomNumber];
  gamePattern.push(randomChosenColur);

  animatePress(randomChosenColur);
  playSound(randomChosenColur);

}
function playSound(name)
{

  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();

}
function animatePress(currentColour)
{
  $('#'+currentColour).addClass("pressed");
  setTimeout(function() {
    $('#'+currentColour).removeClass('pressed');
}, 100);

}
$('#green, #red,#blue,#yellow').click(function () {
  var userChosenColour=this.id;
  userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    if(userClickedPattern[userClickedPattern.length-1]===gamePattern[userClickedPattern.length-1])
    {
      playSound(userChosenColour);
      animatePress(userChosenColour);





    }
    else
    {
      var audio=new Audio("sounds/wrong.mp3");
      audio.play();
      check=false;
      level=1;
      userClickedPattern=[];
      gamePattern=[];
      $("#level-title").text("you got slow brain bro , try again by pressing any key!")
    }
    if(userClickedPattern.length===gamePattern.length)
    {
      userClickedPattern=[];
      setTimeout(nextSequence,1000);


    }











});
