const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'build', 'api.js');
const destination = path.join(__dirname, 'functions', 'api.js');

fs.copyFileSync(source, destination);
console.log('Bundled function copied to functions directory.');