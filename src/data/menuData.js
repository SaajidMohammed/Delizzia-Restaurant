// src/data/menuData.js
import pizza1 from '../assets/Images/Menu1.png';
import pizza2 from '../assets/Images/Pizza2.png';
import pizza3 from '../assets/Images/Pizza3.png';
import pizza4 from '../assets/Images/Pizza4.png';

import pasta1 from '../assets/Images/Menu2.png';
import pasta2 from '../assets/Images/Pasta2.png';
import pasta3 from '../assets/Images/Pasta3.png';
import pasta4 from '../assets/Images/Pasta4.png';

import salad1 from '../assets/Images/Menu3.png';
import salad2 from '../assets/Images/Salad2.png';
import salad3 from '../assets/Images/Salad3.png';
import salad4 from '../assets/Images/Salad4.png';

import dessert1 from '../assets/Images/Background.png';
import dessert2 from '../assets/Images/Dessert2.png';
import dessert3 from '../assets/Images/Dessert3.png';
import dessert4 from '../assets/Images/Dessert4.png';

export const menuData = {
  pizza: [
    { id: 1, name: "Margherita Pizza", price: "₹299", image: pizza1 },
    { id: 2, name: "Pepperoni Pizza", price: "₹349", image: pizza2 },
    { id: 3, name: "Veggie Supreme", price: "₹329", image: pizza3 },
    { id: 4, name: "BBQ Chicken Pizza", price: "₹379", image: pizza4 }
  ],
  pasta: [
    { id: 5, name: "Pasta Alfredo", price: "₹349", image: pasta1 },
    { id: 6, name: "Penne Arrabbiata", price: "₹299", image: pasta2 },
    { id: 7, name: "Spaghetti Carbonara", price: "₹379", image: pasta3 },
    { id: 8, name: "Fusilli Pesto", price: "₹329", image: pasta4 }
  ],
  salad: [
    { id: 9, name: "Caesar Salad", price: "₹199", image: salad1 },
    { id: 10, name: "Greek Salad", price: "₹179", image: salad2 },
    { id: 11, name: "Garden Fresh Salad", price: "₹159", image: salad3 },
    { id: 12, name: "Quinoa Salad", price: "₹219", image: salad4 }
  ],
  dessert: [
    { id: 13, name: "Tiramisu", price: "₹249", image: dessert1 },
    { id: 14, name: "Chocolate Lava Cake", price: "₹199", image: dessert2 },
    { id: 15, name: "Panna Cotta", price: "₹179", image: dessert3 },
    { id: 16, name: "Cheesecake", price: "₹229", image: dessert4 }
  ]
};

export const categories = [
  { name: "Pizza", slug: "pizza", image: pizza1 },
  { name: "Pasta", slug: "pasta", image: pasta1 },
  { name: "Salad", slug: "salad", image: salad1 },
  { name: "Dessert", slug: "dessert", image: dessert1 }
];