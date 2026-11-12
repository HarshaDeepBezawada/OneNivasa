/* OneNivasa Local/Production Server - BZA Tech Solutions */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {

    console.log(
        `[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`
    );

    // Remove query parameters
    const urlPath = req.url.split('?')[0].split('#')[0];

    // Serve index.html for /
    const requestedPath = urlPath === '/' ? '/index.html' : urlPath;

    // Create an absolute path based on this server.js location
    const filePath = path.join(__dirname, requestedPath);

    const extname = path.extname(filePath);
    const contentType =
        MIME_TYPES[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {

        if (error) {

            if (error.code === 'ENOENT') {
                res.writeHead(404, {
                    'Content-Type': 'text/html'
                });

                res.end(`
                    <h1>404 Not Found</h1>
                    <p>The requested file was not found on OneNivasa server.</p>
                `);

            } else {

                console.error(error);

                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });

                res.end(`Server Error: ${error.code}`);
            }

        } else {

            res.writeHead(200, {
                'Content-Type': contentType
            });

            res.end(content);
        }
    });
});

server.listen(PORT, () => {

    console.log(`
==================================================
🚀 OneNivasa Platform Server running on port ${PORT}
   Digital Operating System for Gated Communities
   Powered by BZA Tech Solutions
==================================================
`);

});