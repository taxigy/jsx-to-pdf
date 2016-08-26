import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import pdf from 'html-pdf';
import cors from 'cors';
import Html from '../client';

const {
  PORT = 3000,
  PWD = __dirname
} = process.env;
const app = express();

app.use(cors());

app.get('/', bodyParser.json(), (req, res) => {
  const render = ReactDOMServer.renderToStaticMarkup(
    <Html {...req.body} />
  );

  console.log('HTML requested.');
  res.set('Content-Type', 'text/html');
  res.send(render);
});

app.post('/', bodyParser.json(), (req, res) => {
  const render = ReactDOMServer.renderToStaticMarkup(
    <Html {...req.body} />
  );
  const options = {
    format: 'Letter',
    orientation: 'portrait',
    border: '0.45in'
  };

  console.log(JSON.stringify(req.body));

  pdf.create(render, options).toBuffer((error, buffer) => {
    console.log('PDF generated.');
    res.set('Content-Type', 'application/pdf');
    res.send(buffer);
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
