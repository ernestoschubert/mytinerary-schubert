const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    activityTitle: {type: String, required: true},
    activityImg: {type: String, required: true},
    itinerary: {type: mongoose.Types.ObjectId, ref: 'itinerary'}
});

const Activity = mongoose.model('activity', activitySchema);

module.exports = Activity;