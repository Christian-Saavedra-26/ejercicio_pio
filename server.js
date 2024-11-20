const express = require('express');
const path = require('path');

const app = express(); 

const PORT = 3000;

// Habilitar el uso de archivos estáticos
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

// Ruta para servir el formulario HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'formulario.html')); // Cambié el nombre al archivo HTML
});

// Ruta para procesar el envío del formulario
app.post('/registro', (req, res) => {
    const datosRegistro = req.body;
    console.log("Datos recibidos:", datosRegistro);
    const { nombre_completo, edad, email, curso } = datosRegistro;
    res.send(`
        <h1>Se completó el registro</h1>
        <p>Se registró al usuario con la siguiente información:</p>
        <p><strong>Nombre:</strong> ${nombre_completo}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Correo electrónico:</strong> ${email}</p>
        <p><strong>Curso:</strong> ${curso}</p>
    `);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:3000`);
});
