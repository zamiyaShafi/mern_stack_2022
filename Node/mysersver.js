var http=require("http");

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("hello world");

}).listen(8000);

// 200 is a status code
// 404 page not found
// port no shoul be above 5000