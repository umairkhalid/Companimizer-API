const { Thought, User } = require("../models");

module.exports = {
  // Get all thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .populate({path: 'reactions', select: '-__v'})
      .sort({_id: -1})
      .then((thoughts) => res.json(thoughts))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Create a thought
  createThought(req, res) {
    console.log("You are adding a thought");
    console.log(req.body);
    Thought.create(req.body)
      .then((thought) =>
        User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { runValidators: true, new: true }
        )
      )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: "Thought created but no user with this id!" })
          : res.json({ message: "Thought sucessfully created!" })
      )
      .catch((err) => res.status(500).json(err));
  },
};
