const { Router } = require('express')
const router = Router()
const controller = require('./submitController')

router.post('/submitForm', controller.submit)

module.exports = router