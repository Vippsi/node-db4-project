
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'White Bread', quantity: 4, unit: 'slices'},
        { name: 'Butter', quantity: 3, unit:'TBSP' },
        { name: 'Cheddar Cheese', quantity: 2, unit: 'slices'},
        {name: 'Peanut Butter', quantity: 1, unit:'Cup'},
        {name: 'Sugar', quantity: 0.5, unit:"Cup"},
        {name: "Egg", quantity: 1}
      ]);
    });
};
