var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/:person_id/tasks/create', function (req, res) {
  models.Task.create({
    task: req.body.task,
    person_id: req.params.person_id
  }).then(function() {
    res.redirect('/');
  });
});

      //// ???????????????  //
router.post('/:person_id/tasks/destroy', function (req,res) {

  ////////
  models.Task.deleteTaskByID(req.body);


/*
    models.Task.destroy({
        task: req.body         /!*,
        person_id: req.params.person_id*!/
    }).then(function() {
        res.redirect('/');
    });*/
});

router.post('/:person_id/tasks/destroy_all', function (req, res) {

    var person_id = req.params.person.id;

      ////////// TODO:
      //  Write function getPersonByID which
      //      return person = { tasks: [task1, task2, ... ]}
      //      task1 = {name: 'taskname1', id: 1234 }
    var person = models.Task.getPersonByID(person_id);

      ////////// TODO:
      //  Write models.Task.destroy (ORM function)
    person.tasks.forEach( function(item) {models.Task.deleteTaskByID(item.id);} );

});

module.exports = router;
