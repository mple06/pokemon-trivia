var startButton = document.querySelector("#start-button");
var timeRemaining = document.querySelector(".timer");
var secondsLeft;

function start() {
  var currentPage = window.location.href;
  secondsLeft = 60;
  var timeLeft = localStorage.getItem("secondsLeftKey");
  if (timeLeft > 0 && !currentPage.includes("question1")) {
    secondsLeft = timeLeft;
  }
  if (currentPage.includes("question")) {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeRemaining.innerHTML = "Time: " + secondsLeft;

      if (secondsLeft == 0) {
        clearInterval(timerInterval);
        alert("Game Over!!");
        // document.getElementById("countdown").innerHTML = "Game Over!";
      }
    }, 1000);
  }
}

// function sendMessage() {
//   timeEl.textContent = "Game Over";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute(
//     "src",
//     "https://media.istockphoo.com/vectors/game-over-comic-speech-bubble-style-vector-illustrationjpg-vector-id1169155347?k=20&m=1169155347&s=612x612&w=0&h=eT4Jpj5ZqBu1oFS5Fv2rXPhvq_Q0JUIiPcvae1P3sVI="
//   );
//   mainEl.appendChild(imgEl);
// }
start();

function rightAnswer() {
  alert("That's correct!");
  localStorage.setItem("secondsLeftKey", secondsLeft);
}

function wrongAnswer() {
  alert("Wrong!");
  secondsLeft = secondsLeft - 15;
  localStorage.setItem("secondsLeftKey", secondsLeft);
}

function myOnClickFn(e) {
  //   window.location.href = "https://www.google.com";
  //   console.log("go");
  event.preventDefault();
  var localStorageCount = localStorage.length;
  localStorage.setItem(
    "playerKey" + localStorageCount,
    document.getElementById("high-score-text-box").value
  );
  window.location.href = "./highscore.html";
}

function displayWinners() {
  var container = document.getElementById("container");
  var ol = document.createElement("ol");
  for (var i = 0; i < localStorage.length; i++) {
    if (!localStorage.key(i).startsWith("secondsLeftKey")) {
      var li = document.createElement("li");
      li.innerHTML = localStorage.getItem(localStorage.key(i));
      ol.appendChild(li);
    }
  }
  container.appendChild(ol);
}

function clearStorage() {
  localStorage.clear();
}

function loadScore() {
  document.getElementById("score").innerHTML =
    "Your Score is " + localStorage.getItem("secondsLeftKey");
}
