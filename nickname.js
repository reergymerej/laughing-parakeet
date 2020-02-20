#!/usr/bin/env node

const http = require('http')
const server = http.createServer((_req, res) => {
  res.end('Mr. Spudsy')
})

const port = 3003
const hostname = 'localhost'
server.listen(port, hostname, () => {
  console.log(`nickname service up on http://${hostname}:${port}`)
})

