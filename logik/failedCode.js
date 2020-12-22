//------------------------------------------------------------------------------------------------------Better Randomizer Script Start Here------------------------------------------------------------------------------------------------------
function getIdea() {
   var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73];
   var i = arr.length, k , temp;      // k is to generate random index and temp is to swap the values
   while(--i > 0){
      k = Math.floor(Math.random() * (i+1));
      temp = arr[k];
      arr[k] = arr[i];
      arr[i] = temp;
   }
   var arrSingle = 
   document.write(arr);
}

//------------------------------------------------------------------------------------------------------First Background Script Start Here------------------------------------------------------------------------------------------------------
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
				document.getElementById('body').style.background = "url('../website/backgrounds/0/day1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../website/backgrounds/0/day2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}

		else {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../website/backgrounds/0/night1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../website/backgrounds/0/night2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}
	break;
	
//----------------------------------------------------------------------------Monday----------------------------------------------------------------------------
	case 1:
		if (7 <= currentTime && currentTime < 20) {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../website/backgrounds/1/day1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../website/backgrounds/1/day2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}

		else {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../website/backgrounds/1/night1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../website/backgrounds/1/night2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}
	break;
	
//----------------------------------------------------------------------------Tuesday----------------------------------------------------------------------------
	case 2:
		if (7 <= currentTime && currentTime < 20) {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../website/backgrounds/2/day1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../website/backgrounds/2/day2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}

		else {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../website/backgrounds/2/night1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../website/backgrounds/2/night2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}
	break;

//----------------------------------------------------------------------------Wednesday----------------------------------------------------------------------------
	case 3:
		if (7 <= currentTime && currentTime < 20) {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../website/backgrounds/3/day1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../website/backgrounds/3/day2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}

		else {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../website/backgrounds/3/night1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../website/backgrounds/3/night2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}
	break;
	
//----------------------------------------------------------------------------Thursday----------------------------------------------------------------------------
	case 4:
		if (7 <= currentTime && currentTime < 20) {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../website/backgrounds/4/day1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../website/backgrounds/4/day2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}

		else {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../website/backgrounds/4/night1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../website/backgrounds/4/night2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}
	break;
	
//----------------------------------------------------------------------------Friday----------------------------------------------------------------------------
	case 5:
		if (7 <= currentTime && currentTime < 20) {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../website/backgrounds/5/day1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../website/backgrounds/5/day2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}

		else {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../website/backgrounds/5/night1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../website/backgrounds/5/night2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}
	break;
	
//----------------------------------------------------------------------------Saturday----------------------------------------------------------------------------
	case 6:
		if (7 <= currentTime && currentTime < 20) {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../website/backgrounds/6/day1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../website/backgrounds/6/day2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}

		else {
			if (document.getElementById('body') && screenSize.matches) {
				document.getElementById('body').style.background = "url('../website/backgrounds/6/night1.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
			else {
				document.getElementById('body').style.background = "url('../website/backgrounds/6/night2.png') no-repeat fixed";
				document.getElementById('body').style.backgroundSize = "100vw 100vh";
			}
		}
	break;
	
	default: document.getElementById('body').style.background = "url('test1.png) no-repeat fixed, url('../test1.png') no-repeat fixed"
	}
}
//------------------------------------------------------------------------------------------------------Failed Background Optimization Start Here------------------------------------------------------------------------------------------------------
window.onload = function backgroundShift() {
	var date = new Date();
	var dateLetter = {
		A: date = 0,
		B: date = 1,
		C: date = 2,
		D: date = 3,
		E: date = 4,
		F: date = 5,
		G: date = 6
	};
	var currentTime = new Date().getHours();
	var currentTimeLetter = {
		A:  currentTime == 8 || currentTime == 9 || currentTime == 10 || currentTime == 11 || currentTime == 12 || currentTime == 13 || currentTime == 14 ||currentTime == 15 || currentTime == 16 || currentTime == 17 || currentTime == 18 || currentTime == 19,
		B:  currentTime == 20 || currentTime == 21 || currentTime == 22 || currentTime == 23 || currentTime == 0 || currentTime == 1 || currentTime == 2 || currentTime == 3 ||currentTime == 4 || currentTime == 5 || currentTime == 6 || currentTime == 7
	};
	var screenSize = window.matchMedia("(min-aspect-ratio: 16/9)");
	var screenSizeLetter = {
		A: screenSize.matches,
		B: screenSize.matches != true
	};
	
	var s1 = dateLetter.A,
		s2 = currentTimeLetter.A,
		s3 = screenSizeLetter.A;
	
	switch (s1 | s2 | s3) {
		case dateLetter.A & currentTimeLetter.A & screenSizeLetter.A :
			document.getElementById('body').style.background = "url('test.png') no-repeat fixed, url('../test.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		case dateLetter.A & currentTimeLetter.A & screenSizeLetter.B :
			document.getElementById('body').style.background = "url('mondayDay2.png') no-repeat fixed, url('../mondayDay2.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		case dateLetter.A & currentTimeLetter.B & screenSizeLetter.A :
			document.getElementById('body').style.background = "url('tuesdayNight1.png') no-repeat fixed, url('../tuesdayNight1.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		case dateLetter.A & currentTimeLetter.B & screenSizeLetter.B :
			document.getElementById('body').style.background = "url('tuesdayNight2.png') no-repeat fixed, url('../tuesdayNight2.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;	
		
		case dateLetter.B & currentTimeLetter.A & screenSizeLetter.A :
			document.getElementById('body').style.background = "url('mondayDay1.png') no-repeat fixed, url('../mondayDay1.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		case dateLetter.B & currentTimeLetter.A & screenSizeLetter.B :
			document.getElementById('body').style.background = "url('mondayDay2.png') no-repeat fixed, url('../mondayDay2.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		case dateLetter.B & currentTimeLetter.B & screenSizeLetter.A : 
			document.getElementById('body').style.background = "url('tuesdayNight1.png') no-repeat fixed, url('../tuesdayNight1.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		case dateLetter.B & currentTimeLetter.B & screenSizeLetter.B :
			document.getElementById('body').style.background = "url('tuesdayNight2.png') no-repeat fixed, url('../tuesdayNight2.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		
		case dateLetter.C & currentTimeLetter.A & screenSizeLetter.A :
			document.getElementById('body').style.background = "url('mondayDay1.png') no-repeat fixed, url('../mondayDay1.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		case dateLetter.C & currentTimeLetter.A & screenSizeLetter.B :
			document.getElementById('body').style.background = "url('mondayDay2.png') no-repeat fixed, url('../mondayDay2.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		case dateLetter.C & currentTimeLetter.B & screenSizeLetter.A :
			document.getElementById('body').style.background = "url('tuesdayNight1.png') no-repeat fixed, url('../tuesdayNight1.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		case dateLetter.C & currentTimeLetter.B & screenSizeLetter.B :
			document.getElementById('body').style.background = "url('tuesdayNight2.png') no-repeat fixed, url('../tuesdayNight2.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		
		case dateLetter.D & currentTimeLetter.A & screenSizeLetter.A :
			document.getElementById('body').style.background = "url('mondayDay1.png') no-repeat fixed, url('../mondayDay1.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		case dateLetter.D & currentTimeLetter.A & screenSizeLetter.B :
			document.getElementById('body').style.background = "url('mondayDay2.png') no-repeat fixed, url('../mondayDay2.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		case dateLetter.D & currentTimeLetter.B & screenSizeLetter.A :
			document.getElementById('body').style.background = "url('tuesdayNight1.png') no-repeat fixed, url('../tuesdayNight1.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		case dateLetter.D & currentTimeLetter.B & screenSizeLetter.B :
			document.getElementById('body').style.background = "url('tuesdayNight2.png') no-repeat fixed, url('../tuesdayNight2.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		
		case dateLetter.E & currentTimeLetter.A & screenSizeLetter.A :
			document.getElementById('body').style.background = "url('mondayDay1.png') no-repeat fixed, url('../mondayDay1.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		case dateLetter.E & currentTimeLetter.A & screenSizeLetter.B :
			document.getElementById('body').style.background = "url('mondayDay2.png') no-repeat fixed, url('../mondayDay2.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		case dateLetter.E & currentTimeLetter.B & screenSizeLetter.A :
			document.getElementById('body').style.background = "url('tuesdayNight1.png') no-repeat fixed, url('../tuesdayNight1.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		case dateLetter.E & currentTimeLetter.B & screenSizeLetter.B :
			document.getElementById('body').style.background = "url('tuesdayNight2.png') no-repeat fixed, url('../tuesdayNight2.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		
		case dateLetter.F & currentTimeLetter.A & screenSizeLetter.A :
			document.getElementById('body').style.background = "url('mondayDay1.png') no-repeat fixed, url('../mondayDay1.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		case dateLetter.F & currentTimeLetter.A & screenSizeLetter.B :
			document.getElementById('body').style.background = "url('mondayDay2.png') no-repeat fixed, url('../mondayDay2.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		case dateLetter.F & currentTimeLetter.B & screenSizeLetter.A :
			document.getElementById('body').style.background = "url('tuesdayNight1.png') no-repeat fixed, url('../tuesdayNight1.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		case dateLetter.F & currentTimeLetter.B & screenSizeLetter.B :
			document.getElementById('body').style.background = "url('tuesdayNight2.png') no-repeat fixed, url('../tuesdayNight2.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		
		case dateLetter.G & currentTimeLetter.A & screenSizeLetter.A :
			document.getElementById('body').style.background = "url('mondayDay1.png') no-repeat fixed, url('../mondayDay1.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		case dateLetter.G & currentTimeLetter.A & screenSizeLetter.B :
			document.getElementById('body').style.background = "url('mondayDay2.png') no-repeat fixed, url('../mondayDay2.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		case dateLetter.G & currentTimeLetter.B & screenSizeLetter.A :
			document.getElementById('body').style.background = "url('tuesdayNight1.png') no-repeat fixed, url('../tuesdayNight1.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		case dateLetter.G & currentTimeLetter.B & screenSizeLetter.B :
			document.getElementById('body').style.background = "url('tuesdayNight2.png') no-repeat fixed, url('../tuesdayNight2.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
		
		default:
			document.getElementById('body').style.background = "url('test.png') no-repeat fixed, url('../test.png') no-repeat fixed";
			document.getElementById('body').style.backgroundSize = "100vw 100vh";
		break;
	}
}