'use strict';

// Module dependencies
const users = require('../controllers/users');
const index = require('../controllers/index');
const workouts = require('../controllers/workouts');
const activities = require('../controllers/activities');
const auth = require('connect-ensure-login');

module.exports = function(app, passport) {
    // Index routes
    app.get('/', index.index)

    // User routes
    app.get('/login', users.showLogin);
    app.post('/login',
        passport.authenticate('local', { failureRedirect: '/login' }),
        function(req, res) {
        res.redirect('/');
        });
    app.get('/register', users.showRegister);
    app.post('/register', users.register);
    app.get('/logout', users.logout);

    // Workout routes
    app.get('/workout', auth.ensureLoggedIn('/login'), workouts.showall);
    app.get('/workout/:id', auth.ensureLoggedIn('/login'), workouts.show); 
    app.get('/workout-form', auth.ensureLoggedIn('/login'), workouts.new);
    app.post('/workout', auth.ensureLoggedIn('/login'), workouts.create);
    app.post('/workout/:id', auth.ensureLoggedIn('/login'), workouts.addExercise);

    // Activity routes
    app.get('/activity', activities.show);
    app.post('/activity', auth.ensureLoggedIn('/login'), activities.add);
  
    // Error handling
    app.use(function(req, res, next) {
        next(createError(404));
    });
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
    
        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });
}