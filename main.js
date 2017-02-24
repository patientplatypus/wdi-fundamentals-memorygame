var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";
var cards = ['queen', 'queen', 'king', 'king'];
var cardsinplay = [];


function createCards() {
	var nextbook = document.getElementById('board');
	for (var i=0;i<cards.length;i++){
		var newCard = document.createElement("div");
		newCard.setAttribute("class", "card");
		newCard.setAttribute("data-card", cards[i]);
		nextbook.appendChild(newCard);
	}
}

createCards();





function alertboxwinner(){
	alert("You are winner!");
}

function alertboxloser(){
	alert("Try again bozo!");
}

function ismatch(){

	if (cardsinplay[0] === cardsinplay[1]){

 		setTimeout(function(){ alert("You are a winner!"); }, 500);

 		return true;

	} 

	if (cardsinplay[0] != cardsinplay[1]){

 		setTimeout(function(){ alert("Try again bozo!"); }, 500);

 		return true;

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
		var isitamach = ismatch();
		if (isitamach === true){
			setTimeout(function(){for(var i=0;i<currentcards.length;i++){
				currentcards[i].innerHTML = '';
			}},500)
		}
		cardsinplay = [];	
	}

}


var currentcards = document.querySelectorAll('.card');
var cardlistener = currentcards;

for(var i=0; i<cards.length;i++){
	cardlistener[i].addEventListener('click',isTwoCards);
}






