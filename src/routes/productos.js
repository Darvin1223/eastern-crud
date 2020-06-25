const express = require('express');
const router = express.Router();

//Importar archivo y objecto
const productoscontrolles = require('../controllers/productoscontrolles');





//Esta funcion es la encargada de responder las peticiones en la rutas iniciales.
router.get('/', productoscontrolles.list);

router.post('/add',productoscontrolles.save);
router.get('/delete/:id', productoscontrolles.delete);
router.get('/update/:id', productoscontrolles.edit);
router.post('/update/:id', productoscontrolles.update);
module.exports = router;