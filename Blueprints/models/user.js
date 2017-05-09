var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  twitter: String,
  google: String,
  github: String,
  profile: {
    name: {type: String, default: ""},
    gender: {type: String, default: ""},
    location: {type: String, default: ""},
    website: {type: String, default: ""},
    picture: {type: String, default: ""}
  }
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = User.encryptPassword(this.password);
  next();
});

var validator = require("validator");

User.schema.path("email").validate(function(email) {
  return validator.isEmail(email);
});

User.schema.path("password").validate(function(password) {
  return validator.isLength(password, 6);
});

var User = mongoose.model("User", userSchema);

module.exports = User;
