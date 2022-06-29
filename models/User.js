// Require schema and model from mongoose
const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    // Configure individual properties using Schema Types
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
);

// Create a virtual property `friendCount` that gets the user's number of friends
userSchema
  .virtual("friendCount")
  .get(function () {
    return this.friends.length;
  })

// Initialize our User model
const User = model("user", userSchema);

module.exports = User;