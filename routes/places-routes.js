const express=require('express');

const PlacesControllers=require('../controllers/places-controllers')

const router=express.Router();


router.get('/:pid',PlacesControllers.getPlaceById);

router.get('/user/:uid',PlacesControllers.getPlaceByUserId);

module.exports=router;