/*
	File counter recursive.
*/

var fs = require('fs');


function fileCount(root, extension) {
	const items = fs.readdirSync(root);

	let folders = [];
	let count = 0;

	for(var i=0; i<items.length; i++){
		let path = root + items[i];
		let detail = fs.lstatSync(path);

		if(detail.isFile() && items[i].indexOf(extension)>-1){
			count += 1;
		}

		if(detail.isDirectory()){
			count += fileCount(path + "/", extension);
		}
	}

	return count;
}

console.log(fileCount("./../", ".js"));