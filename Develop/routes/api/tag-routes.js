const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  console.log("Lookin' Gooood!");
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagRoutesData = await tag-routes.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagRoutesData) {
      res.status(404).json({ message: 'No routes were found with that id!' });
      return;
    }

    res.status(200).json(tagRoutesData);
  } catch (err) {
    res.status(500).json(err);
  }
});
});

module.exports = router;
