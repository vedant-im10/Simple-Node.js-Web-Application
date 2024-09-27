var express = require('express')
var fs = require('fs')

var lab = express()

lab.get("/", function(req,res){
    res.write("Hello World")
    res.end()
})

// lab.get("/home", function(req,res){
//     res.send("Welcome Home.")
// })

lab.get("/home", function(req,res){
    fs.readFile("login.html", function(error,data){
        res.writeHead(200, {"Content-Type":"text/html"})
            res.write(data)
            res.end()
    })
})

lab.get("/index.html", function(req,res){
    var un = req.query.uname
    res.send("Welcome " + un)
})

lab.listen(9000)