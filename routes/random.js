const express = require('express');
const router = express.Router();
const Usercontroller = require('../controllers/random.js')
router.route('/random')
   .get(Usercontroller.draw);


module.exports = router;