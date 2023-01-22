//------------------------------------------------------------------------------------------------------Change Background Start Here------------------------------------------------------------------------------------------------------
window.onload = function backgroundShift() {
//Assigning const based on user environment
const now = new Date()
const day = now.getDay()
const days = ['0', '1', '2', '3', '4', '5', '6'];
const date = new Date();
const hours = now.getHours()
const screenSize = window.matchMedia("(min-aspect-ratio: 16/9)");

const getWallpaperPath = (day, hours) => {
  return hours < 18 
    ? `https://sushimus.github.io/assets/backgrounds/${day}/day1.png`
    : `https://sushimus.github.io/assets/backgrounds/${day}/night1.png`
}
const getWallpaperPathSmall = (day, hours) => {
  return hours < 18 
    ? `https://sushimus.github.io/assets/backgrounds/${day}/day2.png`
    : `https://sushimus.github.io/assets/backgrounds/${day}/night2.png`
}



//Setting background based on results
if (document.getElementById('body') && screenSize.matches){
	document.getElementById('body').style.backgroundImage = "url(\"" + `${getWallpaperPath(days[date.getDay()], date.getHours())}` + "\")";
}
else{
	document.getElementById('body').style.backgroundImage = "url(\"" + `${getWallpaperPathSmall(days[date.getDay()], date.getHours())}` + "\")";
}
document.getElementById('body').style.backgroundRepeat = "no-repeat";
document.getElementById('body').style.backgroundAttachment = "fixed";
document.getElementById('body').style.backgroundSize = "100vw 100vh";
}

//const getBorderPath = (hours) => {
//  return hours < 18 
//    ? `https://sushimus.github.io/assets/borderDay.png`
//    : `https://sushimus.github.io/assets/borderNight.png`
//}
//document.getElementById('border').style.borderImage = "url(\"" + `$getBorderPath(date.getHours())` + "\")";