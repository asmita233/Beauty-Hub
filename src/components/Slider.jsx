import React, { useState, useEffect } from "react";

 export const slider = [
  "https://source.unsplash.com/1600x600/?makeup,beauty",
  "https://source.unsplash.com/1600x600/?cosmetics",
  "https://source.unsplash.com/1600x600/?skincare",
];

const featuredProducts = [
  {
    id: 1,
    name: "Lipstick",
    image: "https://source.unsplash.com/400x400/?lipstick",
    price: "$15",
  },
  {
    id: 2,
    name: "Foundation",
    image: "https://source.unsplash.com/400x400/?foundation",
    price: "$25",
  },
  {
    id: 3,
    name: "Eyeshadow",
    image: "https://source.unsplash.com/400x400/?eyeshadow",
    price: "$20",
  },
];