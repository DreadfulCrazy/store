const routes = require('express').Router();
const controller = require('../controllers/controllers');


routes.get('/api/products',controller.listProducts);
routes.post('/api/addprd',controller.save)
routes.get('/listusers',controller.listUsers);


module.exports = routes;