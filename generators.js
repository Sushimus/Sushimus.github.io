var ideas = [
	"A post-apocalyptic game where you play as the pets left behind"+"<br>"+
	"<br>",
	
	"A plague that evolves humanity for the better."+"<br>"+
	"<br>",
	
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
	
	"A creature collecting game where after each creature is defeated the winning creature takes a part of them."+"<br>"+
	"<br>",
	
	"A space adventure focused on wormholes through pocket dimensions"+"<br>"+
	"<br>",
	
	"A medieval rpg where magic is actually technology from humanity before their end"+"<br>"+
	"<br>",
	
	"A turn based racing game"+"<br>"+
	"<br>",
	
	"A strategy game where you play as plants trying to drive humans from the rainforest"+"<br>"+
	"<br>",
	
	"An open world sandbox where monsters scale with how much you alter the world"+"<br>"+
	"<br>",

	"An FPS with base capturing, with each captured based spawning AI to defend it"+"<br>"+
	"<br>",
	
	"A train game focused on interstellar cargo shipment"+"<br>"+
	"<br>",
	
	"A god game where you control creatures, none of which are carnivores."+"<br>"+
	"Might have to find interesting ways to substitute them. .",
	
	"A spaceship mechanic simulator"+"<br>"+
	"<br>",
	
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

//------------------------------------------------------------------------------------------------------Contact Overlay Start Here------------------------------------------------------------------------------------------------------

function on() {
  document.getElementById("contactOverlay").style.display = "block";
}

function off() {
  document.getElementById("contactOverlay").style.display = "none";
}