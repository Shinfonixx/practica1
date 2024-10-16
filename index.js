import express from 'express' //framework de JS
import mongoose from 'mongoose' //libreria para conectar con mongo

const Videojuego = mongoose.model('Videojuego', new mongoose.Schema({
  titulo: String,
  genero: String,
}))

const app = express()

mongoose.connect('mongodb://isen:dwes@practica1:27017/miapp?authSource=admin')

app.get('/', async (_req, res) => {
  console.log('Cargando la lista de videojuegos...')
  const videojuegos = await Videojuego.find(); //busca todos los videojuegos en la base de datos y los devuelve
  return res.send(videojuegos)
})
app.get('/crear', async (_req, res) => {
  console.log('Agregando nuevo videojuego...')
  await Videojuego.create({ titulo: 'Valorant', genero: 'Shooter' }) //crea un videojuego con título y género, y luego nos devuelve un OK
  return res.send('ok')
})

app.listen(3000, () => console.log('Escuchando en el puerto 3000...')) //dejamos que se quede escuchando en el puerto 3000 y dejamos el consolelog para verificar que está corriendo la aplicacion
