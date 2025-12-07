const fs = require('fs');
const path = require('path');
const wd = path.resolve(path.join(__dirname, '..'));
const types_dir = path.join(wd, 'dist/src');
if(!fs.existsSync(types_dir)) {
	console.warn('⚠️ types_dir not exists, types may not be generated');
	return;
}
fs.readdirSync(types_dir).forEach(file => {
	fs.renameSync(path.join(types_dir, file), path.join(wd, 'dist', file));
});
fs.rmSync(types_dir, { recursive: true });
console.log('✔️ types moved to dist');
