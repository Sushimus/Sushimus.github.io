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
	
	"An action rpg set in a steampunk universe where luddites, the working class, and entrepreneurs' henchmen"+"<br>"+
	"battle for control of technologic progression",
	
	"A rouguelike where you need to lead baby slimes to safety"+"<br>"+
	"<br>",
	
	"A tactical rpg set in the future."+"<br>"+
	"Your objective is to end the last monarchy",
	
	"A sandbox rpg set in a literal sandbox."+"<br>"+
	"The game is themed around a child's imagination, where random objects are seen as so much more. .",
	
	"A first-person party-based rpg where you play as a slime."+"<br>"+
	"When you take enough damage you split and your party size grows, but each new member is half as strong as the whole",
	
	"A life sim based around technologically advanced dolphins"+"<br>"+
	"<br>",

	"A vehicle sim based around piloting alien spacecraft with strange mechanics."+"<br>"+
	"For added hecticness having friends help would be interesting",
	
	"A 4X strategy where you play as parasites slowly consuming all life on earth"+"<br>"+
	"<br>",
	
	"An rts where a sentient planet protests your escalated resource extraction."+"<br>"+
	"As you extract more the planet tries harder to remove you",
	
	"An rtt where you play as politicions trying to secure people's votes"+"<br>"+
	"<br>",
	
	"An artillery game that uses different types of lights and mirrors"+"<br>"+
	"to drive away photophobic creatures",
	
	"A tower defense set in the backyard during a bbq."+"<br>"+
	"You play as pest control products repelling pests",
	
	"A tbs where you play as an investigation team trying to catch"+"<br>"+
	"a serial killer, or visa versa",
	
	"A platformer that uses roll out carpets to get around"+"<br>"+
	"<br>",
	
	"A shooter where you play as aliens repelling human colonists"+"<br>"+
	"<br>",
	
	"A fighting game based around microbiology"+"<br>"+
	"<br>",

	"A beat-em up where you play as an agry housewife upset"+"<br>"+
	"at horrible insurance phone operators",
	
	"A stealth game where you play as a small child"+"<br>"+
	"trying to get late night snacks",
	
	"A survival game set in prehistoric ireland,"+"<br>"+
	"mythical creatures included",
	
	"A rhythm game where you play as the lead triangle/tambourine of"+"<br>"+
	"an up and coming indie metal band",
	
	"A metroidvania set in a bureaucratic hellscape."+"<br>"+
	"Your goal is to cut through all that stupid red tape",
	
	"A text adventure with a core mechanic being the player needs"+"<br>"+
	"to say verbs into a mic to make them happen",
	
	"A point and click adventure set in deep space."+"<br>"+
	"Also you're a sentient rock.",
	
	"A visual novel detailing the struggle of male rape"+"<br>"+
	"<br>",
	
	"A real-time 3D where you play as monkeys driving an invasive"+"<br>"+
	"new predator out of your home",
	
	"A logic game set in the the near future, you play as hackers"+"<br>"+
	"trying to defuse remote terrorist weapons",

	"A trivia game based around 14th century asia"+"<br>"+
	"<br>",
	
	"A board game with a core mechanic being the board itself folds"+"<br>"+
	"as the game progresses to reveal new areas",
	
	"A card game where you play as electricians trying to wire up a robot correctly."+"<br>"+
	"Each card would be a peice like a 5 kilo ohm resistor",
	
	"An idle game themed around growing new biomes on a planet"+"<br>"+
	"<br>",
	
	"An art game detailing all the emotions of experiencing your first true love"+"<br>"+
	"<br>",
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