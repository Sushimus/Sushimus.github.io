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

//------------------------------------------------------------------------------------------------------Random Creature Start Here------------------------------------------------------------------------------------------------------
//Sea bunnies are kool, add them.
function getCreature() {
	//mood, body, etc.
	var behaviorModifyers = [
		"small",
		"miniscule",
		"tiny",
		"dwarf",
		"large",
		"massive",
		"gigantic",
		"huge",
		"agressive",
/*10*/	"defensive",
		"agile",
		"tanky",
		"meaty",
		"spiritual",
		"poisonous",
		"hungry",
		"chubby",
		"",
		"",
/*20*/	""
	]
	var behaviorModifyerChoose = Math.floor(Math.random() * (behaviorModifyers.length));
	var behaviorModifyerChosen = behaviorModifyers[behaviorModifyerChoose];
	
	//colour, aesthetics, etc.
	var appearanceModifyers = [
		"blue",
		"mystic",
		"albino",
		"red",
		"orange",
		"yellow",
    	"green",
		"indigo",
		"violet",
/*10*/	"black",
		"white",
		"monochromatic",
		"technicoloured",
		"edible",
    	"toxic",
		"foul smelling",
		"exotic",
		"hypnotic",
		"leucistic",
/*20*/	"starving"
	]
	var appearanceModifyerChoose = Math.floor(Math.random() * (appearanceModifyers.length));
	var appearanceModifyerChosen = appearanceModifyers[appearanceModifyerChoose];
	
	//what it's made of
	var materialModifyers = [
		"crystalline",
		"clay",
		"wooden",
		"cardboard",
		"glass",
		"metallic",
		"ceramic",
		"plastic",
		"cloth",
/*10*/	"yarn",
		"electronic",
		"wax",
		"paper",
		"glass",
		"rubber",
		"",
		"",
		"",
		"",
/*20*/	""
	]
	var materialModifyerChoose = Math.floor(Math.random() * (materialModifyers.length));
	var materialModifyerChosen = materialModifyers[materialModifyerChoose];
	
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
			var mammalBodyAdjectives = [
				"large-eyed",
				"small-eyed",
				"one-eyed",
				"three-eyed",
				"four-eyed",
				"six-eyed",
				"long-limbed",
				"stubby-limbed",
				"two-limbed",
		/*10*/	"six-limbed",
				"eight-limbed",
				"large-eared",
				"small-eared",
				"four-eared",
				""
			]
			var bodyAdjectiveChoose = Math.floor(Math.random() * (mammalBodyAdjectives.length));
			var bodyAdjectiveChosen = mammalBodyAdjectives[bodyAdjectiveChoose];
			
			var mammalMiscAdjectives = [
				"thick-furred",
				"fluffy",
				"mangy",
				"aquatic",
		/*20*/	"hairless",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
		/*30*/  ""
			]
			var miscAdjectiveChoose = Math.floor(Math.random() * (mammalMiscAdjectives.length));
			var miscAdjectiveChosen = mammalMiscAdjectives[miscAdjectiveChoose];
			
			var mammals = [
				"water deer",
				"moose",
				"antelope",
				"caribou",
				"beaver",
				"wolverine",
				"muskrat",
				"raccoon",
				"prairie dog",
		/*10*/	"bear",
				"squirrel",
				"bison",
				"lynx",
				"pink fairy armadillo",
				"coati",
				"fox",
				"coyote",
				"opossum",
				"mammal",
		/*20*/	"wolf",
				"dog",
				"cat",
				"margay",
				"lion",
				"kangaroo",
				"koala",
				"tiger",
				"horse",
				"unicorn",
		/*30*/	"manticore",
				"sasquatch",
				"werewolf",
				"jerboa",
				"echidna",
				"tapir",
				"hippopotamus",
				"camel",
				"star-nosed mole",
				"saiga antelope",
		/*40*/	"platypus",
				"pangolin",
				"streaked tenrec",
				"quoll",
				"zebra duiker",
				"wombat",
				"rhinoceros",
				"capybara",
				"red panda",
				"ferret",
		/*50*/	"megasloth"
			]
			var mammalChoose = Math.floor(Math.random() * (mammals.length));
			var creatureChosen = mammals[mammalChoose];
			break;
			
			
		case 1:
			var fishBodyAdjectives = [
				"large-eyed",
				"small-eyed",
				"one-eyed",
				"three-eyed",
				"four-eyed",
				"six-eyed",
				"long-finned",
				"stubby-finned",
				"two-finned",
		/*10*/	"six-finned",
				"eight-finned",
				"",
				"",
				"",
				""
			]
			var bodyAdjectiveChoose = Math.floor(Math.random() * (fishBodyAdjectives.length));
			var bodyAdjectiveChosen = fishBodyAdjectives[bodyAdjectiveChoose];
			
			var fishMiscAdjectives = [
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
		/*10*/	"",
				"",
				"",
				"",
				"",
				""
			]
			var miscAdjectiveChoose = Math.floor(Math.random() * (fishMiscAdjectives.length));
			var miscAdjectiveChosen = fishMiscAdjectives[miscAdjectiveChoose];
			
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
		/*10*/	"lionfish",
				"tropical fish",
				"exotic fish",
				"sunfish",
				"fish",
				"whale",
				"bass",
				"seahorse",
				"pupperfish",
				"betta",
		/*20*/	"gulbi",
				"discus",
				"mandarin fish",
				"anglerfish",
				"icefish",
				"sailfish",
				"swordfish",
				"whaleshark",
				"goldfish",
				"hammerhead",
		/*30*/	"frilled shark",
				"saw shark",
				"perch",
				"burbot",
				"sturgeon",
				"tigerfish",
				"grayling",
				"bluegill",
				"alligator gar",
				"sheepshead wrasse",
				"carp",
		/*40*/	"gourami",
				"trumpetfish",
				"pipefish",
				"cornetfish",
				"flounder",
				"coelacanth",
				"fringehead",
				"pelican eel",
				"helicoprion",
				"doryaspis",
		/*50*/	"dunkleosteus"
			]
			var fishChoose = Math.floor(Math.random() * (fishs.length));
			var creatureChosen = fishs[fishChoose];
			break;
			
			
		case 2:
			var reptileBodyAdjectives = [
				"large-eyed",
				"small-eyed",
				"one-eyed",
				"three-eyed",
				"four-eyed",
				"six-eyed",
				"long-limbed",
				"stubby-limbed",
				"two-limbed",
		/*10*/	"six-limbed",
				"eight-limbed",
				"",
				"",
				"",
				""
			]
			var bodyAdjectiveChoose = Math.floor(Math.random() * (reptileBodyAdjectives.length));
			var bodyAdjectiveChosen = reptileBodyAdjectives[bodyAdjectiveChoose];
			
			var reptileMiscAdjectives = [
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
		/*10*/	"",
				"",
				"",
				"",
				"",
				""
			]
			var miscAdjectiveChoose = Math.floor(Math.random() * (reptileMiscAdjectives.length));
			var miscAdjectiveChosen = reptileMiscAdjectives[miscAdjectiveChoose];
			
			const reptiles = [
				"crocodile",
				"lizard",
				"turtle",
				"tortoise",
				"snake",
				"cobra",
				"serpent",
				"anaconda",
				"reptile",
		/*10*/	"snake-necked turtle",
				"chameleon",
				"gharial",
				"agama",
				"chamaro",
				"belize lizard",
				"basilisk lizard",
				"frilled neck lizard",
				"mata mata",
				"basilisk",
		/*20*/	"mexican alligator lizard",
				"gecko",
				"sea turtle",
				"blind snake",
				"satanic leaf-tailed gecko",
				"burtons legless lizard",
				"longisquama",
				"pachycephalosaurus",
				"spinosaurus",
				"pelycosaur",
				"stegosaurus",
		/*30*/	"ankylosaurus",
				"nigersaurus",
				"hydra",
				"dragon",
				"scylla",
				"drake"
			]
			var reptileChoose = Math.floor(Math.random() * (reptiles.length));
			var creatureChosen = reptiles[reptileChoose];
			break;
			
			
		case 3:
			var birbBodyAdjectives = [
				"large-eyed",
				"small-eyed",
				"one-eyed",
				"three-eyed",
				"four-eyed",
				"six-eyed",
				"long-winged",
				"stubby-winged",
				"four-winged",
		/*10*/	"six-winged",
				"",
				"",
				"",
				"",
				""
			]
			var bodyAdjectiveChoose = Math.floor(Math.random() * (birbBodyAdjectives.length));
			var bodyAdjectiveChosen = birbBodyAdjectives[bodyAdjectiveChoose];
			
			var birbMiscAdjectives = [
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
		/*10*/	"",
				"",
				"",
				"",
				"",
				""
			]
			var miscAdjectiveChoose = Math.floor(Math.random() * (birbMiscAdjectives.length));
			var miscAdjectiveChosen = birbMiscAdjectives[miscAdjectiveChoose];
			
			const birbs = [
				"robin",
				"cardinal",
				"eagle",
				"finch",
				"lark",
				"bird",
				"chicken",
				"haring ibon",
				"hoatzin",
		/*10*/	"greater sage-grouse",
				"kakapo",
				"magnificent frigatebird",
				"long-wattled umbrellabird",
				"shoebill",
				"king of saxony bird-of-paradise",
				"rhinoceros hornbill",
				"tawny frogmouth",
				"great curassow",
				"great potoo",
		/*20*/	"inca tern",
				"kiwi",
				"guacharo",
				"king vulture",
				"royal flycatcher",
				"raggiana bird of paradise",
				"silkie chicken",
				"andean cock-of-the-rock",
				"goose",
				"hummingbird",
		/*30*/	"penguin",
				"cassowary",
				"duck",
				"toucan",
				"parrot",
				"love bird",
				"cedar waxwing",
				"tree swallow",
				"woodpecker",
				"warbler",
		/*40*/	"hoopoe",
				"waxwing",
				"swallow",
				"pardalote",
				"kingfisher",
				"terrorbird",
				"kookaburra",
				"duck",
				"goose",
				"swan",
		/*50*/	"quail"
			]
			var birbsChoose = Math.floor(Math.random() * (birbs.length));
			var creatureChosen = birbs[birbsChoose];
			break;
			
			
		case 4:
			var amphibianBodyAdjectives = [
				"large-eyed",
				"small-eyed",
				"one-eyed",
				"three-eyed",
				"four-eyed",
				"six-eyed",
				"long-limbed",
				"stubby-limbed",
				"two-limbed",
		/*10*/	"six-limbed",
				"",
				"",
				"",
				"",
				""
			]
			var bodyAdjectiveChoose = Math.floor(Math.random() * (amphibianBodyAdjectives.length));
			var bodyAdjectiveChosen = amphibianBodyAdjectives[bodyAdjectiveChoose];
			
			var amphibianMiscAdjectives = [
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
		/*10*/	"",
				"",
				"",
				"",
				"",
				""
			]
			var miscAdjectiveChoose = Math.floor(Math.random() * (amphibianMiscAdjectives.length));
			var miscAdjectiveChosen = amphibianMiscAdjectives[miscAdjectiveChoose];
			
			const amphibians = [
				"frog",
				"axolotl",
				"salamander",
				"amphibian",
				"toad",
				"clown frog",
				"poison dart frog",
				"caecilian",
				"diplocaulus",
		/*10*/	"beelzebufo",
				"cyclotosaurus",
				"eocaecilia",
				"eogyrinus",
				"megalocephalus",
				"microbrachis",
				"ophiderpeton",
				"phlegethontia",
				"platyhystrix",
				"prionosuchus",
		/*20*/	"proterogyrinus",
				"westlothiana",
				"horned frog",
				"mossy frog",
				"rain frog",
				"newt",
				"crested newt",
				"marbled newt",
				"klingon newt",
				"cave salamander",
		/*30*/	"olm"
			]
			var amphibianChoose = Math.floor(Math.random() * (amphibians.length));
			var creatureChosen = amphibians[amphibianChoose];
			break;
			
			
		case 5:
			var insectBodyAdjectives = [
				"large-eyed",
				"small-eyed",
				"one-eyed",
				"three-eyed",
				"four-eyed",
				"six-eyed",
				"long-limbed",
				"stubby-limbed",
				"two-limbed",
		/*10*/	"four-limbed",
				"ten-limbed",
				"",
				"",
				"",
				""
			]
			var bodyAdjectiveChoose = Math.floor(Math.random() * (insectBodyAdjectives.length));
			var bodyAdjectiveChosen = insectBodyAdjectives[bodyAdjectiveChoose];
			
			var insectMiscAdjectives = [
				"fluffy",
				"spiney",
				"squishy",
				"",
		/*10*/	"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				""
			]
			var miscAdjectiveChoose = Math.floor(Math.random() * (insectMiscAdjectives.length));
			var miscAdjectiveChosen = insectMiscAdjectives[miscAdjectiveChoose];
			
			var insects = [
				"bumble bee",
				"dirt dauber",
				"turtle ant",
				"termite",
				"orchid mantis",
				"gangis moth",
				"butterfly",
				"stick bug",
				"leaf bug",
		/*10*/	"stink bug",
				"lady bug",
				"giraffe weevil",
				"rhino beetle",
				"whip spider",
				"poltys",
				"wolf spider",
				"tarantula",
				"robber fly",
				"mosquito",
		/*20*/	"dragon fly",
				"centipede",
				"millipede",
				"assassin bug",
				"scorpion",
				"grasshopper",
				"cater strider",
				"cockroach",
				"monkey slug",
				"tick",
		/*30*/	"grub",
				"flea",
				"firefly",
				"earwig",
				"silverfish",
				"treehopper",
				"twig spider",
				"thorn bug",
				"plume moth",
				"spicebush swallowtail",
		/*40*/	"brazilian treehopper",
				"ant mimic spider",
				"clistopyga crassicaudata",
				"leafcutter ant",
				"stalk-eyed fly",
				"trilobite beetle",
				"brahmin-moth caterpillar",
				"inchworm",
				"giant shield bug",
				"camel spider",
		/*50*/	"water beetle",
				"sabellidae"
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
	
	var templates = [
	document.getElementById('describedCreature').innerHTML = "featuring a(n) " + creatureChosen,
	document.getElementById('describedCreature').innerHTML = "featuring a(n) " + bodyAdjectiveChosen + " " + creatureChosen,
	document.getElementById('describedCreature').innerHTML = "featuring a(n) " + miscAdjectiveChosen + " " + creatureChosen,
	document.getElementById('describedCreature').innerHTML = "featuring a(n) " + bodyAdjectiveChosen + " " + miscAdjectiveChosen + " " + creatureChosen,
	document.getElementById('describedCreature').innerHTML = "featuring a(n) " + behaviorModifyerChosen + " " + creatureChosen,
	document.getElementById('describedCreature').innerHTML = "featuring a(n) " + behaviorModifyerChosen + " " + bodyAdjectiveChosen + " " + creatureChosen,
	document.getElementById('describedCreature').innerHTML = "featuring a(n) " + behaviorModifyerChosen + " " + miscAdjectiveChosen + " " + creatureChosen,
	document.getElementById('describedCreature').innerHTML = "featuring a(n) " + behaviorModifyerChosen + " " + appearanceModifyerChosen + " " + creatureChosen,
	document.getElementById('describedCreature').innerHTML = "featuring a(n) " + behaviorModifyerChosen + " " + materialModifyerChosen + " " + creatureChosen,
	document.getElementById('describedCreature').innerHTML = "featuring a(n) " + appearanceModifyerChosen + " " + creatureChosen,
	document.getElementById('describedCreature').innerHTML = "featuring a(n) " + appearanceModifyerChosen + " " + bodyAdjectiveChosen + " " + creatureChosen,
	document.getElementById('describedCreature').innerHTML = "featuring a(n) " + appearanceModifyerChosen + " " + miscAdjectiveChosen + " " + creatureChosen,
	document.getElementById('describedCreature').innerHTML = "featuring a(n) " + appearanceModifyerChosen + " " + materialModifyerChosen + " " + creatureChosen,
	document.getElementById('describedCreature').innerHTML = "featuring a(n) " + materialModifyerChosen + " " + creatureChosen,
	document.getElementById('describedCreature').innerHTML = "featuring a(n) " + materialModifyerChosen + " " + bodyAdjectiveChosen + " " + creatureChosen,
	document.getElementById('describedCreature').innerHTML = "featuring a(n) " + materialModifyerChosen + " " + miscAdjectiveChosen + " " + creatureChosen
	]
	var templateChosen = Math.floor(Math.random() * (templates.length));
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