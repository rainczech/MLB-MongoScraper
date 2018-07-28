// dependencies
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index");
});

router.get('/saved', (req, res) => {
    res.render("allarticles");
})

module.exports = router