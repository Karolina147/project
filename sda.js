
var sekunda = 3;
var newFunction;

function countDown(answer) {
    if(sekunda<=0)
	{ 
        document.getElementById('click1').innerHTML= 'Oczywiście NIE' ; // jak wpisać oryginalny tekst z HTMLa czyli "NIE"
        
	}
	else {
	    sekunda=sekunda-1;
		document.getElementById('click1').innerHTML = 'Jeszcze chwila na zastanowienie się...' + sekunda +' sek';
        setTimeout("countDown()",1000)
    }
}