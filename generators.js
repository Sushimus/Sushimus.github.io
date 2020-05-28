var ideas = [
	"A post-apocalyptic game where you play as the pets left behind"+"<br>"+
	"<br>",
	
	"A plague that evolves humanity for the better."+"<br>"+
	"The real question is how people react. .",
	
	"A horror game with no monster, only cute creatures."+"<br>"+
	"The real monster turns out to be the player all along. .",
	
	"A horror game where you need to hide you are sick"+"<br>"+
	"<br>",
	
	"A farming game where you play as ants"+"<br>"+
	"<br>",

	"A deck building game where you cannot add new cards, only modify or remove your starting deck"+"<br>"+
	"<br>",
	
	"A fighting game where you use the terrain and your opponent's body to make yourself stronger"+"<br>"+
	"<br>",
	
	"A racing game where all the contenders are various animals using whacky gadgets"+"<br>"+
	"<br>",
	
	"A city builder where you play as aliens slowly taking over earth"+"<br>"+
	"<br>",
	
	"A creature collecting game where combat revolves around each creature having a 'deck'."+"<br>"+
	"This deck gets added to or modified when the creature levels up",
	
	"Idea 11"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 12"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 13"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 14"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 15"+"<br>"+
	"DECENT IDEA GOES HERE",

	"Idea 16"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 17"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 18"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 19"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 20"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 21"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 22"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 23"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 24"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 25"+"<br>"+
	"DECENT IDEA GOES HERE",

	"Idea 26"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 27"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 28"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 29"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 30"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 31"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 32"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 33"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 34"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 35"+"<br>"+
	"DECENT IDEA GOES HERE",

	"Idea 36"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 37"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 38"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 39"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 40"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 41"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 42"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 43"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 44"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 45"+"<br>"+
	"DECENT IDEA GOES HERE",

	"Idea 46"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 47"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 48"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 49"+"<br>"+
	"DECENT IDEA GOES HERE",
	
	"Idea 50"+"<br>"+
	"DECENT IDEA GOES HERE",
]

function getIdea() {
	var randomNumber = Math.floor(Math.random() * (ideas.length));
	document.getElementById('idea').innerHTML = ideas[randomNumber];
}

//------------------------------------------------------------------------------------------------------Cereal Reviews Start Here------------------------------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------------------------------Contact Overlay Start Here------------------------------------------------------------------------------------------------------

function on() {
  document.getElementById("contactOverlay").style.display = "block";
}

function off() {
  document.getElementById("contactOverlay").style.display = "none";
}