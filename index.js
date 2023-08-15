let number = document.querySelectorAll(".drum").length;

// console.log(number);
for (let i = 0; i < number; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // console.log(this.innerHTML);

    let buttonHTML = this.innerHTML;

    switch (buttonHTML) {
      case "w":
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "a":
        let kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

      case "s":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "d":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "j":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "k":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "l":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
     
    default:
        console.log(buttonHTML);
    }
  });
}

document.addEventListener("keydown", function (event) {
  let key = event.key;

  // console.log(key);

  switch (key) {
    case "w":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

      default:
        console.log(key);
  }
});
