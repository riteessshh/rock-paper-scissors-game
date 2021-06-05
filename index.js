$("#rules-btn").click(()=>{
  document.getElementById("overlay").style.display = "block";
})
$(".close-btn").click(()=>{
  document.getElementById("overlay").style.display = "none";
})

const list = ["rock", "paper", "scissors"]
var score = 0
$("p.score-no").text(score)

// ------------------ ROCK -------------------------
$(".rock").click(()=>{
  console.log("rock");
  let userSelection = "rock"
  let compSelection = list[Math.floor(Math.random() * 3)];
  console.log(compSelection);
  $("div#showcase").toggleClass("hide")
  $("div#match").toggleClass("hide")
  $("div#result").toggleClass("hide")
  $(".userOutercircle").addClass(userSelection)
  $(".compOutercircle").addClass(compSelection)

  if (compSelection == "rock") {
    console.log("Draw");

    var imgTag = document.createElement("IMG")
    imgTag.setAttribute("src", "images/icon-" + userSelection + ".svg")
    imgTag.setAttribute("class", "image")
    $("div.usercircle").append(imgTag)

    var cimgTag = document.createElement("IMG")
    cimgTag.setAttribute("src", "images/icon-" + compSelection + ".svg")
    cimgTag.setAttribute("class", "image")
    $("div.compcircle").append(cimgTag)

    $("p.result-text").text("DRAW")

  } else if (compSelection == "paper") {
    console.log("You lose");
    var imgTag = document.createElement("IMG")
    imgTag.setAttribute("src", "images/icon-" + userSelection + ".svg")
    imgTag.setAttribute("class", "image")
    $("div.usercircle").append(imgTag)

    var cimgTag = document.createElement("IMG")
    cimgTag.setAttribute("src", "images/icon-" + compSelection + ".svg")
    cimgTag.setAttribute("class", "image")
    $("div.compcircle").append(cimgTag)

    $("p.result-text").text("YOU LOSE")
    if (score > 0) {
      score--
      $("p.score-no").text(score)
    }
    $("p.play-again").css("color","red")

  } else if (compSelection == "scissors") {
    console.log("you win");

    var imgTag = document.createElement("IMG")
    imgTag.setAttribute("src", "images/icon-" + userSelection + ".svg")
    imgTag.setAttribute("class", "image")
    $("div.usercircle").append(imgTag)

    var cimgTag = document.createElement("IMG")
    cimgTag.setAttribute("src", "images/icon-" + compSelection + ".svg")
    cimgTag.setAttribute("class", "image")
    $("div.compcircle").append(cimgTag)

    $("p.result-text").text("YOU WIN")
    score++
    $("p.score-no").text(score)

  }
})

// ---------------- PAPER ----------------------
$(".paper").click(()=>{
  console.log("paper");
  let userSelection = "paper"
  let compSelection = list[Math.floor(Math.random() * 3)];
  console.log(compSelection);
  $("div#showcase").toggleClass("hide")
  $("div#match").toggleClass("hide")
  $("div#result").toggleClass("hide")
  $(".userOutercircle").addClass(userSelection)
  $(".compOutercircle").addClass(compSelection)

  if (compSelection == "paper") {
    console.log("Draw");

    var imgTag = document.createElement("IMG")
    imgTag.setAttribute("src", "images/icon-" + userSelection + ".svg")
    imgTag.setAttribute("class", "image")
    $("div.usercircle").append(imgTag)

    var cimgTag = document.createElement("IMG")
    cimgTag.setAttribute("src", "images/icon-" + compSelection + ".svg")
    cimgTag.setAttribute("class", "image")
    $("div.compcircle").append(cimgTag)

    $("p.result-text").text("DRAW")

  } else if (compSelection == "scissors") {
    console.log("You lose");
    var imgTag = document.createElement("IMG")
    imgTag.setAttribute("src", "images/icon-" + userSelection + ".svg")
    imgTag.setAttribute("class", "image")
    $("div.usercircle").append(imgTag)

    var cimgTag = document.createElement("IMG")
    cimgTag.setAttribute("src", "images/icon-" + compSelection + ".svg")
    cimgTag.setAttribute("class", "image")
    $("div.compcircle").append(cimgTag)

    $("p.result-text").text("YOU LOSE")
    if (score > 0) {
      score--
      $("p.score-no").text(score)
    }
    $("p.play-again").css("color","red")

  } else if (compSelection == "rock") {
    console.log("you win");

    var imgTag = document.createElement("IMG")
    imgTag.setAttribute("src", "images/icon-" + userSelection + ".svg")
    imgTag.setAttribute("class", "image")
    $("div.usercircle").append(imgTag)

    var cimgTag = document.createElement("IMG")
    cimgTag.setAttribute("src", "images/icon-" + compSelection + ".svg")
    cimgTag.setAttribute("class", "image")
    $("div.compcircle").append(cimgTag)

    $("p.result-text").text("YOU WIN")
    score++
    $("p.score-no").text(score)

  }
})

// ---------------- SCISSORS -----------------------
$(".scissors").click(()=>{
  console.log("scissors");
  let userSelection = "scissors"
  let compSelection = list[Math.floor(Math.random() * 3)];
  console.log(compSelection);
  $("div#showcase").toggleClass("hide")
  $("div#match").toggleClass("hide")
  $("div#result").toggleClass("hide")
  $(".userOutercircle").addClass(userSelection)
  $(".compOutercircle").addClass(compSelection)

  if (compSelection == "scissors") {
    console.log("Draw");

    var imgTag = document.createElement("IMG")
    imgTag.setAttribute("src", "images/icon-" + userSelection + ".svg")
    imgTag.setAttribute("class", "image")
    $("div.usercircle").append(imgTag)

    var cimgTag = document.createElement("IMG")
    cimgTag.setAttribute("src", "images/icon-" + compSelection + ".svg")
    cimgTag.setAttribute("class", "image")
    $("div.compcircle").append(cimgTag)

    $("p.result-text").text("DRAW")

  } else if (compSelection == "rock") {
    console.log("You lose");

    var imgTag = document.createElement("IMG")
    imgTag.setAttribute("src", "images/icon-" + userSelection + ".svg")
    imgTag.setAttribute("class", "image")
    $("div.usercircle").append(imgTag)

    var cimgTag = document.createElement("IMG")
    cimgTag.setAttribute("src", "images/icon-" + compSelection + ".svg")
    cimgTag.setAttribute("class", "image")
    $("div.compcircle").append(cimgTag)

    $("p.result-text").text("YOU LOSE")
    if (score > 0) {
      score--
      $("p.score-no").text(score)
    }
    $("p.play-again").css("color","red")

  } else if (compSelection == "paper") {
    console.log("you win");

    var imgTag = document.createElement("IMG")
    imgTag.setAttribute("src", "images/icon-" + userSelection + ".svg")
    imgTag.setAttribute("class", "image")
    $("div.usercircle").append(imgTag)

    var cimgTag = document.createElement("IMG")
    cimgTag.setAttribute("src", "images/icon-" + compSelection + ".svg")
    cimgTag.setAttribute("class", "image")
    $("div.compcircle").append(cimgTag)

    $("p.result-text").text("YOU WIN")
    score++
    $("p.score-no").text(score)

  }
})

$("p.play-again").click(()=>{
  $("div.usercircle").empty()
  $("div.compcircle").empty()
  $("div#showcase").toggleClass("hide")
  $("div#match").toggleClass("hide")
  $("div#result").toggleClass("hide")
  $(".userOutercircle").removeClass("rock")
  $(".compOutercircle").removeClass("rock")
  $(".userOutercircle").removeClass("paper")
  $(".compOutercircle").removeClass("paper")
  $(".userOutercircle").removeClass("scissors")
  $(".compOutercircle").removeClass("scissors")
  $("p.play-again").css("color","hsl(237, 49%, 15%)")
})
