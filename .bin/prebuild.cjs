const path = require('path');
require('fs').rmSync(path.resolve(path.join(__dirname, '..', 'dist')), { recursive: true });