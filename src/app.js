//MODULES
const express = require('express')
const app = express()
const router = require('../routes/index')
const path = require('path')
//SETTINGS
app.set('port', '3000')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.engine('html' , require('ejs').renderFile)

//MIDDELWARES
app.use(router)
app.use(express.static(path.join(__dirname, 'public')))


//SERVER LISTENING
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`)
    
})

