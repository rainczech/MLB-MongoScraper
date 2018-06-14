// dependencies
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Where da req at? ', req)
    res.send("HEY IT WORKED!!")
})

module.exports = router