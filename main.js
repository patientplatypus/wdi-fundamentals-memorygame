var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

function createCards() {
	var nextbook = document.getElementById('game-board');

	for (i=0;i<4;i++){
		var newCard = document.createElement("div");
		newCard.setAttribute("class", "card");
		nextbook.appendChild(newCard);
	}
}

createCards();






