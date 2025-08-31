const express = require('express'); 
const { getAll, create } = require('../controllers/categoryController'); 
const auth = require('../middleware/authMiddleware'); 
const router = express.Router(); 

// Toda vez que o auth é chamado aciona um  routerguard 
router.get('/', getAll); 
router.post('/', auth, create); 

module.exports = router; 
