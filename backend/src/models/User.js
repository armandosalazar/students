const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    names: {
      type: String,
    },
    lastnames: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ['student', 'teacher'],
      default: 'student',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.statics.encryptPassword = async (password) => {
  return bcrypt.hash(password, 10);
};
userSchema.statics.comparePassword = async (password, hash) => {
  return bcrypt.compare(password, hash);
};

module.exports = model('User', userSchema);
