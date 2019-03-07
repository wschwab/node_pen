// from https://codeburst.io/building-a-budget-manager-with-vue-js-and-node-js-part-i-f3d7311822a8

const mongoose = require('mongoose'),
      bcrypt = require('bcrypt');

const Schema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  clients: [{}]
});

//No arrow functions because of automatic lexical
scope binding

Schema.pre('save', function (next) {
  const user = this;

  if(this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, (error, salt) => {
      if (error) return next(error);

      bcrypt.hash(user.password, salt, (error, hash) =>{
        if (error) return next(error);

        user.password = hash;
          next();
      });
    });
  } else {
    return next();
  }
});
