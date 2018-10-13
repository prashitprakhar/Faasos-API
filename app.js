const appRouterFactory = require('./routes/router-factory');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const port = process.env.PORT || 8080;
const http = require('http');
const socketIo = require('socket.io');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//app.use(express.static(__dirname+'dist/faasos-spa'));

if (process.env.NODE_ENV !== 'production') {
	app.use(express.static('dist/faasos-spa'));
}


app.use('/api/faasos', appRouterFactory);

app.all('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/faasos-spa','index.html'));
})

// app.listen(port, () => {
//     console.log("Listening on port ",port);
// });
const server = http.Server(app);
server.listen(port);

const io = socketIo(server);

io.on('connection', (socket) => {
    socket.on('question', function(data){
        //var messageToSendBack = '';
            // botQuestionModel.find().then((details) => {
            //     return new Promise((resolve, reject) => {
            //         let searchedQuestion = checkQuestion(data, details).then((res) => {
            //             details[0]['keywords'].forEach(eachQuestion => {
            //             if(eachQuestion.message.toLowerCase() === res.toLowerCase()) {
            //                 resolve(
            //                 //messageToSendBack = eachQuestion.answer;
            //                 console.log("found : ",eachQuestion),
            //                 socket.emit('botMessage', {
            //                     chatbot : eachQuestion
            //                 })
            //             )
            //             return 0;
            //             }
            //         });
            //     })
            //     reject("not found result");
            //     }, (err) => {
            //         console.log("error Occured")
            //     });
            // });
    })
    console.log("Triggered");
}
);


