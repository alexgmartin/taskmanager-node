var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://alex:Rcballas88@ds123181.mlab.com:23181/mytasklist-alexgm', ['tasks']);

router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

module.exports = router;