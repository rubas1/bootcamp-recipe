const express = require('express')
const urllib = require('urllib')
const path = require('path')
const app = express()
const port = 8080

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/sanity', function (request, response) {
    response.send( "ok")
})

app.get('/recipes/:ingredient', function (request, response) {
    let ingredient = request.params.ingredient
    urllib.request('https://recipes-goodness.herokuapp.com/recipes/'+ingredient, function(err, res){
        let data = JSON.parse(res.toString())
        let resArr = data.results.map(ele => {return{
            ingredients: ele.ingredients,
            title: ele.title,
            thumbnail: ele.thumbnail,
            href: ele.href
        }})
        response.send(resArr)
    })
})

app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})