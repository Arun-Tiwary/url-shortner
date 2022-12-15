const express = require("express");
const createDB = require("../config/db");
const router = express.Router();
const {v4 : uuidv4} = require('uuid')
const createDb = require('../config/db');
const Url = require('../models/urlModels');

const baseUrl = "https://url-shortner.aruntiwary.repl.co/urlapi"

createDB.sync().then(() => {
  console.log("Db is running");
})



//post api call
router.post('/', async (req, res) => {
  try{
    const {longUrl} = req.body;

    // converting longUrl to id 
    
      //https://url-shortner.aruntiwary.repl.co/id
    const newId = uuidv4()

    //store in DB with longUrl and shortId
    const shortUrl = await Url.create({
      longUrl,
      shortUrl: newId
    });

    return res.status(200).json({
      status: "ok",
      shortUrl: `${baseUrl}/${newId}`
    })
    
  }
  catch(e){
    console.log("error",e);
    res.status(500).send(e)
  }
  
})

//get api call to redirect to main website
// :short is a variable that comes after /
router.get('/:short', async (req, res) => {
  let shortId = req.params.short;
  console.log("52", shortId);
  try {
    let url = await Url.findOne({
      where: {
        shortUrl: shortId
      }
    });
   
    if(!url) {
       // console.log("58", url.longUrl);
      return res.send("Url not found")
    }
    return res.redirect(url.longUrl);
    
  }
  catch(e) {
    return res.status(500).send(e);
  }
  
})








module.exports = router;