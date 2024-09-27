var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    fs.readFile("login.html", function(error,data){
        res.writeHead(200, {"Content-Type":"text/html"})
            res.write(data)
            res.end()
    })
}).listen(9000)
