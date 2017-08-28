var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var logger = require('morgan')

var app = express()


/* art-template */
var template = require('art-template')
template.config('base', '')
template.config('extname', '.html')
app.engine('.html', template.__express)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => { res.redirect('/books/list') })

app.use('/books/',require('./routes/books'))


app.listen(3333, () => {
    console.log('the server is running in 3333~~~')
})
