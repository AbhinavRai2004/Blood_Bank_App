const express = require('express');
const { testController } = require('../controllers/testController');

//Routes Object

const router = express.Router();

router.get('/',testController);

//export

module.exports = router;