// dependencies
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index");
});

// router.get('/articles', (req, res) => {
//     res.render("index", {dbArticle});
// });

module.exports = router