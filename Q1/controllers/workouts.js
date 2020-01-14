'use strict';

const mongoose = require('mongoose');
const Auth = require('../config/middleware/authorization');
const Workout = mongoose.model('Workout');

module.exports.show = async function (req, res) {
    let loggedIn = await Auth.isLoggedIn(req);
    let workout = await Workout.findById(req.params.id, function (err, workout) {
        if (err) { return done(err); }
        else return workout;
    });
    res.render('workout/show', {workout: workout, loggedIn: loggedIn});
};

module.exports.showall = async function (req, res){
    let loggedIn = await Auth.isLoggedIn(req);
    let workouts = await Workout.find({user: req.user._id});
    res.render('workout/showall', { title: "Workout programs", workouts: workouts, loggedIn: loggedIn});
};

module.exports.new = async function (req, res){
    let loggedIn = await Auth.isLoggedIn(req);
    res.render('workout/create', { title: "Create workout program", loggedIn: loggedIn});
};

module.exports.create = async function(req, res){
    let workout = new Workout({
        title: req.body.title,
        user: req.user._id,
        excercises: []
    });
    await workout.save(function (err){
        if (err){
            console.log(`Error: ${err}`);
            return done(err);
        }
        else {
            res.redirect('/workout/'+workout._id);
        }
    });
};

module.exports.addExercise = async function(req, res){
    let workout = await Workout.findById(req.params.id);
    workout.exercises.push({name: req.body.name, description: req.body.description, set: req.body.set, reps_time: req.body.reps_time});
    await workout.save();
    res.redirect('/workout/'+workout._id);
};