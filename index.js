const express = require('express')
const app = express()


const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/produits', (req, res) => {
    produits = [
        {
            name : "Pain",
            price: 245,
        },
        {
            name : "Bonbon",
            price: 90,
        },
    ]
    res.send(produits)
  })




app.listen(port, () => {
  console.log(`Notre application écoute sur le port ${port}`)
})