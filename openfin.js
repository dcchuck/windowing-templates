const path = require('path');
const openfinLauncher = require('openfin-launcher');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App served on port ${port}`);
    openfinLauncher.launchOpenFin({
        configPath: 'http://localhost:3000/app.json'
    })
    .then(function(e) {
        console.log('Exiting OpenFin!');
        process.exit();
    })
    .fail(function(error) {
        console.log('error!', error);
    });
});