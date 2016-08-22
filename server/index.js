import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import express from 'express';
import pdf from 'html-pdf';
import Page from '../client';

const {
  PORT = 3000,
  PWD = __dirname,
  DEBUG_IN_BROWSER_MODE
} = process.env;
const app = express();

app.get('/', (req, res) => {
  const render = ReactDOMServer.renderToStaticMarkup(<Page />);

  pdf.create(render, {}).toBuffer((error, buffer) => {
    if (error || DEBUG_IN_BROWSER_MODE) {
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

app.get('/build/:file', (req, res) => {
  const {
    file
  } = req.params;

  res.sendFile(file, {
    root: path.resolve(PWD, 'build')
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
