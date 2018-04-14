const restify = require('restify')
const port = 3000

const server = restify.createServer()

server.get('/', function(req, res) {
    res.send({msg: "Home"})
})

server.listen(port, function() {
    console.log(`Server On em http://localhost:${port}`)
    console.log('Derrubar server: ctrl + C')
})

