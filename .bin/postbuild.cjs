const fs = require('fs');
const path = require('path');
const wd = path.resolve(path.join(__dirname, '..'));
fs.readdirSync(path.join(wd, 'dist/src')).forEach(file => {
	fs.renameSync(path.join(wd, 'dist/src', file), path.join(wd, 'dist', file));
});
fs.rmSync(path.join(wd, 'dist/src'), { recursive: true });
