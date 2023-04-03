const http = require("http");

http.createServer((req, res) => {
    if(req.url == "/server.js") {
        // res.setHeader("Access-Control-Allow-Origin", "https://testbackend-riku-hatano.vercel.app:3000");
        // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.write("connected to backend successfully!!");
        res.end();
    } else {
        res.write(req.url);
        res.end();
    }
}).listen(8100);