// Selecting Random Box
var i=1;
randomSel();
function randomSel(){
var boxSelect = Math.floor(Math.random() * 4) + 1;
console.log(boxSelect);

var classSelect = ".box" + boxSelect;
console.log(classSelect);

$(classSelect).addClass("btn");

}

$("button").click(function() {
  if ($(this).hasClass("btn")) {
    $("h1").text("Score: " + i);
    $(this).removeClass("btn")
    i++;
    setTimeout(randomSel, 1000);
  } else {
     var audio = new Audio("./error.wav");
     audio.play();
    i=0;
    $("body").addClass("end");
    $("h1").text("Game Over");
    $(this).removeClass("btn")
  }
 
})

