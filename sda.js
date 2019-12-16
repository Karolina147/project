var lastValue, newFunction, second;

second = 3;
previousValue = document.getElementById('odp1').innerHTML;


// Użycie operatora przypisania `=` nadpisuje poprzedni stan (wartość). Musisz zapamiętać stan, zanim go usuniesz :)

lastValue = document.getElementById('click1');
function countDown(answer) {
    if (second <= 0) {
        document.getElementById('click1').innerHTML = lastValue;
	} 
	if (second == 0) {
		return previousValue();
	}
	else {
		second = second - 1;
		document.getElementById('click1').innerHTML = 'Jeszcze chwila na zastanowienie się...' + second +' sek';
		setTimeout(countDown, 1000);
    }
}