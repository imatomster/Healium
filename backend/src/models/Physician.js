const mongoose = require("mongoose");
// const validator = require("validator");

var Schema = mongoose.Schema;

const Physician = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEthereumAddress(value)) {
        throw new Error("Address is invalid");
      }
    },
  },
  role: {
    type: String,
    required: true,
    validate(value) {
      if (!consts.roles.includes(value)) {
        throw new Error("Role is invalid");
      }
    },
  },
  nonce: {
    type: Number,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.tokens;

  return userObject;
};

// Enforce lowercase addresses
userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("address")) {
    user.address = user.address.toLowerCase();
  }

  next();
});

module.exports = mongoose.model("Physician", PhysicianSchema);