var Activities = require('./models/activities');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        app.get('/api/activities', function(req, res) {
            Activities.find(function(err, activities) {

                if (err)
                    res.send(err);

                res.json(activities);
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendFile(__dirname + '/app/index.html');
        });

    };
