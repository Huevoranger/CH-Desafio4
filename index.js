/*Coder House
Curso backend
Grupo: 22885
Nombre: Erick Omar Sandoval Báez
DESAFIO 4*/
const express= require("express")

const app= express()

const apiRoute = require("./routes/api");

const path = require('path')

app.use(express.json());


//routeo a carpeta api
app.use("/api", apiRoute);

app.use(express.static('public'))


//inicialización del servidor
app.listen(8080, () => {
    console.log("Server run on port 8080");
  });