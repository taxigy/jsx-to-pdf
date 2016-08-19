import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import pdf from 'html-pdf';
import Root from '../client';

const {
  PORT = 3000,
  // PWD = __dirname
} = process.env;
const app = express();

app.get('/', (req, res) => {
  const render = ReactDOMServer.renderToStaticMarkup(<Root />);

  pdf.create(render, {}).toBuffer((error, buffer) => {
    if (error) {
      console.log(error);

      res.set('Content-Type', 'text/html');
      res.send(render);
    } else {
      console.log('PDF generated.');

      res.set('Content-Type', 'application/pdf');
      res.send(buffer);
    }
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
