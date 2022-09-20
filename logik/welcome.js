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
			"Pancakes are Best",
			"This Website Only Kinda Sucks",
			"New Backgrounds in the Works",
			"Uses Too Many Candles",
			"Please Help Me Use Makeup",
			"FTL: Faster Than Light is great",
			"Fan of Axolotls",
			"My Shade of Pink is Best",
			"I'll Fix the Website... Eventually",
			"Now Wears a Lab Coat",
			"How to Indie Dev?",
			"Pronounced suh-shi-mus",
			"Graduated from Trade School!",
			"Caster of Stick-Horses",
			"Wears Socks and Slippers",
			"Mugs are My Religion",
			"I Use Linux BTW",
			"SPACE IS KOOL!!",
			"Providing Dad-Energy Since 19",
			"Command Hooks are Great",
			"Now Ripping Off Minecraft",
			"Carl is waiting.",
			"Now moderately useful!",
			"Go binge GDC",
			"Next Confinement episode when??",
			"Snails are mollusk cows.",
			"Cows are mammal snails.",
			"Watch out for Big Condiment",
			"SLIME RANCHER 2 2022!!",
			"Plorp is a good egg",
			"All my homies hate trig",
			"Whale onsie penguins are so 2019",
			"Now adding suffering",
			"Now with half the jank!",
			"Engineering Art"
		]
		var messageChoose = Math.floor(Math.random() * (messages.length));
		var messageChosen = messages[messageChoose];
		
		document.getElementById('welcome').innerHTML = messageChosen;
	}
	
}