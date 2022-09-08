const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Welcome to the First Page</title></head>');
        
       //res.write('<body><form><input type="text"><button></button></form></body>');
        
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);            
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=');
            console.log(message[1]);
        });
        return res.end();

    }
    
    if (url === '/users') {
        res.write('<html>');
        res.write('<html>');
        res.write('<head><title>Welcome to the Second Page</title></head>');
        res.write('<body><ul><li>User 1 <li>User 2 <li> User 3</ul></body>');
        res.write('</html>');
        return res.end();
    }

    res.write('<html>');
    res.write('<html>');
    res.write('<head><title>Welcome to the Third Page</title></head>');
    res.write('<body>ERROR PAGE</body>');
    res.write('</html>');
    res.end();
    



});


server.listen(3000);

