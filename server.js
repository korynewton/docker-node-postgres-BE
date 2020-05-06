const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// request logging
app.use(morgan('short'));
// JSON parsing middleware
app.use(express.json());
// header setting middleware
app.use(helmet());

app.get('/', (req, res) => res.sendStatus(200));
app.get('/health', (req, res) =>
  res.status(200).json({ message: 'sanity check passed' })
);

// app.use(api);

let server;
module.exports = {
  start(port) {
    server = app.listen(port, () => {
      console.log(`Up and running on port: ${port}`);
    });
    return app;
  },
};
