// Module - 2 

// write functionality which stop entering more than 140 symbols
// allow user to use next keys in textarea: all arrows, backspace, insert, delete, home, end.

var message = document.getElementById('js-message');
var totalSymbols = document.getElementById('js-message-left-total');
var leftSymbols = document.getElementById('js-message-left-symbols');
var allowedKeys = [35,36,37,38,39,40,45];
var max = 10;
var symbolCount = -1;

leftSymbols.innerHTML = max;

function updateLeftSymbols() {
	return max - message.value.length;
}

symbolCount = updateLeftSymbols(); 

message.addEventListener('keypress', function(event) {
	symbolCount = updateLeftSymbols(); 
	if (symbolCount <= 0) {
		event.preventDefault();
	}
});

message.addEventListener('keyup', function(event) {
	symbolCount = updateLeftSymbols(); 
	if (symbolCount > 0) {
		leftSymbols.innerHTML = symbolCount;

		if (allowedKeys.indexOf(event.keyCode) === -1) {
			totalSymbols.innerHTML = this.value.length;
		}
	} else {
		leftSymbols.innerHTML = 0;
		totalSymbols.innerHTML = max;
	}
});