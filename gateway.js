#!/usr/bin/env node

const getService = (url) => {
  return new Promise((resolve, reject) => {
    http.get(url, (servicesResp) => {
      const chunks = []
      servicesResp.on('data', (chunk) => {
        chunks.push(chunk)
      })
      servicesResp.on('end', () => {
        resolve(Buffer.concat(chunks).toString())
      })
    }).on('error', reject)
  })
}

const http = require('http')
const server = http.createServer((_req, res) => {
  const colorServiceUrl = 'http://localhost:3001'
  const timeServiceUrl = 'http://localhost:3002'
  const nicknameServiceUrl = 'http://localhost:3003'

  const services = [
    getService(colorServiceUrl),
    getService(nicknameServiceUrl),
    getService(timeServiceUrl),
  ]

  Promise.all(services).then(results => {
    res.end(results.join('\n'))
  }).catch(error => {
    console.error(error)
    res.statusCode = 500
    res.end('unable to access all services')
  })
})

const port = 3000
const hostname = 'localhost'
server.listen(port, hostname, () => {
  console.log(`gateway up on http://${hostname}:${port}`)
})
