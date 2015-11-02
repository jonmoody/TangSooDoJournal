var mongoose = require('mongoose');

module.exports = mongoose.model('Activities', {
  date : { type : Date, default: Date.now },
  activity: { type : Array }
});
