const router = require("express").Router();
const ShortController = require("../Controllers/ShortController");

router.post("/short", ShortController.createShort);
router.get("/short/:id", ShortController.redirecturl);

module.exports = router;
