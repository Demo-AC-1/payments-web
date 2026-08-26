const express = require('express');
const { exec } = require('child_process');
const app = express();

app.get('/status', (req, res) => {
  const host = req.query.host;
  exec('ping -c 1 ' + host, (err, stdout) => {
    res.send(stdout);
  });
});

app.get('/search', (req, res) => {
  res.send('<h1>Results for ' + req.query.q + '</h1>');
});

app.get('/calc', (req, res) => {
  const result = eval(req.query.expr);
  res.send(String(result));
});

app.listen(3000);
