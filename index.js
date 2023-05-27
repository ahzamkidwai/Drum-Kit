let number = document.querySelectorAll("drum").length;
console.log(number);

for (let i = 0; i < number; i++) {
  document.querySelectorAll("drum")[i].addEventListener("click", soundfunc());
}

function soundfunc() {
  let ID = document.getElementById("#drum").className;
  switch (ID) {
    case "crash":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "snare":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "kick":
      var audio = new Audio("sounds/kick.mp3");
      audio.play();
      break;
    case "tom1":
      var audio = new Audio("sounds/tom1.mp3");
      audio.play();
      break;
    case "tom2":
      var audio = new Audio("sounds/tom2.mp3");
      audio.play();
      break;
    case "tom3":
      var audio = new Audio("sounds/tom3.mp3");
      audio.play();
      break;
    case "tom4":
      var audio = new Audio("sounds/tom4.mp3");
      audio.play();
      break;
    default:
      console.log("Wrong Input");
      break;
  }
}
