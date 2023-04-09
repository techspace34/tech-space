const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const PORT = 5000


app.use(express.json({ extended: true }))
app.use('/api/submit', require('./submitRouter'))

async function start() {
  try {
    app.listen(PORT, () => console.log(`app started, ${PORT}`))
  } catch (e) {
    console.log('error', e.message);
    process.exit(1)
  }
}

start()