var router = require("express").Router();

// This route renders the homepage
router.get("/", function(req, res) {
  res.render("index");
});

// This route renders the saved handledbars page
router.get("/saved", function(req, res) {
  res.render("allarticles");
});

module.exports = router;