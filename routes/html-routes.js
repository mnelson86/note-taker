//import
const path = require("path");
const router = require("express").Router();

router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirName, "../public/notes.html"));
});
router.get("*", function (req, res) {
  res.sendFile(path.join(__dirName, "../public/index.html"));
});
module.exports = router;
