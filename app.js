// document.getElementById('score-0').textContent = '0';
// document.getElementById('score-1').textContent = '0';

// document.getElementById("current-0").textContent = '0';
// document.getElementById("current-1").textContent = '0';

var activePlayer = 0;
var scores = [0, 0];
var roundScore = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
document.getElementById('winner-name').textContent = "";

document.querySelector(".btn-roll").addEventListener("click", function () {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    if (diceNumber === 1) {
        alert("Unlucky ^_^ ");
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        activePlayer = (activePlayer + 1) % 2;
    } else {
        roundScore += diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        diceDom.style.display = "block";
        diceDom.src = 'dice-' + diceNumber + '.png';
    }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
    scores[activePlayer] += roundScore;
    if (scores[activePlayer] >= 30) {
        console.log("Winner-" + activePlayer);
        document.getElementById('winner-name').textContent = "Player " + activePlayer;
        diceDom.src = 'winner.png';
    }
    roundScore = 0;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    activePlayer = (activePlayer + 1) % 2;
});

document.querySelector(".btn-new").addEventListener("click", function () {
    diceDom.style.display = "none";
    alert("lets begin");
    activePlayer = 1;
    scores = [0, 0];
    roundScore = 0;
    for (var i = 0; i < 2; i++) {
        document.getElementById('score-' + i).textContent = 0;
        document.getElementById('current-' + i).textContent = 0;
    }
});