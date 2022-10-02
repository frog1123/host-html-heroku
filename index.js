const express = require('express');
const path = require('path');

// this code will host the html files

const app = express();

// heroku uses its own ports but for local it will use 3000
const port = process.env.PORT || 3000;

// sends files in the pages folder when on the root route
app.use('/', express.static(path.join(__dirname, './pages/')));

app.listen(port, () => console.log(`listening on port ${port}`));
