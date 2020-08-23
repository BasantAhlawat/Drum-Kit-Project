

var len=document.querySelectorAll(".drum").length;

for(var i=0;i<len;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

      var key=this.innerHTML;


      switch (key) {
        case "w":
          var audio=new Audio("sounds/tom-1.mp3");
          audio.play();
        break;

        case "a":
          var audio=new Audio("sounds/tom-2.mp3");
          audio.play();
        break;

        case "s":
          var audio=new Audio("sounds/tom-3.mp3");
          audio.play();
        break;

        case "d":
          var audio=new Audio("sounds/tom-4.mp3");
          audio.play();
        break;

        case "j":
          var audio=new Audio("sounds/snare.mp3");
          audio.play();

        break;

        case "k":
          var audio=new Audio("sounds/crash.mp3");
          audio.play();
        break;

        case "l":
          var audio=new Audio("sounds/kick-bass.mp3");
          audio.play();
        break;

        default: console.log();

      }

      buttonAnimation(key);

  });
}

document.addEventListener("keypress",function(event){

  var key1=event.key;


  switch (key1) {
    case "w":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
    break;

    case "a":
      var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
    break;

    case "s":
      var audio=new Audio("sounds/tom-3.mp3");
      audio.play();
    break;

    case "d":
      var audio=new Audio("sounds/tom-4.mp3");
      audio.play();
    break;

    case "j":
      var audio=new Audio("sounds/snare.mp3");
      audio.play();

    break;

    case "k":
      var audio=new Audio("sounds/crash.mp3");
      audio.play();
    break;

    case "l":
      var audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
    break;

    default: console.log();

  }

  buttonAnimation(key1);

});


function buttonAnimation(currentKey){

  document.querySelector("." + currentKey).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("." + currentKey).classList.remove("pressed");
  },50);

}
