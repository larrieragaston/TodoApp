let express = require('express');
let Item = require('../models/item.model');
let router = express.Router();

router.route('/').get((req, res) => {
    Item.find()
      .then(items => res.json(items))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/update/:id').put((req, res) => {
    console.log('updating item', req.body);
    Item.findById(req.params.id)
        .then(item => {
            item.completed = Boolean(req.body.completed)

            item.save()
                .then(() => res.json('Item updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;