var text = process.argv[2];
var shiftCount = parseInt(process.argv[3], 10);

const caesar = (text, shiftCount)=> 
	text.split('').map((chr)=> 
		String.fromCharCode( chr.charCodeAt(0) + shiftCount ))
	.join('');


console.log("Text        : " + text + " (Shift Count:" + shiftCount + ")");
console.log("Crypted text: " + caesar(text, shiftCount));