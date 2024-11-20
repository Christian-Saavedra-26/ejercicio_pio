const express = require('express');
const path = require('path');

const app = express(); 

const PORT = 3000;

app.use(express.urlencoded({ extended : true})); 

//definir la ruta para servir el archivo html
app.get('/',(req,res) => {
    //envia el archivo formulario.html al cliente
    res.sendFile(path.join(__dirname, 'form.html'))//
});

//define la ruta para procesar el envio del formulario
app.post('/registro', (req, res) => {
    //accede a los datos enviados en el formulario
    const datosRegistro = req.body;
    console.log("datos recibidos ",datosRegistro);
    const {nombre_completo, edad, email, curso} = datosRegistro
    res.send(`<h1>Se completo el registro</h1> <p>Se regitro al usuario</p> <br> <br> <p>Nombre: ${nombre_completo}</p> <p>Edad: ${edad}</p> <p>Correo electronico: ${email}</p> <p>Curso: ${curso}</p>` );
});

app.listen(PORT, () => {
    console.log(`servidor funcionando en http://localhost:${PORT}`);
});