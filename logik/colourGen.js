//User Inputs
var red;
var green;
var blue;
var hex;

var greyscale = false;
var displayType;//Sets pattern

//Math Stuff
var max;
var max2;
var mid;
var mid2;
var min;
var notMax;
var notMid;
var sum;
var increment = 0;
var inputType;

var maxRat = 0.5;
var midRat = 0.35;
var minRat = 0.15;

function GenerateColours(){
	SetInput();
	Init();
	
	DoMath();
	Display();
	DoMath();
	Display();
	DoMath();
	Display();
	DoMath();
	Display();
	DoMath();
	Display();
	
	increment = 0;
}

//-----------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------INPUT_HANDLING------------------------------------------------------
function SetInput(){
	var randomRange = 20;
	
	if(document.getElementById('hexInput').value == ""){
		if(document.getElementById('redInput').value != ""){
			red = parseInt(document.getElementById('redInput').value);
		}
		else{
			red = Math.floor(Math.random() * 200) + 55;
		}
		if(document.getElementById('greenInput').value != ""){
			green = parseInt(document.getElementById('greenInput').value);
		}
		else{
			green = Math.floor(Math.random() * 200) + 55;
			
			while(green == red || (green >= red - randomRange && green <= red + randomRange) || green > 255){
				green = Math.floor(Math.random() * 200) + 55;
			}
		}
		if(document.getElementById('blueInput').value != ""){
			blue = parseInt(document.getElementById('blueInput').value);
		}
		else{
			blue =Math.floor(Math.random() * 200) + 55;
			
            while((blue == red || blue == green) || ((blue >= red - randomRange && blue <= red + randomRange)) || ((blue >= green - randomRange && blue <= green + randomRange)) || blue > 255){
                blue = Math.floor(Math.random() * 200) + 55;
            }
		}
	}
	else{
		hex = document.getElementById('hexInput').value.toUpperCase();
		ToRGB();
	}
}

function Init(){
    SetInputType();
    ReshuffleInputs();
    SetSum();
    SetRatio();
    SetDisplayType();//NEEDS IMPLEMENTATION
}

function SetInputType(){
    //if one colour is largest, one colour is middle, and one colour is smallest
    if((((red > green) && (red > blue)) && ((blue > green) || (green > blue))) ||
        (((green > red) && (green > blue)) && ((red > blue) || (blue > red))) ||
        (((blue > red) && (blue > green)) && ((red > green) || (green > red)))){
        inputType = 0;
    }
    //if two colours are equal
    else if(((red == green || red == blue) && !(blue == green)) || 
            ((green == red || green == blue) && !(red == blue)) || 
            ((blue == red || blue == green) && !(red == green))){
        //Scanner input = new Scanner(System.in); ADD GREYSCALE TOGGLE
        //System.out.println("Enable greyscale? [Y/N]");
        //String greyCheck = input.nextLine();
        //if(greyCheck.equalsIgnoreCase("Y")){
        //    greyscale = true;
        //}
        inputType = 1;
    }
    //if they're all the same
    else if((red == green) && (green == blue)){
        inputType = 2;
    }
    else{
        inputType = 3;
    }
}

function ReshuffleInputs(){
    if(inputType == 0){
        //set max
        if((red > green) && (red > blue)){
            max = red;
        }
        else if((green > red) && (green > blue)){
            max = green;
        }
        else if((blue > red) && (blue > green)){
            max = blue;
        }
        else{
            console.log("RESHUFFLE_ERROR: iT-0-0");
        }
        //set mid
        if(((red > green) && (red < blue)) || ((red > blue) && (red < green))){
            mid = red;
        }
        else if(((green > red) && (green < blue)) || ((green > blue) && (green < red))){
            mid = green;
        }
        else if(((blue > red) && (blue < green)) || ((blue > green) && (blue < red))){
            mid = blue;
        }
        else{
            console.log("RESHUFFLE_ERROR: iT-0-1");
        }
        //set min
        if((red < green) && (red < blue)){
            min = red;
        }
        else if((green < red) && (green < blue)){
            min = green;
        }
        else if((blue < red) && (blue < green)){
            min = blue;
        }
        else{
            console.log("RESHUFFLE_ERROR: iT-0-2");
        }
    }
    else if(inputType == 1){
        //if both are smaller than max
        if(((red > green) && (green == blue)) || ((green > red) && (red == blue)) || ((blue > red) && (red == green))){
            if(red > green){
                if(greyscale == true){
                    max = red;
                    mid = green;
                    min = blue;
                    notMin = blue;
                }
                else{
                    max = red;
                    mid = green;
                    min = blue;
                    notMin = blue;
                }
            }
            else if(green > red){
                max = green;
                mid = red;
                min = blue;
                notMin = blue;
            }
            else if(blue > red){
                max = blue;
                mid = green;
                min = red;
                notMin = red;
            }
            else{
                console.log("RESHUFFLE_ERROR: iT-1-0");
            }
        }
        //if both are larger than min
        else if(((red < green) && (green == blue)) || ((green < red) && (red == blue)) || ((blue < red) && (red == green))){
            if(red < green){
                max = blue;
                mid = green;
                min = red;
                notMax = green;
                inputType = 2;
            }
            else if(green < red){
                max = red;
                mid = blue;
                min = green;
                notMax = blue;
                inputType = 2;
            }
            else if(blue < red){
                max = red;
                mid = green;
                min = blue;
                notMax = green;
                inputType = 2;
            }
            else{
                console.log("RESHUFFLE_ERROR: iT-1-1");
            }
        }
        else{
            console.log("RESHUFFLE_ERROR: iT-1-2");
        }
    }
    else if(inputType == 3){
        console.log("Why are you using my tool for shades of grey?");
    }
    else{
        console.log("RESHUFFLE_ERROR: iT-4");
    }
}

function SetSum(){
	sum = max + mid + min;
}

function SetRatio(){
    var setMax = max;
    var setMid = mid;
    var setMin = min;
    var setSum = sum;
     
    var notMinRat;
    var notMaxRat;
    var notMaxRat2;
    var loopCount = 0;
        
    //if all different
    if(inputType == 0){
        maxRat = Math.round(((setMax / setSum) + Number.EPSILON) * 100) / 100;
        midRat = Math.round(((setMid / setSum) + Number.EPSILON) * 100) / 100;
        minRat = Math.round(((setMin / setSum) + Number.EPSILON) * 100) / 100;
    }
    //if two are same and smaller
    else if(inputType == 1){
        if(greyscale == true){
            notMinRat = Math.round(((((setMax - setMin) / 2) * 0.001) + Number.EPSILON) * 100) / 100;
            notMinRat = notMinRat * 1000;
            setMid = notMinRat + mid;

            setSum = setMax + setMid + setMin;

			maxRat = Math.round(((setMax / setSum) + Number.EPSILON) * 100) / 100;
			midRat = Math.round(((setMid / setSum) + Number.EPSILON) * 100) / 100;
			minRat = Math.round(((setMin / setSum) + Number.EPSILON) * 100) / 100;
        }
        else{
			midRat = Math.round(((notMin * 1.25) + Number.EPSILON) * 100) / 100;
			minRat = Math.round(((notMin * 0.75) + Number.EPSILON) * 100) / 100;
                
			maxRat = Math.round(((setMax / setSum) + Number.EPSILON) * 100) / 100;
			midRat = Math.round(((setMid / setSum) + Number.EPSILON) * 100) / 100;
			minRat = Math.round(((setMin / setSum) + Number.EPSILON) * 100) / 100;
        }
    }
    //if two are same and larger
    else if(inputType == 2){
        if(greyscale == true){
            //finds intital flawed ratio
			maxRat = Math.round(((setMax / setSum) + Number.EPSILON) * 100) / 100;
			midRat = Math.round(((setMid / setSum) + Number.EPSILON) * 100) / 100;
			minRat = Math.round(((setMin / setSum) + Number.EPSILON) * 100) / 100;

            //settles on ratio differential
            notMaxRat = maxRat - minRat;
            notMaxRat2 = Math.round(((notMaxRat / 2) + Number.EPSILON) * 100) / 100;
            while((notMaxRat - notMaxRat2) >= .01){
                notMaxRat = Round(notMaxRat - .01);
                notMaxRat2 = Round(notMaxRat2 + .01);
                loopCount = loopCount + 1;
            }

            //applies differential to output ratio
            minRat = minRat;
            midRat = Math.round(((minRat + notMaxRat2) + Number.EPSILON) * 100) / 100;
            maxRat = Math.round((((midRat + notMaxRat) - (loopCount * .01)) + Number.EPSILON) * 100) / 100;
        }
        else{
            setMax = Math.round(((notMax * 1.25) + Number.EPSILON) * 100) / 100;
            setMid = Math.round(((notMax * 0.75) + Number.EPSILON) * 100) / 100;
             
            if(setMax > 255){
                setMax = Math.round(((setMax * 0.9) + Number.EPSILON) * 100) / 100;
                setMid = Math.round(((setMid * 0.9) + Number.EPSILON) * 100) / 100;
                setMin = Math.round(((setMin * 0.9) + Number.EPSILON) * 100) / 100;
            }
                
			maxRat = Math.round(((setMax / setSum) + Number.EPSILON) * 100) / 100;
			midRat = Math.round(((setMid / setSum) + Number.EPSILON) * 100) / 100;
			minRat = Math.round(((setMin / setSum) + Number.EPSILON) * 100) / 100;
        }
    }
    else if(inputType == 3){
        console.log("RESHUFFLE_ERROR: iT-3");
    }
      
    if(1 < (maxRat + midRat + minRat)){
		minRat = minRat - 0.01;
    }
}

function ToRGB(){
	//Breaking hex into seperate values
    var hex0 = hex.charAt(0);
    var hex1 = hex.charAt(1);
    var hex2 = hex.charAt(2);
    var hex3 = hex.charAt(3);
    var hex4 = hex.charAt(4);
    var hex5 = hex.charAt(5);
	
	//Converting seperate values into rgb values
    hex0 = RGBVal(hex0);
    hex1 = RGBVal(hex1);
    hex2 = RGBVal(hex2);
    hex3 = RGBVal(hex3);
    hex4 = RGBVal(hex4);
    hex5 = RGBVal(hex5);
	
	//Recombining & assigning hexes as cohesive rgb values
    red = (parseInt(hex0) * 16) + (parseInt(hex1));
    green = (parseInt(hex2) * 16) + (parseInt(hex3));
    blue = (parseInt(hex4) * 16) + (parseInt(hex5));
}

function RGBVal(hexToConvert){
	let rgbMap = new Map();
	
	rgbMap.set("0", 0);
	rgbMap.set("1", 1);
	rgbMap.set("2", 2);
	rgbMap.set("3", 3);
	rgbMap.set("4", 4);
	rgbMap.set("5", 5);
	rgbMap.set("6", 6);
	rgbMap.set("7", 7);
	rgbMap.set("8", 8);
	rgbMap.set("9", 9);
	rgbMap.set("A", 10);
	rgbMap.set("B", 11);
	rgbMap.set("C", 12);
	rgbMap.set("D", 13);
	rgbMap.set("E", 14);
	rgbMap.set("F", 15);
	
	return rgbMap.get(hexToConvert);
}

function SetDisplayType(){
	//Handles pattern displayed
}

//--------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------DISPLAYS------------------------------------------------------
function Display(){//Fuck me this is a big one. Try for looping.
	//PRIMARY
	document.getElementById('r' + increment).style.background = `rgb(${max}, ${min}, ${min})`;
	document.getElementById('r' + increment).style.display = 'inherit';
	document.getElementById('r' + increment).value = `rgb(${max}, ${min}, ${min})`;
	document.getElementById('g' + increment).style.background = `rgb(${min}, ${max}, ${min})`;
	document.getElementById('g' + increment).style.display = 'inherit';
	document.getElementById('g' + increment).value = `rgb(${min}, ${max}, ${min})`;
	document.getElementById('b' + increment).style.background = `rgb(${min}, ${min}, ${max})`;
	document.getElementById('b' + increment).style.display = 'inherit';
	document.getElementById('b' + increment).value = `rgb(${min}, ${min}, ${max})`;
	//SECONDARY
	document.getElementById('rg' + increment).style.background = `rgb(${max}, ${mid}, ${min})`;
	document.getElementById('rg' + increment).style.display = 'inherit';
	document.getElementById('rg' + increment).value = `rgb(${max}, ${mid}, ${min})`;
	document.getElementById('rb' + increment).style.background = `rgb(${max}, ${min}, ${mid})`;
	document.getElementById('rb' + increment).style.display = 'inherit';
	document.getElementById('rb' + increment).value = `rgb(${max}, ${min}, ${mid})`;
	document.getElementById('gr' + increment).style.background = `rgb(${mid}, ${max}, ${min})`;
	document.getElementById('gr' + increment).style.display = 'inherit';
	document.getElementById('gr' + increment).value = `rgb(${mid}, ${max}, ${min})`;
	document.getElementById('gb' + increment).style.background = `rgb(${min}, ${max}, ${mid})`;
	document.getElementById('gb' + increment).style.display = 'inherit';
	document.getElementById('gb' + increment).value = `rgb(${min}, ${max}, ${mid})`;
	document.getElementById('br' + increment).style.background = `rgb(${mid}, ${min}, ${max})`;
	document.getElementById('br' + increment).style.display = 'inherit';
	document.getElementById('br' + increment).value = `rgb(${mid}, ${min}, ${max})`;
	document.getElementById('bg' + increment).style.background = `rgb(${min}, ${mid}, ${max})`;
	document.getElementById('bg' + increment).style.display = 'inherit';
	document.getElementById('bg' + increment).value = `rgb(${min}, ${mid}, ${max})`;
	//TERTIARY
	document.getElementById('rrg' + increment).style.background = `rgb(${max}, ${mid2}, ${min})`;
	document.getElementById('rrg' + increment).style.display = 'inherit';
	document.getElementById('rrg' + increment).value = `rgb(${max}, ${mid2}, ${min})`;
	document.getElementById('rrb' + increment).style.background = `rgb(${max}, ${min}, ${mid2})`;
	document.getElementById('rrb' + increment).style.display = 'inherit';
	document.getElementById('rrb' + increment).value = `rgb(${max}, ${min}, ${mid2})`;
	document.getElementById('ggr' + increment).style.background = `rgb(${mid2}, ${max}, ${min})`;
	document.getElementById('ggr' + increment).style.display = 'inherit';
	document.getElementById('ggr' + increment).value = `rgb(${mid2}, ${max}, ${min})`;
	document.getElementById('ggb' + increment).style.background = `rgb(${min}, ${max}, ${mid2})`;
	document.getElementById('ggb' + increment).style.display = 'inherit';
	document.getElementById('ggb' + increment).value = `rgb(${min}, ${max}, ${mid2})`;
	document.getElementById('bbr' + increment).style.background = `rgb(${mid2}, ${min}, ${max})`;
	document.getElementById('bbr' + increment).style.display = 'inherit';
	document.getElementById('bbr' + increment).value = `rgb(${mid2}, ${min}, ${max})`;
	document.getElementById('bbg' + increment).style.background = `rgb(${min}, ${mid2}, ${max})`;
	document.getElementById('bbg' + increment).style.display = 'inherit';
	document.getElementById('bbg' + increment).value = `rgb(${min}, ${mid2}, ${max})`;
	//QUADRIARY
	document.getElementById('trg' + increment).style.background = `rgb(${max2}, ${max2}, ${min})`;
	document.getElementById('trg' + increment).style.display = 'inherit';
	document.getElementById('trg' + increment).value = `rgb(${max2}, ${max2}, ${min})`;
	document.getElementById('trb' + increment).style.background = `rgb(${max2}, ${min}, ${max2})`;
	document.getElementById('trb' + increment).style.display = 'inherit';
	document.getElementById('trb' + increment).value = `rgb(${max2}, ${min}, ${max2})`;
	document.getElementById('tgb' + increment).style.background = `rgb(${min}, ${max2}, ${max2})`;
	document.getElementById('tgb' + increment).style.display = 'inherit';
	document.getElementById('tgb' + increment).value = `rgb(${min}, ${max2}, ${max2})`;
	//GREYS
	document.getElementById('rg1' + increment).style.background = `rgb(${max}, ${mid}, ${mid})`;
	document.getElementById('rg1' + increment).style.display = 'inherit';
	document.getElementById('rg1' + increment).value = `rgb(${max}, ${mid}, ${mid})`;
	document.getElementById('bg1' + increment).style.background = `rgb(${mid}, ${max}, ${mid})`;
	document.getElementById('bg1' + increment).style.display = 'inherit';
	document.getElementById('bg1' + increment).value = `rgb(${mid}, ${max}, ${mid})`;
	document.getElementById('gg1' + increment).style.background = `rgb(${mid}, ${mid}, ${max})`;
	document.getElementById('gg1' + increment).style.display = 'inherit';
	document.getElementById('gg1' + increment).value = `rgb(${mid}, ${mid}, ${max})`;
	document.getElementById('rg2' + increment).style.background = `rgb(${max2}, ${mid2}, ${mid2})`;
	document.getElementById('rg2' + increment).style.display = 'inherit';
	document.getElementById('rg2' + increment).value = `rgb(${max2}, ${mid2}, ${mid2})`;
	document.getElementById('gg2' + increment).style.background = `rgb(${mid2}, ${max2}, ${mid2})`;
	document.getElementById('gg2' + increment).style.display = 'inherit';
	document.getElementById('gg2' + increment).value = `rgb(${mid2}, ${max2}, ${mid2})`;
	document.getElementById('bg2' + increment).style.background = `rgb(${mid2}, ${mid2}, ${max2})`;
	document.getElementById('bg2' + increment).style.display = 'inherit';
	document.getElementById('bg2' + increment).value = `rgb(${mid2}, ${mid2}, ${max2})`;
	
	increment++;
}

//------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------INTENSE_BASIC_MATH------------------------------------------------------
function DoMath(){
	RoundSum();
	CalcSet();
}

function RoundSum(){
	var roundSum = sum;
	
	roundSum = roundSum / 1000;
	roundSum = Math.round((roundSum + Number.EPSILON) * 100) / 100;
	roundSum = roundSum * 1000;
		
	sum = roundSum;
}

function CalcSet(){ //Rounding is being handled by built in rounding, may produce bad numbers.
	if(increment == 0){
		if(sum * maxRat <= 255){
			while((sum * maxRat <= 255) && (255 <= (sum + 10) * maxRat)){
				sum = sum + 10;
			}
			
			max = Math.round(sum * maxRat);
			mid = Math.round(sum * midRat);
			min = Math.round(sum * minRat);
		}
		else{
			console.log("FIRST_SET_FAILURE");
		}
	}
	else if(increment == 1){
		max = Math.round((sum - 80) * maxRat);
		mid = Math.round((sum - 80) * midRat);
		min = Math.round((sum - 80) * minRat);
	}
	else if(increment == 2){
		max = Math.round((sum - 160) * maxRat);
		mid = Math.round((sum - 160) * midRat);
		min = Math.round((sum - 160) * minRat);
	}
	else if(increment == 3){
		max = Math.round((sum - 240) * maxRat);
		mid = Math.round((sum - 240) * midRat);
		min = Math.round((sum - 240) * minRat);
	}
	else if(increment == 4){
		max = Math.round((sum - 320) * maxRat);
		mid = Math.round((sum - 320) * midRat);
		min = Math.round((sum - 320) * minRat);
	}
	else{
		console.log("INCREMENT_EXCEEDED_4");
	}
	
	mid2 = Math.round((mid + min) / 2);
	max2 = Math.round((max + mid) / 2);
}

function Round(value){
	return Math.round(((value) + Number.EPSILON) * 100) / 100;
}