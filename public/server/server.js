const express = require('express')
const app = express()
const port = 4000
const config = require('../db/configuser')
const user = require('../modle/userschema')
var bodyParser = require('body-parser')
 const cors = require('cors')


 app.use(cors())
 app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())


 

app.post("/mydata",(req,res) => {

    let myuser = new user({ firstName: req.body.firstName, lastName: req.body.lastName,email:req.body.emal,password:req.body.password});
    myuser.save((err, user) => {
        if(err) {
            return res.json({success: false, err: err })
        }
                res.json({success: true, data: user})
            
    })
})

app.listen(port,(()=>{console.log("server is Running  4000")}))