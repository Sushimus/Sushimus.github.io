var Points = 15;
var Rolled = 0;

//TODO: If 15 kills player it doesn't reenable
function Navigate(type, input){
	var inputID = parseInt(`${input.id}`);
	
	//check player proximity
	if(inputID == 15 || inputID == 115){
		//check function type
		if(type == 'choices'){
			Choices(input);
		}
		else{
			Combat(input);
		}
	}
	else if(inputID < 100){
		if(document.getElementById(`${inputID - 5}`).onclick == null || document.getElementById(`${inputID + 95}`).onclick == null){
			if(type == 'choices'){
				Choices(input);
			}
			else{
				Combat(input);
			}
		}
		else{
			console.log("You can't jump ahead");
		}
	}
	else if(100 < inputID){
		if(document.getElementById(`${inputID - 5}`).onclick == null || document.getElementById(`${inputID - 105}`).onclick == null){
			if(type == 'choices'){
				Choices(input);
			}
			else{
				Combat(input);
			}
		}
		else{
			console.log("You can't jump ahead");
		}
	}
	else{
		console.log("NAVIGATE_ERROR");
	}
}

function Combat(combat){
	var roll = Roll();
	
	if(Points == combat.id){
		if(roll < 4){
			Die();
		}
		else{
			Points += 5;
		}
	}
	else if(Points == combat.id + 5){
		if(roll < 3){
			Die();
		}
		else{
			Points += 5;
		}
	}
	else if(Points == combat.id - 5){
		if(roll < 5){
			Die();
		}
		else{
			Points += 5;
		}
	}
	else if(Points >= combat.id + 10){
		if(roll < 2){
			Die();
		}
		else{
			Points += 5;
		}
	}
	else if(Points <= combat.id - 10){
		if(roll < 6){
			Die();
		}
		else{
			Points += 5;
		}
	}
	else{
		console.log("COMBAT_ERROR");
	}
	
	EndTurn(combat);
}

function Choices(choices){
	var roll = Roll();
	
	if(roll < 3){
		Points -= 5;
	}
	else{
		Points += 5;
	}

	
	EndTurn(choices);
}

function Die(){
	location.reload();
}

function EndTurn(input){
	input.onclick = null;
	
	document.getElementById('roll').innerHTML = `Roll: ${Rolled}`;
	document.getElementById('points').innerHTML = `Score: ${Points}`;
}

function Roll(){
	Rolled = Math.floor(Math.random() * 6) + 1;
	return Rolled;
}