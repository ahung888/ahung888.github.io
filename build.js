const fs = require('fs')
const path = require('path')

const outPath = 'out'

if (fs.existsSync(outPath)) {
  fs.rmSync(outPath, { recursive: true, force: true})
}

fs.mkdirSync(outPath)

const content = 'hello world! v5'
const filepath = path.join(__dirname, outPath, 'index.html')
fs.writeFileSync(filepath, content)
