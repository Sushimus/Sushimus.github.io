var quotes = [
	'Chex Cinnamon',
	'Fruity Pebbles',
	'Cinnamon Toast Crunch',
	'Fruity Dino Bites',
	'Special K Red Berry'
]

function getReview() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('cerealReview').innerHTML = quotes[randomNumber];
}