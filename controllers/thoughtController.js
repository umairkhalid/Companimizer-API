const Thought = require("../models/Thought");

module.exports = {
    // Get all thoughts
    getAllThoughts(req, res) {
      Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
};