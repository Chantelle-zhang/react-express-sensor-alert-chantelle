const express = require('express')

const monitorRouter = require('./routes/api/monitor/monitor')

const app = express()

app.use(express.json())
app.use(monitorRouter)

module.exports = app
