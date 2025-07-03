const express = require('express')
const newsRouter = express.Router()
const axious = require('axios')

// This route handles the main news page to fetch all articles from the API and render them.
// It uses the 'axios' library to make HTTP requests to the WordPress REST API.

newsRouter.get('', async(req, res) =>{
    try{
        const newsAPI =await axious.get('https://raddy.dev/wp-json/wp/v2/posts')
        res.render('news', {articles:newsAPI.data})
    }catch(err) {
        if(err.response){
            res.render('news', {articles : null})
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }else if(err.request){
            res.render('news', {articles : null})
            console.log(err.request)
        }else{
            res.render('news', {articles : null})
            console.log('Error', err.meassage)
        }    
    }
})

module.exports = newsRouter

// This route handles the individual news article display to get the article ID from the URL
// and fetches the article details from the API.

newsRouter.get('/:id', async(req, res) =>{
    let articleID = req.params.id

    try{
        const newsAPI =await axious.get(`https://raddy.dev/wp-json/wp/v2/posts/${articleID}`)
        res.render('newsSingle', {article:newsAPI.data})
    }catch(err) {
        if(err.response){
            res.render('newsSingle', {article : null})
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }else if(err.request){
            res.render('newsSingle', {article : null})
            console.log(err.request)
        }else{
            res.render('newsSingle', {article : null})
            console.log('Error', err.meassage)
        }    
    }
})


newsRouter.post('', async(req, res) =>{
    let search = req.body.search

    try{
        const newsAPI =await axious.get(`https://raddy.dev/wp-json/wp/v2/posts?search=${search}`)
        res.render('newsSearch', {articles:newsAPI.data})
    }catch(err) {
        if(err.response){
            res.render('newsSearch', {articles : null})
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }else if(err.request){
            res.render('newsSearch', {articles : null})
            console.log(err.request)
        }else{
            res.render('newsSearch', {articles : null})
            console.log('Error', err.meassage)
        }    
    }
})




module.exports = newsRouter


