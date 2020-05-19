var quotes = [
	"Chex Cinnamon!"+"<br>"+
	"The rest of this line is a test to see how long the words will go before starting a new line I'm trying to make it so that paragraphs work please work paragraphs",
	
	"Fruity Pebbles"+"<br>"+
	"The rest of this line is a test to see how long the words will go before starting a new line I'm trying to make it so that paragraphs work please work paragraphs",
	
	"Cinnamon Toast Crunch"+"<br>"+
	"The rest of this line is a test to see how long the words will go before starting a new line I'm trying to make it so that paragraphs work please work paragraphs",
	
	"Fruity Dino Bites"+"<br>"+
	"The rest of this line is a test to see how long the words will go before starting a new line I'm trying to make it so that paragraphs work please work paragraphs",
	
	"Special K Red Berry"+"<br>"+
	"The rest of this line is a test to see how long the words will go before starting a new line I'm trying to make it so that paragraphs work please work paragraphs"
]

function getReview() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('cerealReview').innerHTML = quotes[randomNumber];
}