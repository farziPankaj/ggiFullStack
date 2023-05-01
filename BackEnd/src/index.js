const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const host = process.env.host;
const portNumber = process.env.portNumber ? process.env.portNumber : 8800;
const url = `${process.env.url}:${portNumber}`;
const localDBUrl = process.env.LOCAL_DB_URL;

const routes = require('./routes/route');
const connectDB = require('./db/connectionDB');

// to parse url-encoded data => params and query params data
// to parse data in json format and body data is usually in json format
app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(cors());

// heartBeat api
app.get('/', (_, res) => {
    console.log(`Server is running fine`);
    res.status(200).send({
        statusCode: 200,
        success: true,
        status: `OK`,
        message: `Server is up and running`
    });
});

app.use(routes);

// handle 404 Not Found
app.use((_, res) => {
    res.status(404).json({
        status: 404,
        message: 'Not Found'
    });
});

async function startServer() {
    console.log("-----------------In index file & startServer method-------------");
    try{
        await connectDB(localDBUrl);
        app.listen(portNumber, host, (err) => {
            if(!err) {
                console.log(`Server is running and listening on port: ${portNumber} and host: ${host}`);
                console.log(`To access the http server run the following url in browser: ${url}`);
            } else {
                console.log(`Error occurred, server can't start: ${err}`);
            }
        });
    }catch(err){
        console.log("---------------In catch block of index file & startServer method-------------");
        console.log(`Server can't start - connection to DataBase cannot establish\n${err}`);
    }
};

startServer();

