import fs from 'fs';
import path from 'path';
import * as sass from 'sass-embedded';

const stylesPath = path.join(process.cwd(), 'src/styles');
const distPath = path.join(process.cwd(), 'dist/styles');

if(!fs.existsSync(distPath)) fs.mkdirSync(distPath, { recursive: true });

fs.readdirSync(stylesPath).forEach((file) => {
	if(file.startsWith('_') ||!file.endsWith('.scss')) return;
	sass.compileAsync(path.join(stylesPath, file)).then((result) => {
		fs.writeFileSync(path.join(distPath, file.replace('.scss', '.css')), result.css);
	});
});