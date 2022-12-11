var scores, activePlayer, roundScore;
var isGameOver;
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
var limit = 100;

initGame();
function initGame() {
    isGameOver = false;
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    for (var i = 0; i < 2; i++) {
        alert(i);
        document.getElementById("current-" + i).textContent = 0;
        document.getElementById("score-" + i).textContent = 0;
        document.getElementById("name-" + i).textContent = "Player " + (i + 1);
        document.querySelector(".player-" + i + "-panel").classList.remove("active");
        document.querySelector(".player-" + i + "-panel").classList.remove("winner");
        document.querySelector(".player-" + i + "-panel").classList.remove("winner");
    }
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

    if (scores[activePlayer] >= limit) {
        isGameOver = true;
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    } else {
        swtichToNextPlayer();
    }
});

document.querySelector(".btn-new").addEventListener("click", initGame);

document.querySelector(".btn-info").addEventListener("click", function () {
    alert("*Шоог 2р тоглогч шидэж тоглох ба түрүүлж 100 оноонд хүрсэн тоглогч ялагч болно.\n*Шоо 1 буух үед тоглогч цуглуулсан оноо гоо алдах ба эсрэг тоглогч шоог хаяж эхэлнэ\n*2-6 үед та оноог цуглуулсаар байх ба эсүүл 'HOLD' товчийг дарж цуглуулсан оноогоо баттай хадгалж дараагийн тоглогчдоо шоог шилжүүлнэ\n*Тоглоомыг ахин эхлүүлэх бол 'Start game' товчыг дарна");
});