const appRouterFactory = require('./routes/router-factory');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/api/faasos', appRouterFactory);

app.listen(port, () => {
    console.log("Listening on port ",port);
});


