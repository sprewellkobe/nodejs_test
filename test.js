var http = require("http");  
http.createServer(function(request, response) {    
    response.writeHead(200, {"Content-Type": "text/plain"});    
    response.write("Kobe Hello World");    
    response.end();  
}).listen(5050);
console.log("nodejs start listen 5050 port!");

