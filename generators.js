var ideas = [
	"Idea 1"+"<br>"+
	"The rest of this line is a test to see how long the words will go before starting a new line I'm trying to make it so that paragraphs work please work paragraphs",
	
	"Idea 2"+"<br>"+
	"The rest of this line is a test to see how long the words will go before starting a new line I'm trying to make it so that paragraphs work please work paragraphs",
	
	"Idea 3"+"<br>"+
	"The rest of this line is a test to see how long the words will go before starting a new line I'm trying to make it so that paragraphs work please work paragraphs",
	
	"Idea 4"+"<br>"+
	"The rest of this line is a test to see how long the words will go before starting a new line I'm trying to make it so that paragraphs work please work paragraphs",
	
	"Idea 5"+"<br>"+
	"The rest of this line is a test to see how long the words will go before starting a new line I'm trying to make it so that paragraphs work please work paragraphs"
]

function getIdea() {
	var randomNumber = Math.floor(Math.random() * (ideas.length));
	document.getElementById('idea').innerHTML = ideas[randomNumber];
}

var reviews = [
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
	var randomNumber = Math.floor(Math.random() * (reviews.length));
	document.getElementById('cerealReview').innerHTML = reviews[randomNumber];
}