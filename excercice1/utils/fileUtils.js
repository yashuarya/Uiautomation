const fs = require('fs');
const path = require('path');

const writeToFile = (filename, data) => {
    const filePath = path.join(__dirname, filename);
    fs.writeFileSync(filePath, data, { encoding: 'utf8', flag: 'w' });
};

module.exports = { writeToFile };
