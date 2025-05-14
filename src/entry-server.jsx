import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import pkg from 'react-router-dom';

export function render(url) {
    const { StaticRouter } = pkg;
    console.log('Rendering page for URL:', url);
    const appHtml = renderToString(
    <StaticRouter location={url}>
      <App url={url} />
    </StaticRouter>
  );

  return appHtml;
}
