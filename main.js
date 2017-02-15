var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";
var cards = ['queen', 'queen', 'king', 'king'];
var cardsinplay = [];


function createCards() {
	var nextbook = document.getElementById('game-board');

	for (var i=0;i<cards.length;i++){
		var newCard = document.createElement("div");
		newCard.setAttribute("class", "card");
		newCard.setAttribute("data-card", cards[i]);
		nextbook.appendChild(newCard);
	}
}

createCards();

function ismatch(){

	if (cardsinplay[0] === cardsinplay[1]){

		alert("You are winner!");

		for(var i=0;i<currentcards.length;i++){
			currentcards[i].innerHTML = '';
		}

	} 

	if (cardsinplay[0] != cardsinplay[1]){

		alert("Try again bozo!");

		for(var i=0;i<currentcards.length;i++){
			currentcards[i].innerHTML = '';
		}

	}

}

function isTwoCards(event){
	cardsinplay.push(this.getAttribute('data-card'));

	if (cardsinplay[cardsinplay.length-1] === "king"){
		event.target.innerHTML = '<img src="kingicon.jpg"/>';
	} else if (cardsinplay[cardsinplay.length-1] === "queen"){
		event.target.innerHTML = '<img src="queenicon.jpg"/>';
	}

	if (cardsinplay.length === 2){
		ismatch();
		cardsinplay = [];	
	}

}


var currentcards = document.querySelectorAll('.card');
var cardlistener = currentcards;

for(var i=0; i<cards.length;i++){
	cardlistener[i].addEventListener('click',isTwoCards);
}






