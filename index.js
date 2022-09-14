// importar las bibliotecas
const express = require('express'); // es opcional el ';'
const path = require ('path');
const app = express();
const consolaRoutes= require('./routes/consola');


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/consola', consolaRoutes); 


// definición de nuestra aplicación
app.get('/bigote',(request, response) => {
    console.log('Hola hola');
    response.send('<H1> Wenaaz </H1>');
});

app.get('/',(req, res)=> {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/home',(req, res)=> {
    res.sendFile(path.join(__dirname, 'views', 'pagina1.html'));
});

// HTML pagina web sencilla
app.get('/tarea',(req, res)=> {
    res.sendFile(path.join(__dirname, 'views', 'tarea.html'));
});

// Traductor de textos?
app.get('/tarea1',(req, res)=>{
    console.log(req.query);
    res.send("Datos enviados por el hermosisimo query "+req.query.name);
});


// FORMULARIO
app.get('/formulario',(req, res)=>{
    console.log(req.query);
    res.sendFile(path.join(__dirname, 'views', 'formulario.html'));
});

// FORMULARIO
app.get('/pali',(req, res)=>{
    console.log(req.query);
    res.sendFile(path.join(__dirname, 'views', 'pali.html'));
});

// prueba query
app.get('/prueba1',(req, res)=>{
    console.log(req.query);
    res.send("Datos enviados por el hermosisimo query "+req.query.name);
});



// prueba params
app.get('/prueba2/:name/:age', (req, res)=>{
    console.log(req.params);
    res.send("Siseenviaron los datos por params " + req.params.name);
})

app.post('/prueba3',(req,res)=>{
    console.log(req.body);
    res.send("Datos recibidossss ")
})

// lanzar la aplicación
app.listen(8080,() => {
    console.log("El servidor está en línea :)")
});
