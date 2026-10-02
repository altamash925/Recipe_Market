import biryaniImage from "../assets/biryani.jpg";
import pastaImage from "../assets/pasta.jpg";
import pancakesImage from "../assets/pancakes.jpg";
import cakeImage from "../assets/cake.jpg";
import paneerImage from "../assets/paneer.jpg";
import dosaImage from "../assets/dosa.jpg";

const recipes = [
  {
    id: 1,
    name: "Chicken Biryani",
    category: "Lunch",
    time: "60 min",
    servings: 4,
    rating: 4.8,
    ratingsCount: 24,
    description:
      "A flavorful and delicious chicken biryani made with aromatic spices and basmati rice.",
    image: biryaniImage,

    ingredients: [
      "500g Chicken",
      "2 cups Basmati Rice",
      "2 Onions",
      "2 Tomatoes",
      "1 tbsp Ginger Garlic Paste",
      "2 tbsp Biryani Masala",
      "1/2 cup Yogurt",
      "Fresh Coriander",
    ],
  },

  {
    id: 2,
    name: "Creamy Pasta",
    category: "Dinner",
    time: "25 min",
    servings: 2,
    rating: 4.9,
    ratingsCount: 18,
    description:
      "A simple and creamy pasta recipe that is quick to prepare and full of flavor.",
    image: pastaImage,

    ingredients: [
      "200g Pasta",
      "1 cup Cream",
      "2 tbsp Butter",
      "2 Garlic Cloves",
      "1/2 cup Parmesan Cheese",
      "Black Pepper",
      "Salt",
    ],
  },

  {
    id: 3,
    name: "Fluffy Pancakes",
    category: "Breakfast",
    time: "20 min",
    servings: 2,
    rating: 4.7,
    ratingsCount: 15,
    description:
      "Soft and fluffy pancakes perfect for a quick and delicious breakfast.",
    image: pancakesImage,

    ingredients: [
      "1 cup Flour",
      "1 cup Milk",
      "1 Egg",
      "2 tbsp Sugar",
      "1 tsp Baking Powder",
      "1 tbsp Butter",
      "Pinch of Salt",
    ],
  },

  {
    id: 4,
    name: "Chocolate Cake",
    category: "Dessert",
    time: "45 min",
    servings: 6,
    rating: 4.9,
    ratingsCount: 21,
    description:
      "A soft and rich chocolate cake that is perfect for dessert or special occasions.",
    image: cakeImage,

    ingredients: [
      "1.5 cups Flour",
      "1 cup Sugar",
      "1/2 cup Cocoa Powder",
      "2 Eggs",
      "1 cup Milk",
      "1/2 cup Butter",
      "1 tsp Baking Powder",
    ],
  },

  {
    id: 5,
    name: "Paneer Tikka",
    category: "Dinner",
    time: "35 min",
    servings: 3,
    rating: 4.6,
    ratingsCount: 12,
    description:
      "Soft paneer marinated with spices and cooked until perfectly golden.",
    image: paneerImage,

    ingredients: [
      "250g Paneer",
      "1/2 cup Yogurt",
      "1 Onion",
      "1 Bell Pepper",
      "1 tbsp Tikka Masala",
      "1 tsp Ginger Garlic Paste",
      "Salt",
    ],
  },

  {
    id: 6,
    name: "Masala Dosa",
    category: "Breakfast",
    time: "40 min",
    servings: 3,
    rating: 4.8,
    ratingsCount: 17,
    description:
      "Crispy dosa filled with a flavorful potato masala, served with chutney.",
    image: dosaImage,

    ingredients: [
      "Dosa Batter",
      "3 Potatoes",
      "1 Onion",
      "Green Chilies",
      "Mustard Seeds",
      "Curry Leaves",
      "Salt",
    ],
  },
];

export default recipes;