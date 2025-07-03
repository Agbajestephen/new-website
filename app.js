// Importing the express module to create a web server
// Importing body-parser to parse incoming request bodies

const express = require('express')
const bodyparser = require('body-parser')

const app = express()
const port = 5000

//stactic files
// Using express.static middleware to serve static files from the 'public' directory
// This allows the server to serve CSS, images, and JavaScript files from the specified directories

app.use(express.static('public'))
app.use('/css', express.static(__dirname +'public/css'))
app.use('/img', express.static(__dirname +'public/img'))
app.use('/js', express.static(__dirname +'public/js'))

//templating engine
// Setting the views directory to './src/views/partials' and using EJS as the templating engine

app.set('views','./src/views/partials')
app.set('view engine', 'ejs')

//body parser

app.use(bodyparser.urlencoded({extended: true}))

//Routes 
// Importing the news router from the routes directory
// This router handles the main news page and individual article pages

const newsRouter = require('./src/routes/news')

// Using the news router for the root path and '/article' path
// This means that requests to '/' and '/article' will be handled by the newsRouter

app.use('/', newsRouter)
app.use('/article', newsRouter)

// Error handling
//listen on port 3000

app.listen(port,() => console.log('listening on port ${port}'))