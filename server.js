import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const root = process.cwd();
const mime = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.json':'application/json' };
const server = http.createServer(async (req, res) => {
  const path = req.url === '/' ? '/index.html' : req.url;
  try {
    const data = await readFile(join(root, path));
    res.writeHead(200, { 'Content-Type': mime[extname(path)] || 'text/plain' });
    res.end(data);
  } catch {
    res.writeHead(404); res.end('Not found');
  }
});
server.listen(3000, () => console.log('Fox Insurance demo: http://localhost:3000'));
