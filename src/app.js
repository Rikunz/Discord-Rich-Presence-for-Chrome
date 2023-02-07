const express = require('express')
const bodyParser = require('body-parser')
const RPC = require('discord-rpc');
const client = new RPC.Client({
    transport: "ipc"
});

var clientID = "";
const presence = require('./presence.js')

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());





client.on('ready', () => {

    setInterval(async () => {



        app.post('/', function (req, res) {

            presence(client, req.body);

        });

    }, 1000);




    app.listen(3000, () => console.log(`Started on port 3000!`));




});

client.login({ clientId: clientID }).catch(console.error);






