const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.use('/api/monitor', require('./routes/api/monitor/monitor'));

app.listen(port, function () {
    console.log('App listening on port: ' + port);
});
