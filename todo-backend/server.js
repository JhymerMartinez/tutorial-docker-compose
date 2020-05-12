const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const database = require('./src/config/database.js');
const port = process.env.PORT || 7000;

mongoose.connect(database.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(cors());
app.use(bodyParser.urlencoded({
  'extended': 'true'
}));
app.use(bodyParser.json());
app.use(methodOverride());

require('./src/routes')(app);

app.listen(port, () => {
  console.log(`Todo Backend listening on port : ${port}`)
});
