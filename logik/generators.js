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
				
				"Prison Architect, only with SCPs"+"<br>"+
				""
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
let StoryNotes = new Map();
function GenerateStory(){
	/*Stories To Add:
		-Plot w/ character dilema's
		-Depictions of civil strife
		-Tales of insignificance
	*/
	
	GenerateSetting(); //setting, setting adjective, region name
	GenerateCreature(); //creature name, creature adjective
	GenerateRelations(); //creature nature, peoples' relation, opening word
	GenerateCulture(); //tradition, representation, cultureGrammar

	document.getElementById('storyGenerated').innerHTML = 
	StoryNotes.get('openingWord') + " the " + StoryNotes.get('creatureNature') + " nature of the " + StoryNotes.get('creatureAdjective') + 
	" " + StoryNotes.get('creatureName') + ", the " + StoryNotes.get('settingAdjective') + " " + StoryNotes.get('setting') + 
	" people from " + StoryNotes.get('regionName') + " " + StoryNotes.get('representation') + " " + StoryNotes.get('peoplesRelation') + 
	" " + StoryNotes.get('cultureGrammar') + " their " + StoryNotes.get('tradition');
}

function GenerateSetting(){
	var settings = [
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
	StoryNotes.set('setting', settings[Math.floor(Math.random() * settings.length)]);
	StoryNotes.set('settingAdjective', settingAdjectives[Math.floor(Math.random() * settingAdjectives.length)]);
	StoryNotes.set('regionName', randString(Math.floor(Math.random() * 8) + 3));
}

function GenerateCreature(){
	//Creature data
	var creatures = [
		new Creature("raccoon", "mammal", "city"),
		new Creature("squirrel", "mammal", "city"),
		new Creature("opossum", "mammal", "city"),
		new Creature("dog", "mammal", "city"),
		new Creature("cat", "mammal", "city"),
		new Creature("ferret", "mammal", "city"),
		new Creature("moose", "mammal", "taiga"),
		new Creature("water deer", "mammal", "forest"),
		new Creature("antelope", "mammal", "savanna"),
		new Creature("caribou", "mammal", "taiga"),
		new Creature("beaver", "mammal", "forest"),
		new Creature("wolverine", "mammal", "forest"),
		new Creature("muskrat", "mammal", "forest"),
		new Creature("prairie dog", "mammal", "savanna"),
		new Creature("bear", "mammal", "forest"),
		new Creature("bison", "mammal", "savanna"),
		new Creature("lynx", "mammal", "taiga"),
		new Creature("pink fairy armadillo", "mammal", "mesa"),
		new Creature("coati", "mammal", "jungle"),
		new Creature("fox", "mammal", "forest"),
		new Creature("coyote", "mammal", "forest"),
		new Creature("margay", "mammal", "jungle"),
		new Creature("lion", "mammal", "savanna"),
		new Creature("kangaroo", "mammal", "savanna"),
		new Creature("koala", "mammal", "savanna"),
		new Creature("tiger", "mammal", "savanna"),
		new Creature("horse", "mammal", "savanna"),
		new Creature("unicorn", "mammal", "savanna"),
		new Creature("manticore", "mammal", "mountain"),
		new Creature("sasquatch", "mammal", "forest"),
		new Creature("werewolf", "mammal", "mountain"),
		new Creature("jerboa", "mammal", "mesa"),
		new Creature("echidna", "mammal", "forest"),
		new Creature("tapir", "mammal", "jungle"),
		new Creature("hippopotamus", "mammal", "bog"),
		new Creature("camel", "mammal", "mesa"),
		new Creature("star-nosed mole", "mammal", "forest"),
		new Creature("saiga antelope", "mammal", "savanna"),
		new Creature("platypus", "mammal", "forest"),
		new Creature("pangolin", "mammal", "mesa"),
		new Creature("streaked tenrec", "mammal", "forest"),
		new Creature("quoll", "mammal", "forest"),
		new Creature("wombat", "mammal", "savanna"),
		new Creature("zebra duiker", "mammal", "jungle"),
		new Creature("rhinoceros", "mammal", "savanna"),
		new Creature("capybara", "mammal", "jungle"),
		new Creature("red panda", "mammal", "forest"),
		new Creature("megasloth", "mammal", "jungle"),
		
		new Creature("shark", "phish", "island"),
		new Creature("catfish", "phish", "forest"),
		new Creature("loach", "phish", "forest"),
		new Creature("lamprey", "phish", "island"),
		new Creature("ray", "phish", "island"),
		new Creature("eel", "phish", "island"),
		new Creature("minnow", "phish", "forest"),
		new Creature("angler", "phish", "island"),
		new Creature("cod", "phish", "forest"),
		new Creature("lionfish", "phish", "island"),
		new Creature("tropical fish", "phish", "island"),
		new Creature("exotic fish", "phish", "island"),
		new Creature("sunfish", "phish", "island"),
		new Creature("fish", "phish", "city"),
		new Creature("whale", "phish", "island"),
		new Creature("bass", "phish", "forest"),
		new Creature("seahorse", "phish", "island"),
		new Creature("pufferfish", "phish", "island"),
		new Creature("betta", "phish", "jungle"),
		new Creature("gulbi", "phish", "island"),
		new Creature("discus", "phish", "island"),
		new Creature("mandarin fish", "phish", "island"),
		new Creature("anglerfish", "phish", "island"),
		new Creature("icefish", "phish", "island"),
		new Creature("sailfish", "phish", "island"),
		new Creature("swordfish", "phish", "island"),
		new Creature("whaleshark", "phish", "island"),
		new Creature("goldfish", "phish", "forest"),
		new Creature("hammerhead", "phish", "island"),
		new Creature("frilled shark", "phish", "island"),
		new Creature("saw shark", "phish", "island"),
		new Creature("perch", "phish", "forest"),
		new Creature("burbot", "phish", "taiga"),
		new Creature("sturgeon", "phish", "forest"),
		new Creature("tigerfish", "phish", "island"),
		new Creature("grayling", "phish", "taiga"),
		new Creature("alligator gar", "phish", "forest"),
		new Creature("bluegill", "phish", "forest"),
		new Creature("sheepshead wrasse", "phish", "island"),
		new Creature("carp", "phish", "forest"),
		new Creature("gourami", "phish", "jungle"),
		new Creature("trumpetfish", "phish", "island"),
		new Creature("pipefish", "phish", "island"),
		new Creature("cornetfish", "phish", "island"),
		new Creature("flounder", "phish", "island"),
		new Creature("coelacanth", "phish", "island"),
		new Creature("fringehead", "phish", "island"),
		new Creature("pelican eel", "phish", "island"),
		new Creature("helicoprion", "phish", "island"),
		new Creature("doryaspis", "phish", "island"),
		new Creature("dunkleosteus", "phish", "island"),
		
		new Creature("crocodile", "reptile", "bog"),
		new Creature("lizard", "reptile", "city"),
		new Creature("turtle", "reptile", "forest"),
		new Creature("tortoise", "reptile", "forest"),
		new Creature("snake", "reptile", "forest"),
		new Creature("cobra", "reptile", "mesa"),
		new Creature("serpent", "reptile", "island"),
		new Creature("anaconda", "reptile", "jungle"),
		new Creature("reptile", "", "reptile", "city"),
		new Creature("snake-necked turtle", "reptile", "forest"),
		new Creature("chameleon", "reptile", "jungle"),
		new Creature("gharial", "reptile", "bog"),
		new Creature("agama", "reptile", "mesa"),
		new Creature("belize lizard", "reptile", "jungle"),
		new Creature("basilisk lizard", "reptile", "jungle"),
		new Creature("frilled neck lizard", "reptile", "mesa"),
		new Creature("mata mata", "reptile", "forest"),
		new Creature("basilisk", "reptile", "mesa"),
		new Creature("mexican alligator lizard", "reptile", "jungle"),
		new Creature("gecko", "reptile", "mesa"),
		new Creature("sea turtle", "reptile", "island"),
		new Creature("blind snake", "reptile", "city"),
		new Creature("satanic leaf-tailed gecko", "reptile", "forest"),
		new Creature("burtons legless lizard", "reptile", "mesa"),
		new Creature("longisquama", "reptile", "jungle"),
		new Creature("pachycephalosaurus", "reptile", "mesa"),
		new Creature("spinosaurus", "reptile", "mesa"),
		new Creature("pelycosaur", "reptile", "mesa"),
		new Creature("stegosaurus", "reptile", "mesa"),
		new Creature("ankylosaurus", "reptile", "mesa"),
		new Creature("nigersaurus", "reptile", "mesa"),
		new Creature("hydra", "reptile", "forest"),
		new Creature("dragon", "reptile", "mountain"),
		new Creature("scylla", "reptile", "island"),
		new Creature("drake", "reptile", "mountain"),
		
		new Creature("robin", "birb", "forest"),
		new Creature("cardinal", "birb", "forest"),
		new Creature("eagle", "birb", "mountain"),
		new Creature("finch", "birb", "forest"),
		new Creature("bird", "birb", "city"),
		new Creature("chicken", "birb", "jungle"),
		new Creature("haring ibon", "birb", "island"),
		new Creature("hoatzin", "birb", "jungle"),
		new Creature("greater sage-grouse", "birb", "savanna"),
		new Creature("kakapo", "birb", "jungle"),
		new Creature("magnificent frigatebird", "birb", "island"),
		new Creature("long-wattled umbrellabird", "birb", "jungle"),
		new Creature("shoebill", "birb", "bog"),
		new Creature("king of saxony bird-of-paradise", "birb", "jungle"),
		new Creature("rhinoceros hornbill", "birb", "jungle"),
		new Creature("tawny frogmouth", "birb", "forest"),
		new Creature("great curassow", "birb", "jungle"),
		new Creature("great potoo", "birb", "jungle"),
		new Creature("inca tern", "birb", "island"),
		new Creature("kiwi", "birb", "island"),
		new Creature("guacharo", "birb", "jungle"),
		new Creature("king vulture", "birb", "jungle"),
		new Creature("royal flycatcher", "birb", "jungle"),
		new Creature("raggiana bird of paradise", "birb", "jungle"),
		new Creature("silkie chicken", "birb", "jungle"),
		new Creature("andean cock-of-the-rock", "birb", "jungle"),
		new Creature("goose", "birb", "city"),
		new Creature("hummingbird", "birb", "forest"),
		new Creature("penguin", "birb", "taiga"),
		new Creature("cassowary", "birb", "savanna"),
		new Creature("duck", "birb", "forest"),
		new Creature("toucan", "birb", "jungle"),
		new Creature("parrot", "birb", "jungle"),
		new Creature("love bird", "birb", "jungle"),
		new Creature("cedar waxwing", "birb", "forest"),
		new Creature("tree swallow", "birb", "forest"),
		new Creature("woodpecker", "birb", "forest"),
		new Creature("warbler", "birb", "forest"),
		new Creature("hoopoe", "birb", "savanna"),
		new Creature("waxwing", "birb", "forest"),
		new Creature("swallow", "birb", "forest"),
		new Creature("pardalote", "birb", "forest"),
		new Creature("kingfisher", "birb", "forest"),
		new Creature("terrorbird", "birb", "savanna"),
		new Creature("kookaburra", "birb", "forest"),
		new Creature("swan", "birb", "city"),
		new Creature("quail", "birb", "forest"),
		
		new Creature("frog", "amphibian", "forest"),
		new Creature("axolotl", "amphibian", "jungle"),
		new Creature("salamander", "amphibian", "forest"),
		new Creature("amphibian", "", "amphibian", "forest"),
		new Creature("toad", "amphibian", "city"),
		new Creature("clown frog", "amphibian", "jungle"),
		new Creature("poison dart frog", "amphibian", "jungle"),
		new Creature("caecilian", "amphibian", "jungle"),
		new Creature("diplocaulus", "amphibian", "bog"),
		new Creature("beelzebufo", "amphibian", "bog"),
		new Creature("cyclotosaurus", "amphibian", "bog"),
		new Creature("eocaecilia", "amphibian", "bog"),
		new Creature("eogyrinus", "amphibian", "bog"),
		new Creature("megalocephalus", "amphibian", "bog"),
		new Creature("microbrachis", "amphibian", "bog"),
		new Creature("ophiderpeton", "amphibian", "bog"),
		new Creature("phlegethontia", "amphibian", "bog"),
		new Creature("platyhystrix", "amphibian", "bog"),
		new Creature("prionosuchus", "amphibian", "bog"),
		new Creature("proterogyrinus", "amphibian", "bog"),
		new Creature("westlothiana", "amphibian", "bog"),
		new Creature("horned frog", "amphibian", "forest"),
		new Creature("mossy frog", "amphibian", "forest"),
		new Creature("rain frog", "amphibian", "mesa"),
		new Creature("newt", "amphibian", "forest"),
		new Creature("crested newt", "amphibian", "forest"),
		new Creature("marbled newt", "amphibian", "forest"),
		new Creature("klingon newt", "amphibian", "forest"),
		new Creature("cave salamander", "amphibian", "mountain"),
		new Creature("olm", "amphibian", "mountain"),
		
		new Creature("bumble bee", "insect", "forest"),
		new Creature("dirt dauber", "insect", "forest"),
		new Creature("turtle ant", "insect", "jungle"),
		new Creature("termite", "insect", "city"),
		new Creature("orchid mantis", "insect", "forest"),
		new Creature("gangis moth", "insect", "mesa"),
		new Creature("butterfly", "insect", "forest"),
		new Creature("stick bug", "insect", "forest"),
		new Creature("leaf bug", "insect", "forest"),
		new Creature("stink bug", "insect", "forest"),
		new Creature("lady bug", "insect", "forest"),
		new Creature("giraffe weevil", "insect", "jungle"),
		new Creature("rhino beetle", "insect", "forest"),
		new Creature("whip spider", "insect", "mesa"),
		new Creature("poltys", "insect", "jungle"),
		new Creature("wolf spider", "insect", "city"),
		new Creature("tarantula", "insect", "mesa"),
		new Creature("robber fly", "insect", "forest"),
		new Creature("mosquito", "insect", "forest"),
		new Creature("dragon fly", "insect", "forest"),
		new Creature("centipede", "insect", "forest"),
		new Creature("millipede", "insect", "forest"),
		new Creature("assassin bug", "insect", "forest"),
		new Creature("scorpion", "insect", "mesa"),
		new Creature("grasshopper", "insect", "city"),
		new Creature("water strider", "insect", "forest"),
		new Creature("cockroach", "insect", "jungle"),
		new Creature("monkey slug", "insect", "forest"),
		new Creature("tick", "insect", "forest"),
		new Creature("grub", "insect", "forest"),
		new Creature("flea", "insect", "city"),
		new Creature("firefly", "insect", "forest"),
		new Creature("earwig", "insect", "forest"),
		new Creature("silverfish", "insect", "forest"),
		new Creature("treehopper", "insect", "forest"),
		new Creature("thorn bug", "insect", "jungle"),
		new Creature("plume moth", "insect", "forest"),
		new Creature("spicebush swallowtail", "insect", "forest"),
		new Creature("brazilian treehopper", "insect", "jungle"),
		new Creature("ant mimic spider", "insect", "forest"),
		new Creature("clistopyga crassicaudata", "insect", "jungle"),
		new Creature("leafcutter ant", "insect", "jungle"),
		new Creature("stalk-eyed fly", "insect", "jungle"),
		new Creature("trilobite beetle", "insect", "jungle"),
		new Creature("brahmin-moth caterpillar", "insect", "forest"),
		new Creature("inchworm", "insect", "forest"),
		new Creature("giant shield bug", "insect", "jungle"),
		new Creature("camel spider", "insect", "mesa"),
		new Creature("water beetle", "insect", "forest"),
		new Creature("sabellidae", "insect", "island")
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
	constructor(name, type, setting){
		this.name = name;
		this.type = type;
		this.setting = setting;
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