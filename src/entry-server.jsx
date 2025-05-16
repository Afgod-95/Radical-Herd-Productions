import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App'; // Adjust this import to point to your main App component

/**
 * SSR render function that can be called by the server
 * @param {string} url The URL that is being rendered
 * @param {Object} context Context object that can be used to pass data to the app
 * @returns {string} The rendered HTML string
 */
export function render(url, context) {
  // You may want to set up a router context if using React Router
  return renderToString(
    <React.StrictMode>
      <App url={url} serverContext={context} />
    </React.StrictMode>
  );
}

// Export any other server-side functions you need
export function preloadData(url) {
  // Implement any data preloading logic here
  return Promise.resolve({});
}