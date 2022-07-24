const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log('Error connecting to database: ', err);
    } else {
      console.log('Connected to database');
    }
  }
);
