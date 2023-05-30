const getNumber = () => {
  let number = document.querySelectorAll(".drum").length;
  console.log("getnumber function ke andar chal rahe hain " + number);
  return number;
};

const attachEvent = () => {
  let number = getNumber();
  for (let i = 0; i < number; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", (event) => {
      soundfunc(event);
    });
  }
};

function soundfunc(event) {
  let ID = event.target.id;
  console.log(ID);
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
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "tom1":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "tom2":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "tom3":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "tom4":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      console.log("Wrong Input");
      break;
  }
}

attachEvent();

function soundfunc2(key) {
  console.log("Soundfunc 2 is called");
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      console.log("Wrong Input");
      break;
  }
}

document.addEventListener("keypress", function (event) {
  let keyy = event.keyCode;
  alert(event.key);
  keyy = event.key;
  console.log(keyy);
  soundfunc2(keyy);
});
