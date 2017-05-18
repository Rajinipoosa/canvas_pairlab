context = null;
img = null;
x_position = 100;
y_position=100;
  var app = function() {
  img = document.createElement("img");
  img.src = "http://emojis.slackmojis.com/emojis/images/1457563042/312/doge.png";
  var canvas = document.getElementById("main-canvas");

   // console.dir(canvas);
   context = canvas.getContext("2d");
   // console.log(context);
   drawEtchSketch();
   context.fillStyle = "black";
   createArrowListener();
   drawCircle(x_position,y_position);
 
  }
  var drawDoge = function(x,y){
  context.drawImage(img,x, y, 40,40);
}

  var drawEtchSketch = function(){
  context.fillStyle = "red";
  context.fillRect(0, 0, 600, 500);
  context.fillStyle = "lightgrey";
  context.fillRect(15, 15, 570, 385);
  context.fillStyle = "white";
  context.beginPath();
  context.arc(50,450,40,0,Math.PI*2);
  // context.stroke();
  context.fill();
  // context.fillStyle = "";
  context.beginPath();
  context.arc(550,450,40,0,Math.PI*2);
  // context.stroke();
  context.fill();
}

var changeColor = function(){
  context.fillStyle = ""

}

var createArrowListener = function(){
document.addEventListener("keydown",function(event){
  // console.log(event)
  // console.log(event.key);
  // (event.key === "ArrowUp")
switch(event.key){
    case "ArrowUp":
    console.log("up arrow has been pressed");
    if(y_position > 15)

    {y_position--;
    }
    drawCircle(x_position,y_position);
    break;
    case "ArrowDown":
    console.log("Down arrow has been pressed");
    if(y_position < 360){
      y_position++;
    }
    
    drawCircle(x_position,y_position);
    break;
    case "ArrowLeft":
    console.log("Left arrow has been pressed");
    if(x_position > 15){
    x_position--;
     }
    drawCircle(x_position,y_position);
    break;
    case "ArrowRight":
    console.log("Right arrow has been pressed");
    if(x_position < 545){
      x_position++;
    }
    
    drawCircle(x_position,y_position);
    break;
    default:
    console.log("Other button is been pressed");
    // drawCircle(100,100);
  }

})

}
var drawCircle = function(x,y){
  // context.beginPath();
  // context.arc(x,y,2,0,Math.PI*2);
  
  // context.fill();
drawDoge(x,y);
}


window.addEventListener("load", app);