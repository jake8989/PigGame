'use strict';
var score0 = document.querySelector('#score--0');
var score1 = document.querySelector('#score--1');
var current0 = document.querySelector('#current--0');
var current1 = document.querySelector('#current--1');
var rollDice = document.querySelector('.btn--roll');
var holdDice = document.querySelector('.btn--hold');
var newGame = document.querySelector('.btn--new');
var imgDice = document.querySelector('.dice');
var player0 = document.querySelector('.player--0');
var player1 = document.querySelector('.player--1');

var score0,
	score1,
	currentScore = 0,
	playing = true,
	activePlayer = 0;
const scores = [0, 0];
score0.textContent = 0;
score1.textContent = 0;
current0.textContent = 0;
current1.textContent = 0;
imgDice.classList.add('hidden');
function switchUser() {
	let diceNumber = Math.floor(Math.random() * (6 - 1) + 1);
}

rollDice.addEventListener('click', function () {
	if (playing) {
		let diceNumber = Math.floor(Math.random() * 6 + 1);
		imgDice.classList.remove('hidden');
		imgDice.src = `./img/dice-${diceNumber}.png`;
		if (diceNumber !== 1) {
			currentScore = currentScore + diceNumber;
			// current0.textContent=currentScore; //chage
			document.getElementById(`current--${activePlayer}`).textContent =
				currentScore;
		} else {
			document.getElementById(`current--${activePlayer}`).textContent = 0;
			player0.classList.toggle('player--active');
			player1.classList.toggle('player--active');
			activePlayer = activePlayer === 0 ? 1 : 0;
			currentScore = 0;
		}
	}
});

holdDice.addEventListener('click', function () {
	if (playing) {
		scores[activePlayer] += currentScore;
		document.getElementById(`score--${activePlayer}`).textContent =
			scores[activePlayer];

		if (scores[activePlayer] >= 40) {
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.add('player--winner');
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.remove('player--active');
			playing = false;
			imgDice.classList.add('hidden');
		} else {
			document.getElementById(`current--${activePlayer}`).textContent = 0;
			player0.classList.toggle('player--active');
			player1.classList.toggle('player--active');
			document.querySelector(`#current--${activePlayer}`).textContent = 0;
			currentScore = 0;

			activePlayer = activePlayer === 0 ? 1 : 0;
		}
	}
	// currentScore=0;
});

newGame.addEventListener('click', function () {
	activePlayer = 0;
	playing = true;
	imgDice.classList.remove('hidden');
	scores[(0, 0)];
	// currentScore=0;
	score0.textContent = 0;
	score1.textContent = 0;
	// document.querySelector(`#current--${activePlayer}`).textContent=0;
	current0.textContent = 0;
	current1.textContent = 0;
	currentScore = 0;
	player0.classList.add('player--active');
	player1.classList.remove('player--active');
	player0.classList.remove('player--winner');
	player1.classList.remove('player--winner');
});
