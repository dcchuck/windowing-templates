const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'dist', 'modalImplementationOne.js'),
    output: {
        path: path.resolve(__dirname, 'public', 'js'),
        filename: 'modalImplementationOne.js'
    }
}