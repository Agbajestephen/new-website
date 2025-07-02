const express = require('express')

const app = express()
const port = 3000

//stactic files
app.use(express.static('public'))
app.use('/css', express.static(__dirname +'public/css'))
app.use('/img', express.static(__dirname +'public/img'))
app.use('/js', express.static(__dirname +'public/js'))

//templating engine
app.set('views','./src/views/partials')
app.set('view engine', 'ejs')

//Routes
const newsRouter = require('./src/routes/news')

app.use('/', newsRouter) 
//listen on port 3000
app.listen(port,() => console.log('listening on port ${port}'))