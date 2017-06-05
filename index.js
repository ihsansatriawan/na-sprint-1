const express = require('express')

const app = new express();

app.use(express.static(__dirname + '/public'));

app.listen(3000, '0.0.0.0', () => {
  console.log('Listening on port 3000');
})
