//------------------------------------------------------------------------------------------------------Idea Generator Start Here------------------------------------------------------------------------------------------------------

function getIdea() {
	var listSelections = [
		"First set",
		"Second set",
		"Third set",
		"Fourth set",
		"Fifth set",
		"Sixth set",
		"Seventh set"
	]
	var listChosen = Math.floor(Math.random() * (listSelections.length));

	switch (listChosen) {
		case 0:
			var firstSet = [
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
				"<br>"
			]
			var firstSetChoose = Math.floor(Math.random() * (firstSet.length));
			var ideaChosen = firstSet[firstSetChoose];
			break;
			
		case 1:
			var secondSet = [
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
				
				"A roguelike where you need to lead baby slimes to safety"+"<br>"+
				"<br>",
				
				"A tactical rpg set in the future."+"<br>"+
				"Your objective is to end the last monarchy",
				
				"A sandbox rpg set in a literal sandbox."+"<br>"+
				"The game is themed around a child's imagination, where random objects are seen as so much more. .",
				
				"A first-person party-based rpg where you play as a slime."+"<br>"+
				"When you take enough damage you split and your party size grows, but each new member is half as strong",
				
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
				"to drive away photophobic creatures"
			]
			var secondSetChoose = Math.floor(Math.random() * (secondSet.length));
			var ideaChosen = secondSet[secondSetChoose];
			break;
			
		case 2:
			var thirdSet = [
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
				"trying to defuse remote terrorist weapons"
			]
			var thirdSetChoose = Math.floor(Math.random() * (thirdSet.length));
			var ideaChosen = thirdSet[thirdSetChoose];
			break;
			
		case 3:
			var fourthSet = [
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
				
				"A fast paced game where you play as hologram-like entities"+"<br>"+
				"going through a city inspired by a computer motherboard",
				
				"A game about escaping indentured servitude"+"<br>"+
				"<br>",
				
				"A cyberpunk western about breaking into cryptovaults and stealing bitcoin"+"<br>"+
				"<br>",
				
				"A happy game about playing with unicorns that slowly devolves into"+"<br>"+
				"a deranged person in therapy not recognising the world around them",
				
				"A puzzle game where you go around a sphrerical planet solving a rubic's cube inspired puzzle"+"<br>"+
				"while making your way through bad guys",
				
				"A fairly realistic masonry simulator"+"<br>"+
				"<br>",
				
				"A puzzle game where you need to use seemingly random objects to create cinematic scenes to take photos of"+"<br>"+
				"<br>",
				
				"A circuitry simulator where you use various capacitors, resistors, etc. to create functioning devices"+"<br>"+
				"<br>",
				
				"A game where the core mechanic revolves around dynamically"+"<br>"+
				"changing the screen size, resolution, and aspect ratio",
				
				"A roguelike puzzle game about escape"+"<br>"+
				"<br>"
			]
			var fourthSetChoose = Math.floor(Math.random() * (fourthSet.length));
			var ideaChosen = fourthSet[fourthSetChoose];
			break;
			
		case 4:
			var fifthSet = [
				"A life sim where you uncover your character's predefined traits as you play them"+"<br>"+
				"<br>",
				
				"A puzzle game where the story and next puzzle are generated based on how the"+"<br>"+
				"previous puzzle was solved",
				
				"You're the town's wizard and you need to brew the right spells for enough of the correct weather."+"<br>"+
				"(Could be an indirect city builder with growth of different portions tied to weather patterns)",
				
				"A parental sim where you need to raise the perfect child, with everything you don't do well"+"<br>"+
				"being reflected in the child's flaws",
				
				"A fashion game where you need to design clothes at a profit. Value would be tied to your"+"<br>"+
				"reputation, mesh of colours, angle similarity, difference from last design, etc.",
				
				"A civil engineer sim where you need to find and repair faults in constructions"+"<br>"+
				"<br>",
				
				"A business management game where you need to find creative ways to launder money,"+"<br>"+
				"do blackmarket deals, etc",

				"A gag game about giving people pedicures."+"<br>"+
				"Some people have rather nasty feet",
				
				"A horror cooking game"+"br"+
				"<br>",
				
				"A world where nearly all technology is based on radio waves and different"+"<br>"+
				"wave spectrums",
				
				"A game about channeling different waves of light"+"<br>"+
				"<br>",
				
				"A puzzle game about optimising software"+"<br>"+
				"<br>",
				
				"A cooking game where you need to poison certain customers in different ways"+"<br>"+
				"just right so they die but do it far away from your store",
				
				"A delivery game where you build the roads so you can deliver"+"<br>"+
				"<br>",
				
				"Game like papers please where you're screening for an increasingly complex and deadly virus"+"<br>"+
				"<br>"
			]
			var fifthSetChoose = Math.floor(Math.random() * (fifthSet.length));
			var ideaChosen = fifthSet[fifthSetChoose];
			break;
			
		case 5: 
			var sixthSet = [
				"Game where you're rushing around a waiting room trying to politely tell boomers to stop being disruptive"+"<br>"+
				"if done wrong they get mad",
				
				"Game where you explore the world from the perspective of a hamster in a roll ball"+"<br>"+
				"<br>",
				
				"Shaving simulator with bad hand controls"+"<br>"+
				"<br>",
				
				"Horror game about being stuck in a waiting room"+"<br>"+
				"<br>",
				
				"Management game similar to prison architect about planning government offices,"+"<br>"+
				"with incentives to be as inefficient as possible",
				
				"Game about being a vine trying to overgrow a building without being killed off"+"<br>"+
				"<br>",
				
				"Nonsensical hacking game based on movie logic,"+"<br>"+
				"where more keyboards and monitors makes you better",
				
				"Graphic design game where points are allocated based on colour preference of company,"+"<br>"+
				"number of lines used, angle symmetry, etc",
				
				"Game about replacing outdated and ruined electrical and sprinkler systems,"+"<br>"+
				"with the newspapers telling you when you screw up",
				
				"Competitive adhd behavior racing, who can bounce their leg the fastest? etc"+"<br>"+
				"<br>",
				
				"A game about trying to automate production without machines"+"<br>"+
				"<br>",
				
				"Intense laser war from the imagination of a kid playing laser tag"+"<br>"+
				"<br>",
				
				"A world where competitive retired-dad golfing has become a mainstream attraction"+"<br>"+
				"<br>",
				
				"Game about racing shopping carts and various other things through a grocery store,"+"<br>"+
				"avoiding staff along the way",
				
				"A biblically accurate rapture, nonhuman angels included"+"<br>"+
				"<br>"
			]
			var sixthSetChoose = Math.floor(Math.random() * (sixthSet.length));
			var ideaChosen = sixthSet[sixthSetChoose];
			break;
		
		case 6:
			var seventhSet = [
				"You've been cursed by an annoying witch, have fun trying not to have wardrobe malfunctions"+"<br>"+
				"<br>",
				
				"A dystopian city planner where you need to plan enough slums, militarized police,"+"<br>"+
				"and basic amenities to avoid an overwhelming revolt",
				
				"Basket designing simulator, with different use cases requiring different baskets"+"<br>"+
				"(in the same vein as polybridge)",
				
				"A roguelike where artifacts are rare, kept between deaths, and shape the enemies,"+"<br>"+
				"bosses, and events encountered",
				
				"A roguelike where you choose the effects and side-effects"+"<br>"+
				"of artifacts as you gain them",
				
				"Strategy game where AI mechanic involves military packs and spies revealing the types of units you have,"+"<br>"+
				"then when planning to invade they build counter-units and units that stack decently against yours" 
			]
			var seventhSetChoose = Math.floor(Math.random() * (seventhSet.length));
			var ideaChosen = seventhSet[seventhSetChoose];
			break;
			
		default:
			var whoops = [
				"oh no!",
				"whoops!"
			]
			var whoopsChoose = Math.floor(Math.random() * (whoops.length));
			var adjectiveChosen = whoops[adjectiveChoose];
			
			const whoopsStatement = [
				"Well this is embarressing, I seem to have screwed up my javascript. Please let me know so I can fix it",
				"I blotched my javascript. Please let me know so I can fix it"
			]
			var statementChoose = Math.floor(Math.random() * (whoopsStatement.length));
			var ideaChosen = statementChoose[whoopsStatement];
			
			break;
	}
	document.getElementById('idea').innerHTML = ideaChosen;
}

//------------------------------------------------------------------------------------------------------Random Creature Start Here------------------------------------------------------------------------------------------------------
function getCreature() {
	var creatureModifyers = [
		"small",
		"miniscule",
		"tiny",
		"dwarf",
		"large",
		"massive",
		"gigantic",
		"huge",
		"agressive",
		"defensive",
		"agile",
		"tanky",
		"meaty",
		"spiritual",
		"mystic",
		"albino",
		"red",
		"orange",
		"yellow",
		"green",
		"blue",
		"indigo",
		"violet",
		"black",
		"white",
		"monochromatic",
		"technicoloured",
		"edible",
		"poisonous",
		"toxic",
		"foul smelling",
		"hungry"
	]
	var creatureModifyerChoose = Math.floor(Math.random() * (creatureModifyers.length));
	var creatureModifyerChosen = creatureModifyers[creatureModifyerChoose];
	
	var creatureTypes = [
		"mammals",
		"fishs",
		"reptiles",
		"birbs",
		"amphibians",
		"insects"
	]
	var typeChosen = Math.floor(Math.random() * (creatureTypes.length));
	
	switch (typeChosen) {
		case 0:
			var mammalAdjectives = [
				"large-eyed",
				"small-eyed",
				"wide-eyed",
				"narrow-eyed",
				"one-eyed",
				"two-eyed",
				"three-eyed",
				"four-eyed",
				"five-eyed",
				"six-eyed",
				"seven-eyed",
				"eight-eyed",
				"large-limbed",
				"small-limbed",
				"wide-limbed",
				"narrow-limbed",
				"two-limbed",
				"four-limbed",
				"six-limbed",
				"eight-limbed",
				"large-eared",
				"small-eared",
				"wide-eared",
				"narrow-eared",
				"one-eared",
				"two-eared",
				"four-eared",
				"six-eared",
				"eight-eared",
				"hairless",
				"thick furred",
				"fluffy",
				"mangy",
				"aquatic",
				""
			]
			var adjectiveChoose = Math.floor(Math.random() * (mammalAdjectives.length));
			var adjectiveChosen = mammalAdjectives[adjectiveChoose];
			
			var mammals = [
				"deer",
				"moose",
				"antelope",
				"caribou",
				"beaver",
				"wolverine",
				"muskrat",
				"raccoon",
				"prairie dog",
				"bear",
				"squirrel",
				"bison",
				"lynx",
				"armadillo",
				"coati",
				"fox",
				"coyote",
				"opossum",
				"mammal",
				"wolf",
				"dog",
				"cat",
				"panther",
				"lion",
				"kangaroo",
				"koala",
				"tiger",
				"horse",
				"unicorn",
				"manticore",
				"sasquatch",
				"werewolf",
				
			]
			var mammalChoose = Math.floor(Math.random() * (mammals.length));
			var creatureChosen = mammals[mammalChoose];
			break;
			
			
		case 1:
			var fishAdjectives = [
				"large-eyed",
				"small-eyed",
				"wide-eyed",
				"narrow-eyed",
				"one-eyed",
				"two-eyed",
				"three-eyed",
				"four-eyed",
				"five-eyed",
				"six-eyed",
				"seven-eyed",
				"eight-eyed",
				"large-finned",
				"small-finned",
				"wide-finned",
				"narrow-finned",
				"one-finned",
				"two-finned",
				"three-finned",
				"four-finned",
				"five-finned",
				"six-finned",
				"seven-finned",
				"eight-finned",
				""
			]
			var adjectiveChoose = Math.floor(Math.random() * (fishAdjectives.length));
			var adjectiveChosen = fishAdjectives[adjectiveChoose];
			
			const fishs = [
				"shark",
				"catfish",
				"loach",
				"lamprey",
				"ray",
				"eel",
				"minnow",
				"angler",
				"cod",
				"lionfish",
				"tropical fish",
				"exotic fish",
				"sunfish",
				"fish",
				"whale",
				"bass"
			]
			var fishChoose = Math.floor(Math.random() * (fishs.length));
			var creatureChosen = fishs[fishChoose];
			break;
			
			
		case 2:
			var reptileAdjectives = [
				"large-eyed",
				"small-eyed",
				"wide-eyed",
				"narrow-eyed",
				"one-eyed",
				"two-eyed",
				"three-eyed",
				"four-eyed",
				"five-eyed",
				"six-eyed",
				"seven-eyed",
				"eight-eyed",
				"large-limbed",
				"small-limbed",
				"wide-limbed",
				"narrow-limbed",
				"two-limbed",
				"four-limbed",
				"six-limbed",
				"eight-limbed",
				"large-eared",
				"small-eared",
				"wide-eared",
				"narrow-eared",
				"one-eared",
				"two-eared",
				"four-eared",
				"six-eared",
				"eight-eared",
				""
			]
			var adjectiveChoose = Math.floor(Math.random() * (reptileAdjectives.length));
			var adjectiveChosen = reptileAdjectives[adjectiveChoose];
			
			const reptiles = [
				"crocodile",
				"lizard",
				"turtle",
				"tortoise",
				"snake",
				"cobra",
				"serpent",
				"anaconda",
				"reptile"
			]
			var reptileChoose = Math.floor(Math.random() * (reptiles.length));
			var creatureChosen = reptiles[reptileChoose];
			break;
			
			
		case 3:
			var birbAdjectives = [
				"large-eyed",
				"small-eyed",
				"wide-eyed",
				"narrow-eyed",
				"one-eyed",
				"two-eyed",
				"three-eyed",
				"four-eyed",
				"five-eyed",
				"six-eyed",
				"seven-eyed",
				"eight-eyed",
				"large-winged",
				"small-winged",
				"wide-winged",
				"narrow-winged",
				"two-winged",
				"four-winged",
				"six-winged",
				"eight-winged",
				""
			]
			var adjectiveChoose = Math.floor(Math.random() * (birbAdjectives.length));
			var adjectiveChosen = birbAdjectives[adjectiveChoose];
			
			const birbs = [
				"robin",
				"cardinal",
				"eagle",
				"finch",
				"lark",
				"bird",
				"chicken"
			]
			var birbsChoose = Math.floor(Math.random() * (birbs.length));
			var creatureChosen = birbs[birbsChoose];
			break;
			
			
		case 4:
			var amphibianAdjectives = [
				"large-eyed",
				"small-eyed",
				"wide-eyed",
				"narrow-eyed",
				"one-eyed",
				"two-eyed",
				"three-eyed",
				"four-eyed",
				"five-eyed",
				"six-eyed",
				"seven-eyed",
				"eight-eyed",
				"large-limbed",
				"small-limbed",
				"wide-limbed",
				"narrow-limbed",
				"two-limbed",
				"four-limbed",
				"six-limbed",
				"eight-limbed",
				""
			]
			var adjectiveChoose = Math.floor(Math.random() * (amphibianAdjectives.length));
			var adjectiveChosen = amphibianAdjectives[adjectiveChoose];
			
			const amphibians = [
				"frog",
				"axolotl",
				"salamander",
				"amphibian",
				"toad"
			]
			var amphibianChoose = Math.floor(Math.random() * (amphibians.length));
			var creatureChosen = amphibians[amphibianChoose];
			break;
			
			
		case 5:
			var insectAdjectives = [
				"large-eyed",
				"small-eyed",
				"wide-eyed",
				"narrow-eyed",
				"one-eyed",
				"two-eyed",
				"three-eyed",
				"four-eyed",
				"five-eyed",
				"six-eyed",
				"seven-eyed",
				"eight-eyed",
				"large-limbed",
				"small-limbed",
				"wide-limbed",
				"narrow-limbed",
				"two-limbed",
				"four-limbed",
				"six-limbed",
				"eight-limbed",
				"large-eared",
				"small-eared",
				"wide-eared",
				"narrow-eared",
				"one-eared",
				"two-eared",
				"four-eared",
				"six-eared",
				"eight-eared",
				"hairless",
				"thick furred",
				"fluffy",
				"mangy",
				"aquatic",
				""
			]
			var adjectiveChoose = Math.floor(Math.random() * (insectAdjectives.length));
			var adjectiveChosen = insectAdjectives[adjectiveChoose];
			
			var insects = [
				"bee",
				"wasp",
				"ant",
				"termite",
				"mantis",
				"moth",
				"butterfly",
				"stick bug",
				"leaf bug",
				"stink bug",
				"lady bug",
				"beetle",
				"rhino beetle",
				"spider",
				"orb weaver",
				"wolf spider",
				"tarantula",
				"fly",
				"mosquito",
				"dragon fly",
				"centipede",
				"millipede",
				"assassin bug",
				"scorpion",
				"grasshopper",
				"cater strider",
				"cockroach",
				"caterpillar",
				"tick",
				"grub",
				"flea",
				"firefly",
				"earwig",
				"silverfish",
				"treehopper",
				"twig spider",
				"thorn bug",
				"moth"
			]
			var insectChoose = Math.floor(Math.random() * (insects.length));
			var creatureChosen = insects[insectChoose];
			break;
			
			
		default:
			var whoops = [
				"oh no!",
				"whoops!"
			]
			var whoopsChoose = Math.floor(Math.random() * (whoops.length));
			var adjectiveChosen = whoops[adjectiveChoose];
			
			const whoopsStatement = [
				"Well this is embarressing, I seem to have screwed up my javascript. Please let me know so I can fix it",
				"I blotched my javascript. Please let me know so I can fix it"
			]
			var statementChoose = Math.floor(Math.random() * (whoopsStatement.length));
			var creatureChosen = statementChoose[whoopsStatement];
			
			break;
	}
	document.getElementById('describedCreature').innerHTML = "featuring" + " " + "a(n)" + " " + creatureModifyerChosen + " " + adjectiveChosen + " " + creatureChosen;
}

//------------------------------------------------------------------------------------------------------Random Setting Start Here------------------------------------------------------------------------------------------------------
function getSetting() {
	var settingAdjectives = [
		"desolate",
		"overgrown",
		"barren",
		"cracked",
		"lush",
		"hostile",
		"hospitable",
		"cardboard",
		"monochromatic",
		"technicoloured",
		"miserable"
	]
	var settingAdjectiveChoose = Math.floor(Math.random() * (settingAdjectives.length));
	var settingAdjectiveChosen = settingAdjectives[settingAdjectiveChoose];
	
	var settings = [
		"city",
		"post-apocalyptic city",
		"galaxy",
		"post-apocalyptic galaxy",
		"temperate forest",
		"pine forest",
		"jungle",
		"mesa",
		"desert",
		"swamp",
		"bog",
		"island",
		"mountains",
		"beach",
		"tundra",
		"savanna",
		"taiga",
		"mesa"
	]
	var settingChoose = Math.floor(Math.random() * (settings.length));
	var settingChosen = settings[settingChoose]
	
	document.getElementById('setting').innerHTML = "set" + " " + "in" + " " + "a(n)" + " " + settingAdjectiveChosen + " " + settingChosen;
}

//------------------------------------------------------------------------------------------------------Random Character Start Here------------------------------------------------------------------------------------------------------

function getCharacterAdjective() {
	var characterAdjectives = [
		"word1",
	]
	var randomNumber = Math.floor(Math.random() * (characterAdjectives.length));
	document.getElementById('characterAdjective').innerHTML = characterAdjectives[randomNumber];	
}

function getCharacter() {
	var characters = [
		"wordyword1",
	]
	var randomNumber = Math.floor(Math.random() * (characters.length));
	document.getElementById('character').innerHTML = characters[randomNumber];
}

function getCharacterMotive() {
	var characterMotives = [
		"VENGENCEEEEEE",
	]
	var randomNumber = Math.floor(Math.random() * (characterMotives.length));
	document.getElementById('motive').innerHTML = characterMotives[randomNumber];
}

//------------------------------------------------------------------------------------------------------Contact Overlay Start Here------------------------------------------------------------------------------------------------------

function on() {
  document.getElementById("contactOverlay").style.display = "block";
}

function off() {
  document.getElementById("contactOverlay").style.display = "none";
}

//------------------------------------------------------------------------------------------------------Welcome Message Start Here------------------------------------------------------------------------------------------------------

var isNotWelcomed = true;

function welcomeMessage() {
	if (isNotWelcomed){
		isNotWelcomed = false;
		
		var messages = [
			"Now Featuring Flying Whales",
			"Coming to a Platform Near You",
			"Now with New Ideas",
			"Shy, a Guy, and Ready to Die",
			"More Creative than Ever!",
			"Now Owns Their Own Coffee Machine",
			"Sleep is for the Weak",
			"Cooler than Double-sided Tape",
			"More Reviews Soon!",
			"Cooler than Room Temperature",
			"Sweeter than Black Coffee",
			"Taken with a Grain of Rice",
			"Now Ripping Off Minecraft"
		]
		var messageChoose = Math.floor(Math.random() * (messages.length));
		var messageChosen = messages[messageChoose];
		
		document.getElementById('welcome').innerHTML = messageChosen;
	}
	
}

//------------------------------------------------------------------------------------------------------Change Background Start Here------------------------------------------------------------------------------------------------------
window.onload = function backgroundShift() {
	var date = new Date();
	var day = date.getDay();
	var currentTime = date.getHours();
	var screenSize = window.matchMedia("(min-aspect-ratio: 16/9)");
	
	switch(day){
//----------------------------------------------------------------------------Sunday----------------------------------------------------------------------------
	case 0:
		if (7 <= currentTime && currentTime < 20) {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../backgrounds/0/day1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../backgrounds/0/day2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}

		else {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../backgrounds/0/night1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../backgrounds/0/night2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}
	break;
	
//----------------------------------------------------------------------------Monday----------------------------------------------------------------------------
	case 1:
		if (7 <= currentTime && currentTime < 20) {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../backgrounds/1/day1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../backgrounds/1/day2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}

		else {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../backgrounds/1/night1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../backgrounds/1/night2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}
	break;
	
//----------------------------------------------------------------------------Tuesday----------------------------------------------------------------------------
	case 2:
		if (7 <= currentTime && currentTime < 20) {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../backgrounds/2/day1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../backgrounds/2/day2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}

		else {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../backgrounds/2/night1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../backgrounds/2/night2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}
	break;

//----------------------------------------------------------------------------Wednesday----------------------------------------------------------------------------
	case 3:
		if (7 <= currentTime && currentTime < 20) {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../backgrounds/3/day1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../backgrounds/3/day2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}

		else {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../backgrounds/3/night1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../backgrounds/3/night2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}
	break;
	
//----------------------------------------------------------------------------Thursday----------------------------------------------------------------------------
	case 4:
		if (7 <= currentTime && currentTime < 20) {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../backgrounds/4/day1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../backgrounds/4/day2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}

		else {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../backgrounds/4/night1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../backgrounds/4/night2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}
	break;
	
//----------------------------------------------------------------------------Friday----------------------------------------------------------------------------
	case 5:
		if (7 <= currentTime && currentTime < 20) {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../backgrounds/5/day1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../backgrounds/5/day2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}

		else {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../backgrounds/5/night1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../backgrounds/5/night2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}
	break;
	
//----------------------------------------------------------------------------Saturday----------------------------------------------------------------------------
	case 6:
		if (7 <= currentTime && currentTime < 20) {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../backgrounds/6/day1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../backgrounds/6/day2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}

		else {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../backgrounds/6/night1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../backgrounds/6/night2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}
	break;
	
	default: document.getElementById('body').style.background = "url('test1.png) no-repeat fixed, url('../test1.png') no-repeat fixed"
	}
}