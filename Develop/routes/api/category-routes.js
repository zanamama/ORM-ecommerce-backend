const router = require('express').Router();
const { Category, Product } = require('../../models');
require("../..routes")

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {id: req.params.id},
    })
    .then((categoryData) => {
      if (!categoryData) {
        res.status(404).json({message: "Not Working!"});
        return;
      }
      res.json(categoryData);
    })
    .catch((err) => res.status(500).json(err));
  });


module.exports = router;
