const { Router } = require('express');

const router = Router();

const model = require('../model/task');

router.get('/', (req, res) => {
   model.find({}, (err, tasks) => {
      if(err) throw err;
      res.render('home', {tasks});
   });
});

router.post('/add', (req, res) => {
   const body = req.body;
   body.status = false;
   model.create(body, (err, task) => {
      if(err) throw err;
      res.redirect('/');
   });
});

router.get('/turn/:id', (req, res) => {
   const id = req.params.id;
   model.findById(id, (err, task) => {
      if(err) throw err;
      task.status = !task.status;
      task.save()
         .then(() => res.redirect('/'))
   });
});

router.get('/delete/:id', (req, res) => {
   const id = req.params.id;
   model.findByIdAndDelete(id, (err, task) => {
      if(err) throw err;
      res.redirect('/');

   });
});


module.exports = router;
