const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello from the submodule')
})

module.exports = router
