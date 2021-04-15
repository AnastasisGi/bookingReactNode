import express from 'express'


const router = express.Router();



// controllers 

import {register} from '../controllers/auth.js'
// router.get('/:message', showMessage)
router.post('/register',register)

module.exports = router;