// import the Order Model. I'm calling this OrderModel for clarity, but typically this variable is called Order
const RestaurantModel = require('../models/RestaurantModel.js'); 

async function index(req, res) {
  try {
    // 1. grab all items from DB, sorted by date descending (being fancy!)
    let restaurants = await RestaurantModel.find({user: req.user._id}).sort({createdAt:'desc'}).exec();
    // 2. send to frontend
    res.status(200).json(restaurants)         
  } catch(err) {
    res.status(400).json(err);
  }
}

async function create(req, res) {
  try {
    // 1. put the order in the database (the data will be incoming via `req.body`)
    await RestaurantModel.create({lineItems: req.body.lineItems, userId: req.user._id})
    // 2. send a response to frontend - typically we send back the newly created order, or all the list of orders, or just an 'ok'
    res.status(200).json('ok')
 } catch(err) {
    res.status(400).json(err);
 }
}

// ADDING RESTAURANTS 
async function AddRestaurantForm(req,res){
    await RestaurantModel.create({
      name: req.body.name, 
      registrationDate: req.body.registrationDate,
      cuisineType: req.body.cuisineType,
      address: req.body.address,
      contactNumber: req.body.contactNumber,
      paymentOptions: req.body.paymentOptions,
      restaurantInfo: req.body.restaurantInfo,
      pictureURL: req.body.pictureURL,
    })
    console.log("add restaurant form controller")
    res.status(200).json("everything is ok")
}

//   THIS IS DETAILS OF RESTAURANT PAGE 
function myRestaurantsDetails(req, res) {
  RestaurantModel.findById(req.params.id, function(err, MyRestaurant) {
  res.render('restaurantUser/details', { title: 'My Restaurant Details', MyRestaurant});
});
}

 async function myRestaurants(req,res){
   console.log("myRestaurants function")
   console.log(req.user._id)
  let MyRestaurants = await RestaurantModel.find({});
  console.log(MyRestaurants)
  res.status(200).json(MyRestaurants)
}

module.exports = {
  create,
  index,
  AddRestaurantForm,
  myRestaurantsDetails,
  myRestaurants,
}
