#!/usr/bin/env node

const http = require('http')
const server = http.createServer((_req, res) => {
  res.end((new Date()).toString())
})

const port = 3002
const hostname = 'localhost'
server.listen(port, hostname, () => {
  console.log(`time service up on http://${hostname}:${port}`)
})
