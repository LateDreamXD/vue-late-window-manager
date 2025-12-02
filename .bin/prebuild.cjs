const fs = require('fs');
const path = require('path');
const dist_dir = path.join(__dirname, '..', 'dist');
if(!fs.existsSync(dist_dir)) {
	console.log('ℹ️noneed to clean');
	return;
}
fs.rmSync(dist_dir, { recursive: true });
console.log('✔️cleaned last build');
