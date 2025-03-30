import colors from 'colors'
import server from './server'
//Routing

const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(colors.blue.bold( "Servidor Funcioando en :"), port)
})

