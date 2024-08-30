const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RatingSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'accounts',
    required: true
  },
  movieId: {
    type: Schema.Types.ObjectId,
    ref: 'movies',
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
}, {
  collection: 'ratings'
});

const RatingModel = mongoose.model('ratings', RatingSchema);

module.exports = RatingModel;
