const restify = require('restify')
const port = 3000

const server = restify.createServer()

server.use(restify.plugins.bodyParser())

const names = [
    {
        name: 'Henri',
        meaning: 'O governante da casa, senhor do lar'
    },
    {
        name: 'Joviane',
        meaning: 'Presente de Júpiter'
    },
    {
        name: 'Luna',
        meaning: 'Lua, a iluminada, a feminina'
    }
]

server.get('/', function(req, res) {
    res.send({msg: "Home"})
})

server.get('/nome', (req, res) => {
    res.send(names)
})

server.post('/nome', (req, res) => {
    const name = req.body

    names.push(name)
})

server.del('/nome/:id', (req, res) => {
    const id = req.params.id

    console.log(id)

    res.send('foi')
})

server.listen(port, function() {
    console.log(`Server On em http://localhost:${port}`)
    console.log('Derrubar server: ctrl + C')
})

