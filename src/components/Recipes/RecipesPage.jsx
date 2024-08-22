/*import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import './RecipesPage.css';

const recipes = [
  {
    image: require('../../assets/Recipes/Pakhala.jpeg'),
    title: 'Pakhala',
    calories: 4228.043058200812,
    ingredients: [
      '1) 1/2 cup olive oil',
      '2) 5 cloves garlic, peeled',
      '3) 2 large russet potatoes, peeled and cut into chunks',
      '4) 1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)',
      '5) 3/4 cup white wine',
      '6) 3/4 cup chicken stock',
      '7) 3 tablespoons chopped parsley',
      '8) 1 tablespoon dried oregano',
      '9) Salt and pepper',
      '10) 1 cup frozen peas, thawed',
    ],
    instructions: [
      '1. Soak 1 cup toor dal for 30 minutes, then pressure cook with diced vegetables (potato, carrot, pumpkin, eggplant, green beans, raw banana), 1 chopped tomato, 1 tsp turmeric powder, salt, and 4 cups water for 3-4 whistles.',
'2. Heat 2 tbsp ghee and add 1 tsp panch phoron, 2 dry red chilies, 1/2 tsp hing, and 1 tsp chopped ginger; sauté until golden.',
'3. Add the tempering to the cooked dal and vegetables, mix well, and optionally add 1/4 cup grated coconut.',
'4. Simmer the mixture on low heat for 5-7 minutes.',
'5. Garnish with fresh coriander leaves and additional grated coconut if desired.',
'6. Serve hot with steamed rice or roti.',
    ],
  },
  // Add other recipes similarly
    {
      image: require('../../assets/Recipes/Dalma.jpg'),
      title: 'Dalma',
      calories: 4228.043058200812,
      ingredients: [
        '1) 1 cup Toor Dal (Arhar Dal)',
'2) 1 Potato, diced',
'3) 1 Carrot, diced',
'4) 1 cup Pumpkin, diced',
'5) 1 Eggplant (Brinjal), diced',
'6) 1/2 cup Green Beans, cut into pieces',
'7) 1 Tomato, chopped',
'8) 1/2 cup Raw Banana, diced',
'9) 1/4 cup Grated Coconut (optional)',
'10) 1 tsp Turmeric Powder',
'11) Salt to taste',
'12) 4 cups Water',
]

    },
    {
      image: require('../../assets/Recipes/Chhenapoda.jpg'),
      title: 'Chhenapoda',
      ingredients: [
        '1) 1 liter milk (to make fresh paneer)',
'2) 2 tablespoons lemon juice or vinegar',
'3) 1/2 cup semolina (sooji)',
'4) 1 cup powdered sugar',
'5) 4-5 green cardamom pods (crushed)',
'6) 2-3 tablespoons ghee (clarified butter)',
'7) 2-3 tablespoons chopped dry fruits (cashews, raisins, almonds)',
'8) 1 teaspoon baking powder (optional)',
'9) A pinch of salt',
'10) Banana leaves or parchment paper (for lining the baking dish)'
      ],
  instructions: [
    '1)  Make Paneer: Boil 1 liter of milk, add 2 tablespoons of lemon juice/vinegar to curdle it, strain, and drain the curds.',
'2) Knead Paneer: Knead the drained paneer until smooth.',
'3) Mix Ingredients: Add 1/2 cup semolina, 1 cup powdered sugar, 4-5 crushed cardamom pods, 2-3 tablespoons melted ghee, 2-3 tablespoons chopped dry fruits, and a pinch of salt. Mix well.',
'4) Preheat Oven: Preheat to 180°C (350°F).',
'5) Prepare Baking Dish: Grease and line with banana leaves or parchment paper.',
'6) Pour Mixture: Spread the mixture evenly in the baking dish.',
'7) Bake: Bake for 45-60 minutes until the top is golden brown and a skewer comes out clean.',
'8) Cool and Serve: Let it cool, then cut into slices and serve.',
  ],
    },
    {
      image: require('../../assets/Recipes/Machha Besara.jpg'),
      title: 'Machha Besara',
      ingredients: [
       ' 500 grams fish (Rohu or any firm fish), cut into pieces',
        '2 tbsp mustard seeds & poppy seeds',
        '1 teaspoon cumin seeds & turmeric powder',
        '3-4 garlic cloves',
        '2-3 green chilies',
        '1 large onion, finely chopped',
        '2 tablespoons mustard oil',
        'Salt to taste',
        '1-2 tomatoes, chopped',
        '1 potato, cut into wedges ',
        'Fresh coriander leaves for garnish',
        'Water as needed',
      ],
      instructions: [
        'Marinate Fish: Marinate 500g fish with 1/2 tsp turmeric and salt for 15-20 minutes.',
'Make Mustard Paste: Soak and grind 2 tbsp mustard seeds, 1 tbsp poppy seeds, 1 tsp cumin seeds, 3-4 garlic cloves, and 2-3 green chilies into a smooth paste.',
'Fry Fish: Heat mustard oil, fry fish until golden brown, and set aside.',
'Prepare Curry Base: In the same pan, fry 1 chopped onion until golden. Add mustard paste and sauté, then add 1-2 chopped tomatoes and cook until soft.',
'Optional Potatoes: Add potato wedges and cook for a few minutes.',
'Cook Fish: Add fried fish, water to make gravy, adjust salt and turmeric, and simmer until fish and potatoes  are cooked through.',
'Garnish and Serve: Garnish with fresh coriander and serve hot with steamed rice.',






      ],
    }
];
 
const RecipesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
 
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  return (
<div>
<div className="search-bar">
<input
          type="text"
          placeholder="Search Recipe"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
<button>Search</button>
</div>
<div className="container">
        {filteredRecipes.map((recipe, index) => (
<RecipeCard key={index} {...recipe} />
        ))}
</div>
</div>
  );
};
 
export default RecipesPage;*/

import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import './RecipesPage.css';

const recipes = [
  {
    image: require('../../assets/Recipes/Pakhala.jpg'),
    title: 'Pakhala',
    calories: 4228.043058200812,
    ingredients: [
      '1) 2 cups cooked rice (preferably leftover rice)',
      '2) 4 cups water (adjust as needed)',
      '3) 1/2 teaspoon salt (or to taste)',
      '4) 1/4 teaspoon mustard seeds',
      '5) 1-2 green chilies (slit or chopped)',
      '6) 1/2 teaspoon grated ginger',
      '7) 1-2 tablespoons yogurt (optional, for fermentation)',
      '8) 1 sprig of curry leaves (optional)',
      '9) 1-2 tablespoons chopped coriander leaves (optional, for garnish)'
    ],
    
    instructions: [
      '1. Use leftover or cooked rice and let it cool completely.',
      '2. Place the rice in a bowl and add 4 cups of water.',
      '3. Mix in 1/2 teaspoon salt, grated ginger, and chopped green chilies.',
      '4. Optionally add 1-2 tablespoons of yogurt and cover the bowl.',
      '5. Let it ferment at room temperature for 6-8 hours or overnight.',
      '6. Optionally, heat oil and splutter 1/4 teaspoon mustard seeds with curry leaves.',
      '7. Pour the tempering over the fermented rice and mix well.',
      '8. Garnish with 1-2 tablespoons of chopped coriander leaves if desired.',
      '9. Serve with roasted potatoes, badi chura, sautéed greens, or pickles, and enjoy cold or at room temperature.'
    ],
    
  },
  {
    image: require('../../assets/Recipes/Dalma.jpg'),
    title: 'Dalma',
    calories: 4228.043058200812,
    ingredients: [
      '1) 1 cup Toor Dal (Arhar Dal)',
      '2) 1 Potato, diced',
      '3) 1 Carrot, diced',
      '4) 1 cup Pumpkin, diced',
      '5) 1 Eggplant (Brinjal), diced',
      '6) 1/2 cup Green Beans, cut into pieces',
      '7) 1 Tomato, chopped',
      '8) 1/2 cup Raw Banana, diced',
      '9) 1/4 cup Grated Coconut (optional)',
      '10) 1 tsp Turmeric Powder',
      '11) Salt to taste',
      '12) 4 cups Water',
    ],
    instructions: ['1. Wash and soak 1 cup Toor Dal for 30 minutes.',
    '2. In a pressure cooker, add soaked Toor Dal, diced vegetables (potato, carrot, pumpkin, eggplant, green beans, raw banana), chopped tomato, 1 tsp turmeric powder, salt to taste, and 4 cups of water.',
    '3. Close the lid and pressure cook for 3-4 whistles until the dal and vegetables are cooked.',
    '4. In a separate pan, heat 2 tbsp ghee and add 1 tsp panch phoron (a mix of mustard, cumin, fenugreek, nigella, and fennel seeds), and 2 dry red chilies. Sauté until the spices release their aroma.',
    '5. Add this tempering to the cooked dal and vegetables in the pressure cooker. Mix well.',
    '6. Optionally, add 1/4 cup grated coconut and mix.',
    '7. Simmer the mixture on low heat for 5-7 minutes to allow the flavors to blend.',
    '8. Garnish with fresh coriander leaves and additional grated coconut if desired.',
    '9. Serve hot with steamed rice or roti.'], // Added this to avoid errors as it was missing
  },
  {
    image: require('../../assets/Recipes/Chhenapoda.jpg'),
    title: 'Chhenapoda',
    ingredients: [
      '1) 1 liter milk (to make fresh paneer)',
      '2) 2 tablespoons lemon juice or vinegar',
      '3) 1/2 cup semolina (sooji)',
      '4) 1 cup powdered sugar',
      '5) 4-5 green cardamom pods (crushed)',
      '6) 2-3 tablespoons ghee (clarified butter)',
      '7) 2-3 tablespoons chopped dry fruits (cashews, raisins, almonds)',
      '8) 1 teaspoon baking powder (optional)',
      '9) A pinch of salt',
      '10) Banana leaves or parchment paper (for lining the baking dish)',
    ],
    instructions: [
      '1. Make Paneer: Boil 1 liter of milk, add 2 tablespoons of lemon juice/vinegar to curdle it, strain, and drain the curds.',
      '2. Knead Paneer: Knead the drained paneer until smooth.',
      '3. Mix Ingredients: Add 1/2 cup semolina, 1 cup powdered sugar, 4-5 crushed cardamom pods, 2-3 tablespoons melted ghee, 2-3 tablespoons chopped dry fruits, and a pinch of salt. Mix well.',
      '4. Preheat Oven: Preheat to 180°C (350°F).',
      '5. Prepare Baking Dish: Grease and line with banana leaves or parchment paper.',
      '6. Pour Mixture: Spread the mixture evenly in the baking dish.',
      '7. Bake: Bake for 45-60 minutes until the top is golden brown and a skewer comes out clean.',
      '8. Cool and Serve: Let it cool, then cut into slices and serve.',
    ],
  },
  {
    image: require('../../assets/Recipes/Machha Besara.jpg'),
    title: 'Machha Besara',
    ingredients: [
      '1) 500 grams fish (Rohu or any firm fish), cut into pieces',
      '2) 2 tbsp mustard seeds & poppy seeds',
      '3) 1 teaspoon cumin seeds & turmeric powder',
      '4) 3-4 garlic cloves',
      '5) 2-3 green chilies',
      '6) 1 large onion, finely chopped',
      '7) 2 tablespoons mustard oil',
      '8) Salt to taste',
      '9) 1-2 tomatoes, chopped',
      '10) 1 potato, cut into wedges',
      '11) Fresh coriander leaves for garnish',
      '12) Water as needed',
    ],
    instructions: [
      '1. Marinate Fish: Marinate 500g fish with 1/2 tsp turmeric and salt for 15-20 minutes.',
      '2. Make Mustard Paste: Soak and grind 2 tbsp mustard seeds, 1 tbsp poppy seeds, 1 tsp cumin seeds, 3-4 garlic cloves, and 2-3 green chilies into a smooth paste.',
      '3. Fry Fish: Heat mustard oil, fry fish until golden brown, and set aside.',
      '4. Prepare Curry Base: In the same pan, fry 1 chopped onion until golden. Add mustard paste and sauté, then add 1-2 chopped tomatoes and cook until soft.',
      '5. Optional Potatoes: Add potato wedges and cook for a few minutes.',
      '6. Cook Fish: Add fried fish, water to make gravy, adjust salt and turmeric, and simmer until fish and potatoes are cooked through.',
      '7. Garnish and Serve: Garnish with fresh coriander and serve hot with steamed rice.',
    ],
  },
];

const RecipesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Recipe"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </div>
      <div className="container">
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;


