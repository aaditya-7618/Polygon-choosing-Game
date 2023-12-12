let account_balance;

account_balance = localStorage.getItem('account_balance');

account_balance = account_balance ?? 100;


let accountBalanceElement = document.querySelector("#accountBalance");

showAccountBalance();

function showAccountBalance() {
  accountBalanceElement.innerHTML = `Account Balance : ${account_balance}`;
}

function restartGame() {
  let ch = confirm("This will reset this game : ");

  if (ch) {
    account_balance = 100;
    localStorage.setItem('account_balance',account_balance);
    showAccountBalance();
  }
}

let resetElement = document.querySelector("#resetGame");
resetElement.addEventListener("click", restartGame);

let userChoice = "NULL"; // user choices this
let stoppedImage;

let choiceElement = document.querySelector("#polygons");
choiceElement.addEventListener("change", () => {
  userChoice = choiceElement.value;
});

let imgElement = document.querySelector("#imgTag");

let id1, id2, id3, id4, id5, id6;
changeShape();
function changeShape() {
  id1 = setTimeout(() => {
    imgElement.src = "/images/cone.jpg";
    stoppedImage = "cone";
  }, 0);

  id2 = setTimeout(() => {
    imgElement.src = "/images/circle.png";
    stoppedImage = "circle";
  }, 100);

  id3 = setTimeout(() => {
    imgElement.src = "/images/rectangle.png";
    stoppedImage = "rectangle";
  }, 200);

  id4 = setTimeout(() => {
    imgElement.src = "/images/parallogram.png";
    stoppedImage = "parallogram";
  }, 300);

  id5 = setTimeout(() => {
    imgElement.src = "/images/rhombus.png";
    stoppedImage = "rhombus";
  }, 400);

  id6 = setTimeout(() => {
    imgElement.src = "/images/triangle.png";
    stoppedImage = "triangle";
  }, 500);
}

let mainId;
mainId = setInterval(changeShape, 600);

var isRotating = true;

let stopButton = document.querySelector("#stopButton");
let playButton = document.querySelector("#playButton");

// console.log(userChoice);

stopButton.addEventListener("click", stopFunction);
playButton.addEventListener("click", playingFunction);

function stopFunction() {
  if (isRotating === false) {
    alert("Press the play button Again to resume");
  } else if (userChoice === "NULL") {
    alert("Please select a Polygon first.");
  } else {
    stoppingFunction();
    finalFunction();
  }
}

function stoppingFunction() {
  isRotating = false;
  clearTimeout(id1);
  clearTimeout(id2);
  clearTimeout(id3);
  clearTimeout(id4);
  clearTimeout(id5);
  clearTimeout(id6);
  clearInterval(mainId);
}

function finalFunction() {
  // userChoice is stored in stoppedImage variable

  if (userChoice === stoppedImage) {
    account_balance += 10;
  } else {
    account_balance -= 5;
  }
  localStorage.setItem('account_balance',account_balance);

  console.log(
    `User stopped ${userChoice} \nCurrent stopped image is ${stoppedImage}`
  );
  alert(
    `User stopped ${userChoice} \nCurrent stopped image is ${stoppedImage} \nNew Account Balance is ${account_balance}`
  );

  showAccountBalance();
}

function playingFunction() {
  stoppingFunction();
  changeShape();
  mainId = setInterval(changeShape, 600);
  isRotating = true;
}
