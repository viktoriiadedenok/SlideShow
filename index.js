let currentPicture = 0;
let pictureIndexList = [0, 1, 2, 3, 4, 5, 6];
let classList = {};

function clearActiveClass() {
  classList = document.getElementsByClassName("round-button");
  for (let i = 0; i < classList.length; i++) {
    classList[i].className = "round-button";
  }
}
function curPictAndClass() {
  classList[currentPicture].className = "round-button active";
  document.getElementById("picture").src =
    "img/img_0" + String(currentPicture) + ".jpg";
}

function nextPhotoLeft() {
  clearActiveClass();
  currentPicture = currentPicture -= 1;
  if (currentPicture === -1) {
    currentPicture = 6;
  }
  curPictAndClass();
}

function nextPhotoRight() {
  clearActiveClass();
  currentPicture = currentPicture += 1;
  if (currentPicture === 7) {
    currentPicture = 0;
  }
  curPictAndClass();
}

function changePicture(ev, index) {
  clearActiveClass();
  ev.target.classList.add("active");
  currentPicture = pictureIndexList[index];
  document.getElementById("picture").src =
    "img/img_0" + String(currentPicture) + ".jpg";
}
