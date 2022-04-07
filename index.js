const express = require('express')
const app = express()
const PORT = 9000

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

const connection = app.listen(PORT, ()=>{
    console.log('app listeining at ' + PORT);
})

var io = require('socket.io')(connection)
io.on('connection', (socket)=>{
    console.log('New user has connected');

    socket.on('newMessage', (message)=>{
        io.emit('incoming', message)
        console.log(message);
    })
})
