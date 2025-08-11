
const fs = require('fs')
const path = require('path')

const repoName = 'agibot-research' 
const distDir = path.resolve(__dirname, '../../dist')
const filePath = path.join(distDir, '404.html')

const html = `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0; url=/${repoName}/" />
  </head>
  <body></body>
</html>
`

fs.writeFileSync(filePath, html, 'utf-8')
console.log('✅ 404.html created at', filePath)
