const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // Moment
            get: (date) => moment(date).format('MMM DD, YYYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: true
        },
        reactions: []
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      },
      userSchema.virtual("reactionCount").get(function () {
        return this.reactions.length;
      })
);
