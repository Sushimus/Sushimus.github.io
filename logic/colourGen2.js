class ColourSet{
	constructor(name, colours){
		this.name = name;
		this.colours = colours;
	}
}

class ColourRatio{
	constructor(name, min, max){
		this.name = name;
		this.min = min;
		this.max = max;
	}
	
	ratio = [];
	set ratio(r){
		this.ratio = r;
	}
}

//TODO Weight rand to be warm/cold on colour deletion
//TODO Colours can prob be set as a range of ratio between r/g/b
//		--- May be worth playing with taking the difference of min/max as a percentage of the min and mid - min as a percentage of the scale of the difference
//TODO Remember to shift greys slightly red when lighter and slightly blue when darker
//TODO Eventually a colour wheel picker with a saturation slider would be great for primary input
var Rainbow = [];
const RainbowRatios = [//Colour pallet website: https://lospec.com/palette-list
	new ColourRatio("red", [0.33, 0.33, 0.34], [0.33, 0.33, 0.34]),
	new ColourRatio("orange", [0.33, 0.33, 0.34], [0.33, 0.33, 0.34]),
	new ColourRatio("yellow", [0.33, 0.33, 0.34], [0.33, 0.33, 0.34]),
	new ColourRatio("green", [0.33, 0.33, 0.34], [0.33, 0.33, 0.34]),
	new ColourRatio("blue", [0.33, 0.33, 0.34], [0.33, 0.33, 0.34]),
	new ColourRatio("violet", [0.33, 0.33, 0.34], [0.33, 0.33, 0.34]),
	new ColourRatio("brown", [0.33, 0.33, 0.34], [0.33, 0.33, 0.34]),
	new ColourRatio("black", [0.33, 0.33, 0.34], [0.33, 0.33, 0.34]),
	new ColourRatio("white", [0.33, 0.33, 0.34], [0.33, 0.33, 0.34])
]

var input = "";
function ColourGen(){
	console.log("===== INITIALISING =====");
	var size = 24;
	var warm = false;
	ColourGenDebug(input, size, warm);
	
	console.log("");
	console.log("===== PALLET_CALC =====");
	RainbowInit();
	PalletCalc(size, warm);
	RainbowDebug();
	
	console.log("");
	console.log("===== COLOUR_GENERATOR =====");
	InputInit();
	ColourGenerator(input);
	
	Display();
}

function ColourGenDebug(input, size, warm){
	console.log(`INPUT: ${input}`);
	console.log(`SIZE: ${size}`);
	console.log(`WARM: ${warm}`);
}

function RainbowInit(){
	Rainbow = [];
	
	Rainbow.push(new ColourSet("red", red = []));
	Rainbow.push(new ColourSet("orange", orange = []));
	Rainbow.push(new ColourSet("yellow", yellow = []));
	Rainbow.push(new ColourSet("green", green = []));
	Rainbow.push(new ColourSet("blue", blue = []));
	Rainbow.push(new ColourSet("violet", violet = []));
}

//The 1 floating around is for grey
//Grey added afterwards to ensure it's always on pallet
function PalletCalc(size, warm){
	var colourNum = Math.floor(Math.sqrt(size)) + 1;
	if(Rainbow.length + 1 < colourNum){
		colourNum = Rainbow.length + 1;
	}
	var colourExtra = size % colourNum;
	
	colourNum -= 1;
	RainbowManager(colourNum);
	colourNum++;
	
	colourNum = size - colourExtra;
	DistributeColours(colourNum, colourExtra, warm);
}

function RainbowManager(colourNum){
	console.log("REMOVED:");
	if(colourNum < Rainbow.length){
		while(colourNum < Rainbow.length){
			var rand = Math.floor(Rainbow.length * Math.random(0, Rainbow.length - 1));
			console.log(`${Rainbow.at(rand).name}`);
			Rainbow.splice(rand, 1);
		}
	}
	Rainbow.push(new ColourSet("grey", grey = []));
}

function DistributeColours(colourNum, colourExtra, warm){
	//Distribute base amount
	for(let i = 0; i < colourNum; i++){
		Rainbow.at(i % Rainbow.length).colours.push([0, 0, 0]);
	}
	
	DistributeExtra(colourExtra, warm);
	DistributeBrown();
	DistributeBlackWhite(warm);
}

function DistributeExtra(colourExtra, warm){
	for(let i = 0; i < colourExtra; i++){
		if(i % 3 == 0){//Primary
			if(warm){
				Rainbow.at(0).push([0, 0, 0]);
			}
			else{
				Rainbow.at(Rainbow.length - 2).colours.push([0, 0, 0]);
			}
		}
		else if(i % 3 == 1){//Grey
			Rainbow.at(Rainbow.length - 1).colours.push([0, 0, 0]);
		}
		else{//Secondary
			if(warm){
				Rainbow.at(1).push([0, 0, 0]);
			}
			else{
				Rainbow.at(Rainbow.length - 3).colours.push([0, 0, 0]);
			}
		}
	}
}

function DistributeBrown(){
	var yellowLength = Math.floor(Rainbow.at(Rainbow.findIndex(colour => colour.name === 'yellow')).colours.length / 3);
	Rainbow.at(Rainbow.findIndex(colour => colour.name === 'yellow')).colours.length -= yellowLength;
	var orangeLength = Math.floor(Rainbow.at(Rainbow.findIndex(colour => colour.name === 'orange')).colours.length / 3);
	Rainbow.at(Rainbow.findIndex(colour => colour.name === 'orange')).colours.length -= orangeLength;
	var brownLength = yellowLength + orangeLength;
	
	if(Rainbow.findIndex(colour => colour.name === 'yellow') != -1){
		Rainbow.splice(Rainbow.findIndex(colour => colour.name === 'yellow') + 1, 0, new ColourSet("brown", brown = []));
	}
	else if(Rainbow.findIndex(colour => colour.name === 'orange') != -1){
		Rainbow.splice(Rainbow.findIndex(colour => colour.name === 'orange') + 1, 0, new ColourSet("brown", brown = []));
	}
	
	for(let i = 0; i < brownLength; i++){
		Rainbow.at(Rainbow.findIndex(colour => colour.name === 'brown')).colours.push([0, 0, 0]);
	}
}

function DistributeBlackWhite(warm){
	Rainbow.at(0).colours.length -= 1;
	Rainbow.at(Rainbow.length - 2).colours.length -= 1;
	
	Rainbow.push(new ColourSet("white", white = [[0, 0, 0]]));
	Rainbow.push(new ColourSet("black", black = [[0, 0, 0]]));
}

function RainbowDebug(){
	console.log("");
	console.log("RAINBOW:");
	for(let i = 0; i < Rainbow.length; i++){
		console.log(`${Rainbow.at(i).name}`);
	}
	
	console.log("");
	console.log("RAINBOWCOLOURS:");
	for(let i = 0; i < Rainbow.length; i++){
		console.log(`${Rainbow.at(i).name} is length: ${Rainbow.at(i).colours.length}`);
		for(let j = 0; j < Rainbow.at(i).colours.length; j++){
			console.log(`${Rainbow.at(i).colours.at(j)}`);
		}
	}
}

function InputInit(){
	if(input == ""){
		var randomRatio = RainbowRatios.at(RainbowRatios.findIndex(colour => colour.name === Rainbow.at(Math.random(0, Rainbow.length)).name));
		var randomSum = getRandomInt(255, 511);
		var rand = Math.random();
		input = [Math.floor(randomSum * getRatio(rand, randomRatio.max.at(0), randomRatio.min.at(0))),
				 Math.floor(randomSum * getRatio(rand, randomRatio.max.at(1), randomRatio.min.at(1))),
				 Math.floor(randomSum * getRatio(rand, randomRatio.max.at(2), randomRatio.min.at(2)))];
	}
	
	//TODO Handles figuring out what input is and slots it into the appropraite index
}

function ColourGenerator(input){
	console.log("RAINBOWRATIOS:");
	for(let i = 0; i < RainbowRatios.length; i++){
		console.log(`${RainbowRatios.at(i).name}: ${RainbowRatios.at(i).min} / ${RainbowRatios.at(i).max}`);
		RainbowRatios.at(i).ratio.push(0, 0, 0);
		console.log(`${RainbowRatios.at(i).name}: ${RainbowRatios.at(i).ratio}`);//The end ratio is important one
	}
}

function Display(){
	document.getElementById('colourPallet').style.background = 'var(--ditherFill)';
	document.getElementById('colourPallet').style.clip = 'padding-box';
	document.getElementById('colourPallet').style.backgroundSize = '0.5rem';
	document.getElementById('colourPallet').style.border = 'var(--borderGeneric)';
	
	document.getElementById('debug').style.background = `rgb(${input.at(0)}, ${input.at(1)}, ${input.at(2)})`;
}

// The maximum is exclusive and the minimum is inclusive
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	
	return Math.floor(Math.random() * (max - min) + min);
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

function getRatio(percent, max, min){
	return percent * (max - min) + min;
}