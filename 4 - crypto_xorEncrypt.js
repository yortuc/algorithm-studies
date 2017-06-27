var text = process.argv[2];
var key = process.argv[3];

const xorEncrypt = (text, key)=> {
	return text.split('').map((chr, i)=> {
		let keyIndex = i % key.length;
		let charCode = text[i].charCodeAt(0) ^ key[keyIndex].charCodeAt(0);
		let encryptedChar = String.fromCharCode(charCode);
		console.log(i, chr, keyIndex, charCode, encryptedChar);
		return String.fromCharCode(charCode);
	}).join('-');
}

console.log(xorEncrypt(text, key));