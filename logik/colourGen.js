//whole values
var max;
var max2;
var mid;
var mid2;
var min;
var sum;
var increment;
//ratio values
var maxRat;
var midRat;
var minRat;

function colourGen(){    
    //Getting inputs
    System.out.println("Please enter max value: ");
    colours.setMax(input.nextInt());
    System.out.println("Please enter mid value: ");
    colours.setMid(input.nextInt());
    System.out.println("Please enter min value: ");
    colours.setMin(input.nextInt());
     
    //Setting values to math against
    colours.setSum();
    colours.calcRatio();
       
    //Mathing and displaying output
    math();
    display();
    math();
    display();
    math();
    display();
    math();
    display();
    math();
    display();
}

//------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------INTENSE_BASIC_MATH------------------------------------------------------
function math(){
    roundSum();
    calcSet();
    calcMax2();
    calcMid2();
}
    
function calcRatio(){
    var max = max;
    var mid = mid;
    var min = min;
    var sum = sum;
        
    maxRat = (max / sum).toFixed(2);
    midRat = (mid / sum).toFixed(2);
    minRat = (min / sum).toFixed(2);
}
    
function calcSet(){
    if(increment == 0){
        if((sum * maxRat < 255) && !((sum * maxRat) + 10 > 255)){
            while((sum * maxRat < 255) && !((sum + 10) * maxRat > 255)){
                sum = sum + 10;
            }
            max = sum * maxRat;
            mid = sum * midRat;
            min = sum * minRat;
            increment = increment + 1;
        }
        else{
            System.out.println("FIRST_SET_FAILURE");
        }
    }
    else if(increment == 1){
        max = (sum - 80) * maxRat;
        mid = (sum - 80) * midRat;
        min = (sum - 80) * minRat;
        increment = increment + 1;
    }
    else if(increment == 2){
        max = (sum - 160) * maxRat;
        mid = (sum - 160) * midRat;
        min = (sum - 160) * minRat;
        increment = increment + 1;
    }
    else if(increment == 3){
        max = (sum - 240) * maxRat;
        mid = (sum - 240) * midRat;
        min = (sum - 240) * minRat;
        increment = increment + 1;
    }
    else if(increment == 4){
        max = (sum - 320) * maxRat;
        mid = (sum - 320) * midRat;
        min = (sum - 320) * minRat;
        increment = increment + 1;
    }
    else{
    }
}
    
function calcMax2(){
        max2 = (max + mid) / 2;
}
    
function calcMid2(){
        mid2 = (mid + min) / 2;
}
    
function roundSum(){
	var sum = this.sum;
    if(sum < 100){
        sum = sum / 100;
        sum = sum.toFixed(2);
        sum = sum * 100;
        this.sum = sum;
    }
    else{
        sum = sum / 1000;
        sum = sum.toFixed(2);
        sum = sum * 1000;
        this.sum = sum;
    }
}
    
function hex(rgbVal){
    var hex;
    var firstHex = hexVal(calcFirstHex(rgbVal));
    var secondHex = hexVal(calcSecondHex(rgbVal));
        
    hex = firstHex + secondHex;

    return hex;
}
    
function calcFirstHex(rgbVal){
     var firstHexCalc;
      
     firstHexCalc = rgbVal / 16;
        
     return firstHexCalc;
}
    
function calcSecondHex(rgbVal){
    var secondHexCalc;

    secondHexCalc = ((rgbVal % 16) / 16) * 16;
     
    return secondHexCalc;
}
    
function hexVal(hexDigit){
    var hexVal;
        
    if(hexDigit == 0){
        hexVal = "0";
        return hexVal;
    }
    else if(hexDigit == 1){
        hexVal = "1";
        return hexVal;
    }
    else if(hexDigit == 2){
        hexVal = "2";
        return hexVal;
    }
    else if(hexDigit == 3){
        hexVal = "3";
        return hexVal;
    }
    else if(hexDigit == 4){
        hexVal = "4";
        return hexVal;
    }
    else if(hexDigit == 5){
        hexVal = "5";
        return hexVal;
    }
    else if(hexDigit == 6){
        hexVal = "6";
        return hexVal;
    }
    else if(hexDigit == 7){
        hexVal = "7";
        return hexVal;
    }
    else if(hexDigit == 8){
        hexVal = "8";
        return hexVal;
    }
    else if(hexDigit == 9){
        hexVal = "9";
        return hexVal;
    }
    else if(hexDigit == 10){
        hexVal = "A";
        return hexVal;
    }
    else if(hexDigit == 11){
        hexVal = "B";
        return hexVal;
    }
    else if(hexDigit == 12){
        hexVal = "C";
        return hexVal;
    }
    else if(hexDigit == 13){
        hexVal = "D";
        return hexVal;
    }
    else if(hexDigit == 14){
        hexVal = "E";
        return hexVal;
    }
    else if(hexDigit == 15){
        hexVal = "F";
        return hexVal;
    }
     
    hexVal = "X";
    return hexVal;
}

//-----------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------GETTERS_&_SETTERS------------------------------------------------------
    
function setMax(max){
    //max = document.getElementById('redInput').value;
	max = 100;
    while(max > 255){
        System.out.println("Please enter value between 0 - 255: ");
        max = input.nextInt();
    }
    this.max = max;
}
    
function setMid(mid){
	mid = 100;
    while(min > 255){
        System.out.println("Please enter value between 0 - 255: ");
        mid = input.nextInt();
    }
    this.mid = mid;
}
    
    
function setMin(min){
	min = 100;
    while(min > 255){
        System.out.println("Please enter value between 0 - 255: ");
        min = input.nextInt();
    }
    this.min = min;
}
    
function setSum(){
    sum = max + mid + min;
}
    
function setIncrement(){
    max = max - 80;
}

//--------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------DISPLAYS------------------------------------------------------
function display(){
    displaySetName();
    displayPrimary();
    displaySecondary();
    displayTertiary();
    displayQuadrary();
    displayGreys();
}
    
function displaySetName(){
    if(increment == 1){
        System.out.println();
        System.out.println("-----FIRST_SET-----");
    }
    else if(increment == 2){
        System.out.println();
        System.out.println("-----SECOND_SET-----");
    }
    else if(increment == 3){
        System.out.println();
        System.out.println("-----THIRD_SET-----");
    }
    else if(increment == 4){
        System.out.println();
        System.out.println("-----FOURTH_SET-----");
    }
    else if(increment == 5){
        System.out.println();
        System.out.println("-----FIFTH_SET-----");
    }
}
    
function displayPrimary(){
    System.out.println();
    System.out.println("Red: " + hex(max) + hex(min) + hex(min));
    System.out.println("Green: " + hex(min) + hex(max) + hex(min));
    System.out.println("Blue: " + hex(min) + hex(min) + hex(max));
}
    
function displaySecondary(){
    System.out.println();
    System.out.println("Red-Green: " + hex(max) + hex(mid) + hex(min));
    System.out.println("Red-Blue: " + hex(max) + hex(min) + hex(mid));
    System.out.println("Green-Red: " + hex(mid) + hex(max) + hex(min));
    System.out.println("Green-Blue: " + hex(min) + hex(max) + hex(mid));
    System.out.println("Blue-Red: " + hex(mid) + hex(min) + hex(max));
    System.out.println("Blue-Green: " + hex(min) + hex(mid) + hex(max));
}
    
function displayTertiary(){
    System.out.println();
    System.out.println("Red-Red-Green: " + hex(max) + hex(mid2) + hex(min));
    System.out.println("Red-Red-Blue: " + hex(max) + hex(min) + hex(mid2));
    System.out.println("Green-Green-Red: " + hex(mid2) + hex(max) + min);
    System.out.println("Green-Green-Blue: " + hex(min) + hex(max) + hex(mid2));
    System.out.println("Blue-Blue-Red: " + hex(mid2) + hex(min) + hex(max));
    System.out.println("Blue-Blue-Green: " + hex(min) + hex(mid2) + hex(max));
}
    
function displayQuadrary(){
    System.out.println();
    System.out.println("True-Red-Green: " + hex(max2) + hex(max2) + hex(min));
    System.out.println("True-Red-Blue: " + hex(max2) + hex(min) + hex(max2));
    System.out.println("True-Green-Blue: " + hex(min) + hex(max2) + hex(min));
}
    
function displayGreys(){
    System.out.println();
    System.out.println("Red-Grey1: " + hex(max) + hex(mid) + hex(mid));
    System.out.println("Green-Grey1: " + hex(mid) + hex(max) + hex(mid));
    System.out.println("Blue-Grey1: " + hex(mid) + hex(mid) + hex(max));
    System.out.println("Red-Grey2: " + hex(max2) + hex(mid2) + hex(mid2));
    System.out.println("Green-Grey2: " + hex(mid2) + hex(max2) + hex(mid2));
    System.out.println("Blue-Grey2: " + hex(mid2) + hex(mid2) + hex(max2));
    System.out.println();
}
    
/**    Displays for RGB instead of HEX
        public void displayPrimary(){
        System.out.println();
        System.out.println("Red: R:" + max + " G:" + min + " B:" + min);
        System.out.println("Green: R:" + min + " G:" + max + " B:" + min);
        System.out.println("Blue: R:" + min + " G:" + min + " B:" + max);
    }
    
    public void displaySecondary(){
        System.out.println();
        System.out.println("Red-Green: R:" + max + " G:" + mid + " B:" + min);
        System.out.println("Red-Blue: R:" + max + " G:" + min + " B:" + mid);
        System.out.println("Green-Red: R:" + mid + " G:" + max + " B:" + min);
        System.out.println("Green-Blue: R:" + min + " G:" + max + " B:" + mid);
        System.out.println("Blue-Red: R:" + mid + " G:" + min + " B:" + max);
        System.out.println("Blue-Green: R:" + min + " G:" + mid + " B:" + max);
    }
    
    public void displayTertiary(){
        System.out.println();
        System.out.println("Red-Red-Green: R:" + max + " G:" + mid2 + " B:" + min);
        System.out.println("Red-Red-Blue: R:" + max + " G:" + min + " B:" + mid2);
        System.out.println("Green-Green-Red: R:" + mid2 + " G:" + max + " B:" + min);
        System.out.println("Green-Green-Blue: R:" + min + " G:" + max + " B:" + mid2);
        System.out.println("Blue-Blue-Red: R:" + mid2 + " G:" + min + " B:" + max);
        System.out.println("Blue-Blue-Green: R:" + min + " G:" + mid2 + " B:" + max);
    }
    
    public void displayQuadrary(){
        System.out.println();
        System.out.println("True-Red-Green: R:" + max2 + " G:" + max2 + " B:" + min);
        System.out.println("True-Red-Blue: R:" + max2 + " G:" + min + " B:" + max2);
        System.out.println("True-Green-Blue: R:" + min + " G:" + max2 + " B:" + min);
    }
    
    public void displayGreys(){
        System.out.println();
        System.out.println("Red-Grey1: R:" + max + " G:" + mid + " B:" + mid);
        System.out.println("Green-Grey1: R:" + mid + " G:" + max + " B:" + mid);
        System.out.println("Blue-Grey1: R:" + mid + " G:" + mid + " B:" + max);
        System.out.println("Red-Grey2: R:" + max2 + " G:" + mid2 + " B:" + mid2);
        System.out.println("Green-Grey2: R:" + mid2 + " G:" + max2 + " B:" + mid2);
        System.out.println("Blue-Grey2: R:" + mid2 + " G:" + mid2 + " B:" + max2);
        System.out.println();
    }*/