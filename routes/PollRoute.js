const express = require("express");
const {
  getAllPolls,
  newPoll,
  UpdatePoll,
} = require("../controller/PollController");
const router = express.Router();

router.route("/polls").get(getAllPolls).post(newPoll);
router.post("/polls/:id/vote", UpdatePoll);

module.exports = router;
