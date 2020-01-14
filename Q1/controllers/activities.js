'use strict';

// Module dependencies
const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');
const Activity = mongoose.model('Activity');
const Auth = require('../config/middleware/authorization');

exports.show = async function (req, res, next) {
    let loggedIn = await Auth.isLoggedIn(req);
    let activities = await Activity.find({user: req.user._id});
    var workouts = await Workout.find({user: req.user._id});
    res.render('activity/show', { title: 'Activity', loggedIn: loggedIn, activities: activities, workouts: workouts });
};

exports.add = async function(req, res, next){
    let activity = new Activity({
        date: req.body.date,
        comment: req.body.comment,
        user: req.user._id,
        workout: req.body.workout
    });
    await activity.save(function (err){
        if (err){
            console.log(`Error: ${err}`);
            return done(err);
        }
        res.redirect('/activity');
    });
};