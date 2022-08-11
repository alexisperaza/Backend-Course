const express = require('express');
const {Contenedor} = require('./contenedor');


const PORT = 8080;

const app = express();

const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`);
});

server.on('error', error => console.log(`Error en el servidor: ${error}`));

const contenedor = new Contenedor('productos.txt', ['title', 'price', 'thumbnail'], 'title');


app.get('/', (req, res) => {

    res.send('<h1 style= "color:blue;">Bienvenido! </h1>')
});

app.get('/productos', async (req, res) => {
    try {
      const allProducts = await contenedor.getAll();
      res.json(allProducts);

    }catch (err) {
      console.log(err);

    }
});

app.get('/productoRandom', async (req, res) => {
  try {
    const allProducts = await contenedor.getAll();
    const allIds = allProducts.map(item => item.id);

    const index = Math.floor(Math.random() * allIds.length);
    const oneProduct = await contenedor.getById(allIds[index]);
    res.json(oneProduct);
    
  }catch (err) {
    console.log(err);

  }
});