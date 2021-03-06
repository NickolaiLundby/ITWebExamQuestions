'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  date: {
      type: String,
      required: true,
  },
  comment: {
      type: String,
      required: true
  },
  user: {type: Schema.ObjectId, ref: 'User'},
  workout: {
      type: String,
      required: true
  }
});

mongoose.model('Activity', ActivitySchema);