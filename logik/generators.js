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
				"then when planning to invade they build counter-units and units that stack decently against yours",
				
				"Prison Architect, only with SCPs",
				
				"An ASMR-type puzzle experience entirely about organizing messy blocks of code"
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

//------------------------------------------------------------------------------------------------------Random Story Start Here------------------------------------------------------------------------------------------------------
/*Stories To Add:
	-Plot w/ character dilema's
	-Depictions of civil strife
	-Tales of insignificance
*/
/*Templates to add
	-Following the events of {catastrophy name}, the survivors must now find ways to cope in the {setting adjective} {setting} {region name}.
		+if(creatures == 0)
		+if(creatures == 1) With enemies like the {creatureNature} {creatureAdjective} {creatureName} few have hope.
		+if(creatures == 2) With enemies like the {creatureNature} {creatureAdjective} {creatureName} and {creatureNature} {creatureAdjective} {creatureName} few have hope.
	-
*/
let StoryNotes = new Map();
function GenerateStory(){//Consider making template selection pull from array of classes storying functions to use
	GenerateSetting(); //setting, settingAdjective, regionName
	GenerateCatastrophe(); //catastophe, catastopheAdjective, catastopheCause
	GenerateCreature(); //creatureName, creatureAdjective
	GenerateRelations(); //creatureNature, peoplesRelation, openingWord
	GenerateCulture(); //tradition, representation, cultureGrammar

	var storyChosen = Math.floor(Math.random() * 2); //Multiply by number of story types
	
	if(storyChosen == 0){
		//if adjective isn't needed set adjective to a space. If adjective is needed, put a space at end of word.
		if(StoryNotes.get('creatureIsDetailed') == true) StoryNotes.set('creatureAdjective', " ");
		else StoryNotes.set('creatureAdjective', `${StoryNotes.get('creatureAdjective')} `);
		
		document.getElementById('storyGenerated').innerHTML =
		`${StoryNotes.get('openingWord')} the ${StoryNotes.get('creatureNature')} nature of the 
		${StoryNotes.get('creatureAdjective')}${StoryNotes.get('creatureName')}, 
		people from the ${StoryNotes.get('settingAdjective')} ${StoryNotes.get('setting')} ${StoryNotes.get('regionName')} 
		${StoryNotes.get('representation')} ${StoryNotes.get('peoplesRelation')} ${StoryNotes.get('cultureGrammar')} their ${StoryNotes.get('tradition')}`;
	}
	else if(storyChosen == 1){
		//if adjective isn't needed set adjective to a space. If adjective is needed, put a space at end of word.
		if(StoryNotes.get('catastopheIsDetailed') == true) StoryNotes.set('catastopheAdjective', " ");
		else StoryNotes.set('catastopheAdjective', `${StoryNotes.get('catastopheAdjective')} `);
		
		document.getElementById('storyGenerated').innerHTML =
		`Following the events of ${StoryNotes.get('catastophe')}, the survivors must now find ways to cope in the ${StoryNotes.get('settingAdjective')} ${StoryNotes.get('setting')} ${StoryNotes.get('regionName')}.${StoryNotes.get('isCreatures')}`;
	}
	else{
		console.log("STORY_CHOSEN_OVERFLOW");
	}
}

function GenerateSetting(){
	var settings = [ //264 total
		"city", //18
		"forest", //88
		"jungle", //47
		"mesa", //22
		"bog", //17
		"island", //43
		"mountain", //7
		"savanna", //16
		"taiga" //6
	]
	
	var settingAdjectives = [
		"post-apocalyptic",
		"desolate",
		"overgrown",
		"barren",
		"cracked",
		"lush",
		"hostile",
		"hospitable",
		"cardboard",
		"monochromatic",
		"technicoloured"
	]
	
	//Set setting data
	var random = Math.random(); //This is not scaleable at ALL! FIX!!
		if(random <= 18 / 264) StoryNotes.set('setting', "city");
		else if(random <= 106 / 264) StoryNotes.set('setting', "forest");
		else if(random <= 153 / 264) StoryNotes.set('setting', "jungle");
		else if(random <= 175 / 264) StoryNotes.set('setting', "mesa");
		else if(random <= 192 / 264) StoryNotes.set('setting', "bog");
		else if(random <= 235 / 264) StoryNotes.set('setting', "island");
		else if(random <= 242 / 264) StoryNotes.set('setting', "mountain");
		else if(random <= 258 / 264) StoryNotes.set('setting', "savanna");
		else StoryNotes.set('setting', "taiga");
	StoryNotes.set('settingAdjective', settingAdjectives[Math.floor(Math.random() * settingAdjectives.length)]);
	StoryNotes.set('regionName', randString(Math.floor(Math.random() * 8) + 3));
}

function GenerateCatastrophe(){
	var catastophe = [
		
	]
	
	var catastopheAdjective = [
		
	]
	
	var catastopheCause = [
		
	]
	
	
}

function GenerateCreature(){
	//Creature data
	var creatures = [
		new Creature("raccoon", "mammal", "city", false),
		new Creature("squirrel", "mammal", "city", false),
		new Creature("opossum", "mammal", "city", false),
		new Creature("dog", "mammal", "city", false),
		new Creature("cat", "mammal", "city", false),
		new Creature("ferret", "mammal", "city", false),
		new Creature("moose", "mammal", "taiga", false),
		new Creature("water deer", "mammal", "forest", true),
		new Creature("antelope", "mammal", "savanna", false),
		new Creature("caribou", "mammal", "taiga", false),
		new Creature("beaver", "mammal", "forest", false),
		new Creature("wolverine", "mammal", "forest", false),
		new Creature("muskrat", "mammal", "forest", false),
		new Creature("prairie dog", "mammal", "savanna", true),
		new Creature("bear", "mammal", "forest", false),
		new Creature("bison", "mammal", "savanna", false),
		new Creature("lynx", "mammal", "taiga", false),
		new Creature("pink fairy armadillo", "mammal", "mesa", true),
		new Creature("coati", "mammal", "jungle", false),
		new Creature("fox", "mammal", "forest", false),
		new Creature("coyote", "mammal", "forest", false),
		new Creature("margay", "mammal", "jungle", false),
		new Creature("lion", "mammal", "savanna", false),
		new Creature("kangaroo", "mammal", "savanna", false),
		new Creature("koala", "mammal", "savanna", false),
		new Creature("tiger", "mammal", "savanna", false),
		new Creature("horse", "mammal", "savanna", false),
		new Creature("unicorn", "mammal", "savanna", false),
		new Creature("manticore", "mammal", "mountain", false),
		new Creature("sasquatch", "mammal", "forest", false),
		new Creature("werewolf", "mammal", "mountain", false),
		new Creature("jerboa", "mammal", "mesa", false),
		new Creature("echidna", "mammal", "forest", false),
		new Creature("tapir", "mammal", "jungle", false),
		new Creature("hippopotamus", "mammal", "bog", false),
		new Creature("camel", "mammal", "mesa", false),
		new Creature("star-nosed mole", "mammal", "forest", true),
		new Creature("saiga antelope", "mammal", "savanna", true),
		new Creature("platypus", "mammal", "forest", false),
		new Creature("pangolin", "mammal", "mesa", false),
		new Creature("streaked tenrec", "mammal", "forest", true),
		new Creature("quoll", "mammal", "forest", false),
		new Creature("wombat", "mammal", "savanna", false),
		new Creature("zebra duiker", "mammal", "jungle", true),
		new Creature("rhinoceros", "mammal", "savanna", false),
		new Creature("capybara", "mammal", "jungle", false),
		new Creature("red panda", "mammal", "forest", true),
		new Creature("megasloth", "mammal", "jungle", false),
		
		new Creature("shark", "phish", "island", false),
		new Creature("catfish", "phish", "forest", false),
		new Creature("loach", "phish", "forest", false),
		new Creature("lamprey", "phish", "island", false),
		new Creature("ray", "phish", "island", false),
		new Creature("eel", "phish", "island", false),
		new Creature("minnow", "phish", "forest", false),
		new Creature("angler", "phish", "island", false),
		new Creature("cod", "phish", "forest", false),
		new Creature("lionfish", "phish", "island", false),
		new Creature("tropical fish", "phish", "island", true),
		new Creature("exotic fish", "phish", "island", true),
		new Creature("sunfish", "phish", "island", false),
		new Creature("fish", "phish", "city", false),
		new Creature("whale", "phish", "island", false),
		new Creature("bass", "phish", "forest", false),
		new Creature("seahorse", "phish", "island", false),
		new Creature("pufferfish", "phish", "island", false),
		new Creature("betta", "phish", "jungle", false),
		new Creature("gulbi", "phish", "island", false),
		new Creature("discus", "phish", "island", false),
		new Creature("mandarin fish", "phish", "island", true),
		new Creature("anglerfish", "phish", "island", false),
		new Creature("icefish", "phish", "island", false),
		new Creature("sailfish", "phish", "island", false),
		new Creature("swordfish", "phish", "island", false),
		new Creature("whaleshark", "phish", "island", false),
		new Creature("goldfish", "phish", "forest", false),
		new Creature("hammerhead", "phish", "island", false),
		new Creature("frilled shark", "phish", "island", true),
		new Creature("saw shark", "phish", "island", true),
		new Creature("perch", "phish", "forest", false),
		new Creature("burbot", "phish", "taiga", false),
		new Creature("sturgeon", "phish", "forest", false),
		new Creature("tigerfish", "phish", "island", false),
		new Creature("grayling", "phish", "taiga", false),
		new Creature("alligator gar", "phish", "forest", true),
		new Creature("bluegill", "phish", "forest", false),
		new Creature("sheepshead wrasse", "phish", "island", true),
		new Creature("carp", "phish", "forest", false),
		new Creature("gourami", "phish", "jungle", false),
		new Creature("trumpetfish", "phish", "island", false),
		new Creature("pipefish", "phish", "island", false),
		new Creature("cornetfish", "phish", "island", false),
		new Creature("flounder", "phish", "island", false),
		new Creature("coelacanth", "phish", "island", false),
		new Creature("fringehead", "phish", "island", false),
		new Creature("pelican eel", "phish", "island", false),
		new Creature("helicoprion", "phish", "island", false),
		new Creature("doryaspis", "phish", "island", false),
		new Creature("dunkleosteus", "phish", "island", false),
		
		new Creature("crocodile", "reptile", "bog", false),
		new Creature("lizard", "reptile", "city", false),
		new Creature("turtle", "reptile", "forest", false),
		new Creature("tortoise", "reptile", "forest", false),
		new Creature("snake", "reptile", "forest", false),
		new Creature("cobra", "reptile", "mesa", false),
		new Creature("serpent", "reptile", "island", false),
		new Creature("anaconda", "reptile", "jungle", false),
		new Creature("reptile", "", "reptile", "city", false),
		new Creature("snake-necked turtle", "reptile", "forest", true),
		new Creature("chameleon", "reptile", "jungle", false),
		new Creature("gharial", "reptile", "bog", false),
		new Creature("agama", "reptile", "mesa", false),
		new Creature("belize lizard", "reptile", "jungle", true),
		new Creature("basilisk lizard", "reptile", "jungle", true),
		new Creature("frilled neck lizard", "reptile", "mesa", true),
		new Creature("mata mata", "reptile", "forest", true),
		new Creature("basilisk", "reptile", "mesa", false),
		new Creature("mexican alligator lizard", "reptile", "jungle", true),
		new Creature("gecko", "reptile", "mesa", false),
		new Creature("sea turtle", "reptile", "island", true),
		new Creature("blind snake", "reptile", "city", true),
		new Creature("satanic leaf-tailed gecko", "reptile", "forest", true),
		new Creature("burtons legless lizard", "reptile", "mesa", true),
		new Creature("longisquama", "reptile", "jungle", false),
		new Creature("pachycephalosaurus", "reptile", "mesa", false),
		new Creature("spinosaurus", "reptile", "mesa", false),
		new Creature("pelycosaur", "reptile", "mesa", false),
		new Creature("stegosaurus", "reptile", "mesa", false),
		new Creature("ankylosaurus", "reptile", "mesa", false),
		new Creature("nigersaurus", "reptile", "mesa", false),
		new Creature("hydra", "reptile", "forest", false),
		new Creature("dragon", "reptile", "mountain", false),
		new Creature("scylla", "reptile", "island", false),
		new Creature("drake", "reptile", "mountain", false),
		
		new Creature("robin", "birb", "forest", false),
		new Creature("cardinal", "birb", "forest", false),
		new Creature("eagle", "birb", "mountain", false),
		new Creature("finch", "birb", "forest", false),
		new Creature("bird", "birb", "city", false),
		new Creature("chicken", "birb", "jungle", false),
		new Creature("haring ibon", "birb", "island", true),
		new Creature("hoatzin", "birb", "jungle", false),
		new Creature("greater sage-grouse", "birb", "savanna", true),
		new Creature("kakapo", "birb", "jungle", false),
		new Creature("magnificent frigatebird", "birb", "island", true),
		new Creature("long-wattled umbrellabird", "birb", "jungle", true),
		new Creature("shoebill", "birb", "bog", false),
		new Creature("king of saxony bird-of-paradise", "birb", "jungle", true),
		new Creature("rhinoceros hornbill", "birb", "jungle", true),
		new Creature("tawny frogmouth", "birb", "forest", true),
		new Creature("great curassow", "birb", "jungle", true),
		new Creature("great potoo", "birb", "jungle", true),
		new Creature("inca tern", "birb", "island", true),
		new Creature("kiwi", "birb", "island", false),
		new Creature("guacharo", "birb", "jungle", false),
		new Creature("king vulture", "birb", "jungle", true),
		new Creature("royal flycatcher", "birb", "jungle", true),
		new Creature("raggiana bird of paradise", "birb", "jungle", true),
		new Creature("silkie chicken", "birb", "jungle", true),
		new Creature("andean cock-of-the-rock", "birb", "jungle", true),
		new Creature("goose", "birb", "city", false),
		new Creature("hummingbird", "birb", "forest", false),
		new Creature("penguin", "birb", "taiga", false),
		new Creature("cassowary", "birb", "savanna", false),
		new Creature("duck", "birb", "forest", false),
		new Creature("toucan", "birb", "jungle", false),
		new Creature("parrot", "birb", "jungle", false),
		new Creature("love bird", "birb", "jungle", true),
		new Creature("cedar waxwing", "birb", "forest", true),
		new Creature("tree swallow", "birb", "forest", true),
		new Creature("woodpecker", "birb", "forest", true),
		new Creature("warbler", "birb", "forest", false),
		new Creature("hoopoe", "birb", "savanna", false),
		new Creature("waxwing", "birb", "forest", false),
		new Creature("swallow", "birb", "forest", false),
		new Creature("pardalote", "birb", "forest", false),
		new Creature("kingfisher", "birb", "forest", false),
		new Creature("terrorbird", "birb", "savanna", false),
		new Creature("kookaburra", "birb", "forest", false),
		new Creature("swan", "birb", "city", false),
		new Creature("quail", "birb", "forest", false),
		
		new Creature("frog", "amphibian", "forest", false),
		new Creature("axolotl", "amphibian", "jungle", false),
		new Creature("salamander", "amphibian", "forest", false),
		new Creature("amphibian", "", "amphibian", "forest", false),
		new Creature("toad", "amphibian", "city", false),
		new Creature("clown frog", "amphibian", "jungle", true),
		new Creature("poison dart frog", "amphibian", "jungle", true),
		new Creature("caecilian", "amphibian", "jungle", false),
		new Creature("diplocaulus", "amphibian", "bog", false),
		new Creature("beelzebufo", "amphibian", "bog", false),
		new Creature("cyclotosaurus", "amphibian", "bog", false),
		new Creature("eocaecilia", "amphibian", "bog", false),
		new Creature("eogyrinus", "amphibian", "bog", false),
		new Creature("megalocephalus", "amphibian", "bog", false),
		new Creature("microbrachis", "amphibian", "bog", false),
		new Creature("ophiderpeton", "amphibian", "bog", false),
		new Creature("phlegethontia", "amphibian", "bog", false),
		new Creature("platyhystrix", "amphibian", "bog", false),
		new Creature("prionosuchus", "amphibian", "bog", false),
		new Creature("proterogyrinus", "amphibian", "bog", false),
		new Creature("westlothiana", "amphibian", "bog", false),
		new Creature("horned frog", "amphibian", "forest", true),
		new Creature("mossy frog", "amphibian", "forest", true),
		new Creature("rain frog", "amphibian", "mesa", true),
		new Creature("newt", "amphibian", "forest", false),
		new Creature("crested newt", "amphibian", "forest", true),
		new Creature("marbled newt", "amphibian", "forest", true),
		new Creature("klingon newt", "amphibian", "forest", true),
		new Creature("cave salamander", "amphibian", "mountain", true),
		new Creature("olm", "amphibian", "mountain", false),
		
		new Creature("bumble bee", "insect", "forest", true),
		new Creature("dirt dauber", "insect", "forest", true),
		new Creature("turtle ant", "insect", "jungle", true),
		new Creature("termite", "insect", "city", false),
		new Creature("orchid mantis", "insect", "forest", true),
		new Creature("gangis moth", "insect", "mesa", true),
		new Creature("butterfly", "insect", "forest", false),
		new Creature("stick bug", "insect", "forest", true),
		new Creature("leaf bug", "insect", "forest", true),
		new Creature("stink bug", "insect", "forest", true),
		new Creature("lady bug", "insect", "forest", true),
		new Creature("giraffe weevil", "insect", "jungle", true),
		new Creature("rhino beetle", "insect", "forest", true),
		new Creature("whip spider", "insect", "mesa", true),
		new Creature("poltys", "insect", "jungle", false),
		new Creature("wolf spider", "insect", "city", true),
		new Creature("tarantula", "insect", "mesa", false),
		new Creature("robber fly", "insect", "forest", true),
		new Creature("mosquito", "insect", "forest", false),
		new Creature("dragon fly", "insect", "forest", true),
		new Creature("centipede", "insect", "forest", false),
		new Creature("millipede", "insect", "forest", false),
		new Creature("assassin bug", "insect", "forest", true),
		new Creature("scorpion", "insect", "mesa", false),
		new Creature("grasshopper", "insect", "city", false),
		new Creature("water strider", "insect", "forest", true),
		new Creature("cockroach", "insect", "jungle", false),
		new Creature("monkey slug", "insect", "forest", true),
		new Creature("tick", "insect", "forest", false),
		new Creature("grub", "insect", "forest", false),
		new Creature("flea", "insect", "city", false),
		new Creature("firefly", "insect", "forest", false),
		new Creature("earwig", "insect", "forest", false),
		new Creature("silverfish", "insect", "forest", false),
		new Creature("treehopper", "insect", "forest", false),
		new Creature("thorn bug", "insect", "jungle", true),
		new Creature("plume moth", "insect", "forest", true),
		new Creature("spicebush swallowtail", "insect", "forest", true),
		new Creature("brazilian treehopper", "insect", "jungle", true),
		new Creature("ant mimic spider", "insect", "forest", true),
		new Creature("clistopyga crassicaudata", "insect", "jungle", true),
		new Creature("leafcutter ant", "insect", "jungle", true),
		new Creature("stalk-eyed fly", "insect", "jungle", true),
		new Creature("trilobite beetle", "insect", "jungle", true),
		new Creature("brahmin-moth caterpillar", "insect", "forest", true),
		new Creature("inchworm", "insect", "forest", false),
		new Creature("giant shield bug", "insect", "jungle", true),
		new Creature("camel spider", "insect", "mesa", true),
		new Creature("water beetle", "insect", "forest", true),
		new Creature("sabellidae", "insect", "island", false)
	];
	
	var validCreatures = [];
	creatures.forEach(creature => {
		if(creature.setting == StoryNotes.get('setting')){
			validCreatures.push(creature);
		}
	});
	
	//Creature adjectives
	let adjectives = new Map();
	mammalAdjectives = [
		"large-eyed",
		"small-eyed",
		"one-eyed",
		"three-eyed",
		"four-eyed",
		"six-eyed",
		"long-limbed",
		"stubby-limbed",
		"two-limbed",
		"six-limbed",
		"eight-limbed",
		"fluffy",
		"mangy",
		"aquatic",
		"hairless",
		"thick-furred",
		"large-eared",
		"small-eared",
		"four-eared"
	]
	adjectives.set('mammal', mammalAdjectives[Math.floor(Math.random() * mammalAdjectives.length)]);
	phishAdjectives = [
		"large-eyed",
		"small-eyed",
		"one-eyed",
		"three-eyed",
		"four-eyed",
		"six-eyed",
		"long-finned",
		"stubby-finned",
		"two-finned",
		"six-finned",
		"eight-finned"
	]
	adjectives.set('phish', phishAdjectives[Math.floor(Math.random() * phishAdjectives.length)]);
	reptileAdjectives = [
		"large-eyed",
		"small-eyed",
		"one-eyed",
		"three-eyed",
		"four-eyed",
		"six-eyed",
		"long-limbed",
		"stubby-limbed",
		"two-limbed",
		"six-limbed",
		"eight-limbed"
	]
	adjectives.set('reptile', reptileAdjectives[Math.floor(Math.random() * reptileAdjectives.length)]);
	birbAdjectives = [
		"large-eyed",
		"small-eyed",
		"one-eyed",
		"three-eyed",
		"four-eyed",
		"six-eyed",
		"long-winged",
		"stubby-winged",
		"four-winged",
		"six-winged"
	]
	adjectives.set('birb', birbAdjectives[Math.floor(Math.random() * birbAdjectives.length)]);
	amphibianAdjectives = [
		"large-eyed",
		"small-eyed",
		"one-eyed",
		"three-eyed",
		"four-eyed",
		"six-eyed",
		"long-limbed",
		"stubby-limbed",
		"two-limbed",
		"six-limbed"
	]
	adjectives.set('amphibian', amphibianAdjectives[Math.floor(Math.random() * amphibianAdjectives.length)]);
	insectAdjectives = [
		"large-eyed",
		"small-eyed",
		"one-eyed",
		"three-eyed",
		"four-eyed",
		"six-eyed",
		"long-limbed",
		"stubby-limbed",
		"two-limbed",
		"four-limbed",
		"ten-limbed",
		"fluffy",
		"spiney",
		"squishy"
	]
	adjectives.set('insect', insectAdjectives[Math.floor(Math.random() * insectAdjectives.length)]);
	
	//Set creature data
	StoryNotes.set('creature', validCreatures[Math.floor(Math.random() * validCreatures.length)]);
	StoryNotes.set('creatureName', StoryNotes.get('creature').name);
	StoryNotes.set('creatureType', StoryNotes.get('creature').type);
	StoryNotes.set('creatureAdjective', adjectives.get(StoryNotes.get('creatureType')));
	StoryNotes.set('creatureIsDetailed', StoryNotes.get('creature').isDetailed);
	var rand = Math.random();
	if(rand < 0.33) StoryNotes.set('isCreatures', ` With enemies like the ${StoryNotes.get('creatureName')} few have hope.`);
	else if(rand < 0.66) StoryNotes.set('isCreatures', ` With enemies like the ${StoryNotes.get('creatureName')} and ${StoryNotes.get('creatureName')} few have hope.`); //Prints out same creature twice
	else StoryNotes.set('isCreatures', "");
}

function GenerateRelations(){
	var natureRelations = [
		new NatureRelation("aggressive", ["warning"], ["Citing", "Due to", "Because of", "In response to"]),
		new NatureRelation("friendly", ["thanks"], ["Because of"]),
		new NatureRelation("territorial", ["warning"], ["Citing", "Due to", "Because of", "In response to"]),
		new NatureRelation("shy", ["mystery"], ["Citing", "Because of"]),
		new NatureRelation("elusive", ["mystery"], ["Citing", "Because of"])
	]
	
	StoryNotes.set('natureRelation', natureRelations[Math.floor(Math.random() * natureRelations.length)]);
	StoryNotes.set('creatureNature', StoryNotes.get('natureRelation').nature);
	StoryNotes.set('peoplesRelation', StoryNotes.get('natureRelation').relation[Math.floor(Math.random() * StoryNotes.get('natureRelation').relation.length)]);
	StoryNotes.set('openingWord', StoryNotes.get('natureRelation').presentation[Math.floor(Math.random() * StoryNotes.get('natureRelation').presentation.length)]);
}

function GenerateCulture(){
	var cultures = [
		new Culture("pottery", ["engrave", "paint"], "on"),
		new Culture("poems", [], "in"),
		new Culture("chants", [], "in"),
		new Culture("rhymes", [], "in"),
		new Culture("songs", [], "in"),
		new Culture("baskets", ["paint", "weave"], "on"),
		new Culture("blankets", ["weave"], "on"),
		new Culture("headwear", ["engrave", "paint", "weave"], "on"),
		new Culture("shields", ["engrave", "paint", "weave"], "on"),
		new Culture("weapons", ["engrave", "paint"], "on"),
		new Culture("scrolls", [], "in"),
		new Culture("burials", [], "in"),
		new Culture("architecture", ["engrave", "paint"], "on"),
		new Culture("folklore", [], "in"),
		new Culture("dances", [], "in")
	]
	
	if(StoryNotes.get('creatureNature').match("aggressive")){
		cultures.forEach(creature => creature.representation.push("forewarn"));
	}
	else{
		cultures.forEach(creature => creature.representation.push("foretell"));
	}
	
	//Set culture data
	StoryNotes.set('culture', cultures[Math.floor(Math.random() * cultures.length)]);
	StoryNotes.set('tradition', StoryNotes.get('culture').tradition);
	StoryNotes.set('representation', StoryNotes.get('culture').representation[Math.floor(Math.random() * StoryNotes.get('culture').representation.length)]);
	StoryNotes.set('cultureGrammar', StoryNotes.get('culture').grammar);
}

function randString(length){
    var name = "";
	
    while(length > name.length && length > 0){
        var rand = Math.random();
        //name += String.fromCharCode(Math.floor(rand * 26) + (rand > 0.5 ? 97 : 65));
        name += String.fromCharCode(Math.floor(rand * 26) + (rand > 0.5 ? 97 : 65));
    }
	
    return name;
}

class Creature{
	constructor(name, type, setting, isDetailed){
		this.name = name;
		this.type = type;
		this.setting = setting;
		this.isDetailed = isDetailed;
	}
}

class Culture{
	constructor(tradition, representation = [], grammar){
		this.tradition = tradition;
		this.representation = representation;
		this.grammar = grammar;
	}
}

class NatureRelation{
	constructor(nature, relation = [], presentation = []){
		this.nature = nature;
		this.relation = relation;
		this.presentation = presentation;
	}
}