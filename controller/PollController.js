const Poll = require("../model/Poll");

// Get All POlls

const getAllPolls = async (req, res) => {
  try {
    const polls = await Poll.find();
    if (!polls.length) {
      return res.status(400).json({
        message: "No Polls Found",
      });
    }

    res.json(polls);
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Create New Poll

const newPoll = async (req, res) => {
  try {
    const { question, options } = req.body;

    if (!question || !options.length) {
      return res.status(400).json({
        message: "Fields cannot be empty",
      });
    }
    const newPoll = new Poll({
      question,
      options: options.map((option) => ({ text: option, votes: 0 })),
    });
    await newPoll.save();
    res.status(201).json(newPoll);
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Update A Poll

const UpdatePoll = async (req, res) => {
  try {
    const { id } = req.params;
    const { optionIndex } = req.body;
    const poll = await Poll.findById(id);
    if (!poll) return res.status(404).json({ error: "Poll not found" });
    poll.options[optionIndex].votes += 1;
    await poll.save();
    res.json(poll);
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getAllPolls,
  newPoll,
  UpdatePoll,
};
