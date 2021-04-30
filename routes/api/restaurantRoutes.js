// routes/api/orders.js

const express = require('express');
const router = express.Router();
const restaurantCtrl = require('../../controllers/restaurantCtrl');

// POST new order. Full address will be POST /api/orders
router.post('/', restaurantCtrl.create)
// GET /api/orders
router.get('/', restaurantCtrl.index)

router.post('/addrestaurantform',restaurantCtrl.AddRestaurantForm)  //ADDING RESTAURANTS 

router.get('/myrestaurants',restaurantCtrl.myRestaurants) 

// router.get('/contactus',restaurantCtrl.contactUs) 

router.get('/myrestaurants/:id',restaurantCtrl.myRestaurantsDetails) //DETAILS OF MY RESTAURANT PAGE 



module.exports = router;