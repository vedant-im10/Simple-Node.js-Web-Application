var ht = require('http')
ht.createServer(test).listen(8080)

function test(request,response){
    response.write('Hello!!!')
    response.end()
}