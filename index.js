const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
  res.send('Hello Pokedex!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})