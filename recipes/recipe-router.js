const router = require("express").Router();
const Recipes = require("./recipe-model");

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  const { id } = req.params;
  Recipes.getShoppingList(id)
    .then((list) => {

      if (list.length > 0) {
        res.status(200).json(list);
      } else {
          console.log(list)
        res
          .status(404)
          .json({ message: "Could not find a recipe with that id" });
      }
    })
    .catch((err) => {
        console.log(err)
      res.status(500).json({ message: "Failed to get shopping list" });
    });

});

router.get("/:id/instructions", (req, res) => {
    const { id } = req.params;
    Recipes.getInstructions(id)
      .then((instructions) => {
  
        if (instructions.length > 0) {
          res.status(200).json(instructions);
        } else {
          res
            .status(404)
            .json({ message: "Could not find a recipe with that id" });
        }
      })
      .catch((err) => {
          console.log(err)
        res.status(500).json({ message: "Failed to get instructions" });
      });
  });
module.exports = router;
