#!/usr/bin/env node

const http = require('http')
const server = http.createServer((_req, res) => {
  res.end('purple')
})

const port = 3001
const hostname = 'localhost'
server.listen(port, hostname, () => {
  console.log(`color service up on http://${hostname}:${port}`)
})
