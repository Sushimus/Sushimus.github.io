import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.util.Scanner;

/*
TO_DO:
-Round sums to nearest 10
-Port into html
*/

public class ColourGen {
    //whole values
    int max;
    int max2;
    int mid;
    int mid2;
    int min;
    int sum;
    int increment;
    //ratio values
    double maxRat;
    double midRat;
    double minRat;
    
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        ColourGen colours = new ColourGen();
        
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
        colours.math();
        colours.display();
        colours.math();
        colours.display();
        colours.math();
        colours.display();
        colours.math();
        colours.display();
        colours.math();
        colours.display();
    }
    
    
//-----------------------------------------------------------------------------------------------------------------------------\\
//------------------------------------------------------GETTERS_&_SETTERS------------------------------------------------------\\
    public ColourGen(){
        
    }
    
    public int getMax(){
        return max;
    }
    
    public void setMax(int max){
        this.max = max;
    }
    
    public int getMax2(){
        return max2;
    }
    
    public int getMid(){
        return max;
    }
    
    public void setMid(int mid){
        this.mid = mid;
    }
    
    public int getMid2(){
        return mid2;
    }
    
    public int getMin(){
        return mid;
    }
    
    public void setMin(int min){
        this.min = min;
    }
    
    public int getSum(){
        return sum;
    }
    
    public void setSum(){
        sum = max + mid + min;
    }
    
    public void setIncrement(){
        max = max - 80;
    }
    
    
//--------------------------------------------------------------------------------------------------------------------\\
//------------------------------------------------------DISPLAYS------------------------------------------------------\\
    public void display(){
        displaySetName();
        displayPrimary();
        displaySecondary();
        displayTertiary();
        displayQuadrary();
        displayGreys();
    }
    
    public void displaySetName(){
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
    
    public void displayPrimary(){
        System.out.println();
        System.out.println("Red: " + hex(max) + hex(min) + hex(min));
        System.out.println("Green: " + hex(min) + hex(max) + hex(min));
        System.out.println("Blue: " + hex(min) + hex(min) + hex(max));
    }
    
    public void displaySecondary(){
        System.out.println();
        System.out.println("Red-Green: " + hex(max) + hex(mid) + hex(min));
        System.out.println("Red-Blue: " + hex(max) + hex(min) + hex(mid));
        System.out.println("Green-Red: " + hex(mid) + hex(max) + hex(min));
        System.out.println("Green-Blue: " + hex(min) + hex(max) + hex(mid));
        System.out.println("Blue-Red: " + hex(mid) + hex(min) + hex(max));
        System.out.println("Blue-Green: " + hex(min) + hex(mid) + hex(max));
    }
    
    public void displayTertiary(){
        System.out.println();
        System.out.println("Red-Red-Green: " + hex(max) + hex(mid2) + hex(min));
        System.out.println("Red-Red-Blue: " + hex(max) + hex(min) + hex(mid2));
        System.out.println("Green-Green-Red: " + hex(mid2) + hex(max) + min);
        System.out.println("Green-Green-Blue: " + hex(min) + hex(max) + hex(mid2));
        System.out.println("Blue-Blue-Red: " + hex(mid2) + hex(min) + hex(max));
        System.out.println("Blue-Blue-Green: " + hex(min) + hex(mid2) + hex(max));
    }
    
    public void displayQuadrary(){
        System.out.println();
        System.out.println("True-Red-Green: " + hex(max2) + hex(max2) + hex(min));
        System.out.println("True-Red-Blue: " + hex(max2) + hex(min) + hex(max2));
        System.out.println("True-Green-Blue: " + hex(min) + hex(max2) + hex(min));
    }
    
    public void displayGreys(){
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
    
    
//------------------------------------------------------------------------------------------------------------------------------\\
//------------------------------------------------------INTENSE_BASIC_MATH------------------------------------------------------\\
    public void math(){
        calcSet();
        calcMax2();
        calcMid2();
    }
    
    public void calcRatio(){
        double max = this.max;
        double mid = this.mid;
        double min = this.min;
        double sum = this.sum;
        
        maxRat = round(max / sum);
        midRat = round(mid / sum);
        minRat = round(min / sum);
    }
    
    public void calcSet(){
        if(increment == 0){
            if((sum * maxRat < 255) && !((sum * maxRat) + 10 > 255)){
                while((sum * maxRat < 255) && !((sum + 10) * maxRat > 255)){
                    sum = sum + 10;
                }
                max = (int)(sum * maxRat);
                mid = (int)(sum * midRat);
                min = (int)(sum * minRat);
                increment = increment + 1;
            }
            else{
                System.out.println("FIRST_SET_FAILURE");
            }
        }
        else if(increment == 1){
            max = (int)((sum - 80) * maxRat);
            mid = (int)((sum - 80) * midRat);
            min = (int)((sum - 80) * minRat);
            increment = increment + 1;
        }
        else if(increment == 2){
            max = (int)((sum - 160) * maxRat);
            mid = (int)((sum - 160) * midRat);
            min = (int)((sum - 160) * minRat);
            increment = increment + 1;
        }
        else if(increment == 3){
            max = (int)((sum - 240) * maxRat);
            mid = (int)((sum - 240) * midRat);
            min = (int)((sum - 240) * minRat);
            increment = increment + 1;
        }
        else if(increment == 4){
            max = (int)((sum - 320) * maxRat);
            mid = (int)((sum - 320) * midRat);
            min = (int)((sum - 320) * minRat);
            increment = increment + 1;
        }
        else{
        }
    }
    
    public void calcMax2(){
        max2 = (int)((max + mid) / 2);
    }
    
    public void calcMid2(){
        mid2 = (int)((mid + min) / 2);
    }
    
    public double round(double rgbVal){
        DecimalFormat df = new DecimalFormat("#.########");
        df.setRoundingMode(RoundingMode.HALF_UP);
        DecimalFormat df2 = new DecimalFormat("#.#######");
        df2.setRoundingMode(RoundingMode.HALF_UP);
        DecimalFormat df3 = new DecimalFormat("#.######");
        df.setRoundingMode(RoundingMode.HALF_UP);
        DecimalFormat df4 = new DecimalFormat("#.#####");
        df2.setRoundingMode(RoundingMode.HALF_UP);
        DecimalFormat df5 = new DecimalFormat("#.####");
        df.setRoundingMode(RoundingMode.HALF_UP);
        DecimalFormat df6 = new DecimalFormat("#.###");
        df2.setRoundingMode(RoundingMode.HALF_UP);
        DecimalFormat df7 = new DecimalFormat("#.##");
        df2.setRoundingMode(RoundingMode.HALF_UP);
        
        rgbVal = Double.parseDouble(df.format(rgbVal));
        rgbVal = Double.parseDouble(df2.format(rgbVal));
        rgbVal = Double.parseDouble(df3.format(rgbVal));
        rgbVal = Double.parseDouble(df4.format(rgbVal));
        rgbVal = Double.parseDouble(df5.format(rgbVal));
        rgbVal = Double.parseDouble(df6.format(rgbVal));
        
        return Double.parseDouble(df7.format(rgbVal));
    }
    
    public String hex(int rgbVal){
        String hex;
        String firstHex = hexVal(calcFirstHex(rgbVal));
        String secondHex = hexVal(calcSecondHex(rgbVal));
        
        hex = firstHex + secondHex;

        return hex;
    }
    
    public int calcFirstHex(int rgbVal){
        int firstHexCalc;
        
        firstHexCalc = (int)(rgbVal / 16);
        
        return firstHexCalc;
    }
    
    public int calcSecondHex(double rgbVal){
        double secondHexCalc;

        secondHexCalc = ((rgbVal % 16) / 16) * 16;
        
        return (int)(secondHexCalc);
    }
    
    public String hexVal(int hexDigit){
        String hexVal;
        
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
}