const express = require('express');
const router = express.Router();
const Usercontroller = require('../controllers/find.js')
router.route('/tarotcards')
   .get(Usercontroller.index)


module.exports = router;