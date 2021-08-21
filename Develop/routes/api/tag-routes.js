const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  console.log("Lookin' Gooood!");
  // find all tags
  // be sure to include its associated Product data
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post("/", (req, res) => {
  // create a new tag
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: { id: req.params.id },
  })
    .then((tagRoutesData) => {
      if (!tagRoutesData) {
        res.status(404).json({ message: "Not working!" });
        return;
      }
      res.json(tagRoutesData);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
