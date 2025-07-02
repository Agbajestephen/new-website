const express = require('express')
const newsRouter = express.Router()
const axious = require('axios')

newsRouter.get('', async(req, res) =>{
    try{
        const newsAPI =await axious.get('https://raddy.dev/wp-json/wp/v2/posts')
        res.render('news', {articles:newsAPI.data})
    }catch(err) {
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }else if(err.request){
            console.log(err.request)
        }else{
            console.log('Error', err.meassage)
        }    
    }
})

module.exports = newsRouter