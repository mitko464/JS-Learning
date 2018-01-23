// Module - 3

// TextCounter

var TextCounter = {
	maxChar: 10,
	textArea: null,
	textAreaTotal: null,
	textAreaLeft: null,
	init: function() {
		this.textArea = document.querySelector('#js-message');
		this.textAreaTotal = document.querySelector('#js-message-left-total');
		this.textAreaLeft = document.querySelector('#js-message-left-symbols');

		this.resetCharacterValues();
		this.events();
	},

	events: function() {
		var that = this;
		// Keyup
		this.textArea.addEventListener('keyup', this.calculateCharacterValues.bind(this));

		// Keypress
		this.textArea.addEventListener('keypress', function(event) {
			if (this.value.length < that.maxChar) {
				that.calculateCharacterValues();
			} else {
				event.preventDefault();
			}
		});
	},

	resetCharacterValues: function() {
		this.textAreaLeft.innerHTML = this.maxChar;
		this.textAreaTotal.innerHTML = 0;
	},

	calculateCharacterValues: function() {
		this.textAreaTotal.innerHTML = this.textArea.value.length;
		this.textAreaLeft.innerHTML = this.maxChar - this.textArea.value.length;
	}
};

TextCounter.init();