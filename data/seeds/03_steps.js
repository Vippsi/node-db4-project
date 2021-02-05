
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { name: 'Preheat skillet over medium heat.', recipe_id: 1},
        { name: 'Generously butter one side of a slice of bread.', recipe_id: 1},
        { name: 'Place bread butter-side-down onto skillet bottom and add 1 slice of cheese.', recipe_id: 1},
        { name: 'Butter a second slice of bread on one side and place butter-side-up on top of sandwich.', recipe_id: 1},
        { name: 'Grill until lightly browned and flip over; continue grilling until cheese is melted.', recipe_id: 1},
        { name: 'Repeat with remaining 2 slices of bread, butter and slice of cheese.', recipe_id: 1},
        
        
        {name: 'Preheat oven to 350ºF (180ºC).', recipe_id: 2},
        {name: 'In a large bowl, mix together the peanut butter, sugar, and egg.', recipe_id: 2},
        {name: 'Scoop out a spoonful of dough and roll it into a ball. Place the cookie balls onto a nonstick baking sheet.', recipe_id: 2},
        {name: 'For extra decoration and to make them cook more evenly, flatten the cookie balls by pressing a fork down on top of them, then press it down again at a 90º angle to make a criss-cross pattern.', recipe_id: 2},
        {name: 'Bake for 8-10 minutes or until the bottom of the cookies are golden brown.', recipe_id: 2},
        {name: 'Remove from baking sheet and cool.', recipe_id: 2},
      ]);
    });
};
