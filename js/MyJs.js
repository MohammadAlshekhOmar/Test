

window.onload = function() {
	'use strict';

	window.scrollTo(0,0);
}

var MyButton = document.getElementById('MyButton');

var MyInput = document.getElementById('Password');

var GoUp = document.getElementById('goup');

MyButton.onclick = function() {
	'use strick';

	if(this.textContent === "Show Password") {
		MyInput.setAttribute('type' , 'text');
		this.textContent = "Hidden Password";
	}
	else {
		MyInput.setAttribute('type' , 'password');
		this.textContent = "Show Password";
	}
}

window.onscroll = function() {
	'use strict';

	if(window.pageYOffset >= 1500) {
		GoUp.style.display = 'block';

	}
	else {
		GoUp.style.display = 'none';
	}
}

GoUp.onclick = function() {
	'use strict';

	window.scrollTo(0,0);
}

var MyTextArea = document.getElementById('TextArea'),
	MySpan = document.getElementById('MySpan');


MyTextArea.onkeyup = function() {
	'use strict';

	MySpan.textContent = 50 - MyTextArea.value.length;

	if(MySpan.textContent < 0) {
		MySpan.style.color = '#F00';
	}
	else {
		MySpan.style.color = '#000'
	}

}

var myDiv = document.getElementById('myDiv'); 

var Chars = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
	SerialLen = 16,
	i,
	random,
	serial = '';

function myFun() {
	'use strict';
	serial = '';
	for(i = 0; i < SerialLen; i++) {
		random = Math.floor(Math.random() * Chars.length);
		if(i % 4 == 0 && i != 0) {
			serial+= '-';
		}
		serial += Chars[random];
	}
	myDiv.textContent = serial;
}

var myInputEmail = document.getElementById('Email');

myInputEmail.onfocus = function() {
	'use strict';

	if(this.placeholder === "Type Your Email") {
		this.placeholder = "";
	}
}

myInputEmail.onblur = function() {
	'use strict';

	if(this.placeholder ===  "") {
		this.placeholder = "Type Your Email";
	}
}