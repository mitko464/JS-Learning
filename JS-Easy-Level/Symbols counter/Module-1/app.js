// Module - 1 

// #js-message - id for textarea
var message = document.getElementById('js-message');

// #js-message-left-total - count total symbols
var totalSymbols = document.getElementById('js-message-left-total');

// #js-message-left-symbols - id for counting remaining symbols
var leftSymbols = document.getElementById('js-message-left-symbols');

// add keyup event listener to #js-message above, and when user put something, count all textarea symbols and insert it to #js-message-left-total

message.addEventListener('keyup', function() {
	totalSymbols.innerHTML = this.value.length;
});