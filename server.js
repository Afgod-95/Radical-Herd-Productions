import { readFileSync } from 'fs';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' },
  });

  app.use(vite.middlewares);

  // Custom middleware and routes
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 10000 }));

  app.get('/api', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.json({ message: 'Hello World' });
  });
  let render;
  let template;

  if (isProduction) {
    const {render: ssrRender } = await import('.dist/server/entry-server.js');
    render = ssrRender;
    template = await readFileSync(path.resolve(__dirname, './dist/client/index.html'), 'utf-8');
    app.use('/', express.static(path.resolve(__dirname, './dist/client')));
    
  }

  // ✅ Wildcard route for all other pages
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const appHtml = await render(url);

      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e.stack);
      next(e);
    }
  });

  const PORT = process.env.PORT | 3001;
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

createServer();
