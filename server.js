const express = require('express')
const app = express()

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

app.set('view engine', 'ejs')
app.get('/', function(req, res){
    res.render('pages/index')
})

app.listen(8080)
console.log('servidor rodando')