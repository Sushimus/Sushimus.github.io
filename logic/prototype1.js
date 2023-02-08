var points = 15;
var rolled = 0;
var currentID = 0;

function GetID(input){
	return inputID = parseInt(input.id.slice(6));
}

function Navigate(type, input){
	inputID = GetID(input);
	
	if(type == 'dialog' || type == 'combat'){
		if(inputID == currentID + 1|| inputID == currentID){
			if(type == 'dialog'){
				Dialog();
			}
			else{
				Combat(inputID);
			}
		}
		else if(inputID < currentID){
			console.log("NO GOING BACK, MISSED CHANCES ARE LOST FOREVER");
			input.onclick = null;
			return;
		}
		else{
			console.log("STOP TRYING TO SKIP SECTIONS YOU WORTHLESS SWINE");
			return;
		}
	}
	else if(type == 'boss'){
		if(inputID == currentID / 3){
			Combat(inputID);
		}
		else{
			console.log("STOP TRYING TO SKIP SECTIONS YOU WORTHLESS SWINE");
			return;
		}
	}
	else{
		console.log("TYPE_NOT_FOUND");
	}
	
	EndTurn(input);
}

function Combat(inputID){
	var roll = Roll();
	
	if(points == (inputID * 5) + 10){
		if(roll < 4){
			Die();
		}
	}
	//Player has advantage
	else if(points == (inputID * 5) + 5){
		if(roll < 3){
			Die();
		}
	}
	//Player has huge advantage
	else if(points >= (inputID * 5) + 10){
		if(roll < 2){
			Die();
		}
	}
	//Enemy has advantage
	else if(points == (inputID * 5) - 5){
		if(roll < 5){
			Die();
		}
	}
	//Enemy has huge advantage
	else if(points <= (inputID * 5) - 10){
		if(roll < 6){
			Die();
		}
	}
	else{
		console.log("COMBAT_ERROR");
	}
}

function Die(){
	location.reload();
}

function Dialog(inputID){
	var roll = Roll();
	
	if(roll < 3){
		points -= 10;
	}
}

function EndTurn(inputElement){
	inputElement.onclick = null;
	points += 5;
	
	if(currentID < inputID){
		currentID++;
	}
	
	document.getElementById('roll').innerHTML = `<b>Roll: ${rolled}</b>`;
	document.getElementById('points').innerHTML = `<b>Score: ${points}</b>`;
}

function Roll(){
	rolled = Math.floor(Math.random() * 6) + 1;
	return rolled;
}