const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      // Use built in date method to get current date
      type: Date,
      default: Date.now,
      // Moment
      get: (date) => moment(date).format("MMM DD, YYYY [at] hh:mm a"),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  },
);

// Create a virtual property `reactionCount` that gets the number of reactions on a Thought
thoughtSchema
    .virtual("reactionCount")
    .get(function () {
      return this.reactions.length;
    })

// Initialize our Thought model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
