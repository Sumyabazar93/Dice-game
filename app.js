var scores, activePlayer, roundScore;
var isGameOver;
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

initGame();

function changeValId(ner, index, value) {
    document.getElementById(ner + index).textContent = value;
}
function initGame() {
    isGameOver = false;
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    for (var i = 0; i < 2; i++) {
        changeValId("score-", i, 0);
        changeValId("current-", i, 0);
        changeValId("name-", i, "Player" + (i + 1));
    }
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.add("active");

    diceDom.style.display = "none";
}
document.querySelector(".btn-roll").addEventListener("click", function () {
    if (isGameOver) {
        alert("Game Over, click 'New Game' ");
        return;
    }
    var diceNumber = Math.floor(Math.random() * 6 + 1);

    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
    if (diceNumber !== 1) {
        roundScore += diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        swtichToNextPlayer();
    }
});

function swtichToNextPlayer() {
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    activePlayer = (activePlayer + 1) % 2;

    diceDom.style.display = "none";
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDom.style.display = "none";
}

document.querySelector(".btn-hold").addEventListener("click", function () {
    if (isGameOver) {
        alert("Game Over, click 'New Game' ");
        return;
    }
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 10) {
        isGameOver = true;
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    } else {
        swtichToNextPlayer();
    }
});

document.querySelector(".btn-new").addEventListener("click", initGame);