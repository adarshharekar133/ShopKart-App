
const productDetails = [
  {
    id: 1,
    name: "Samsung Galaxy M14 5G",
    brand: "Samsung",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=90",
    rating: 4.4,
    reviews: 1850,
    shortDescription: "A powerful 5G smartphone with a large display, long-lasting battery and smooth everyday performance.",
    price: 12499,
    originalPrice: 14999,
    discount: "17%",
    availability: "In Stock",
    description: "The Samsung Galaxy M14 5G delivers a smooth smartphone experience with 5G connectivity, a large immersive display and a powerful 6000 mAh battery. It is suitable for browsing, entertainment, social media and everyday tasks.",
    keyFeatures: [
      "5G Connectivity",
      "Large Immersive Display",
      "6000 mAh Battery",
      "Smooth Performance",
      "Expandable Storage"
    ],
    specifications: {
      brand: "Samsung",
      model: "Galaxy M14 5G",
      connectivity: "5G",
      battery: "6000 mAh",
      color: "Black",
      warranty: "1 Year"
    },
    customerReviews: [
      {
        name: "Rahul",
        rating: 5,
        comment: "Good performance and excellent battery backup."
      },
      {
        name: "Sneha",
        rating: 4,
        comment: "Good features and smooth overall experience."
      }
    ]
  },

  {
    id: 2,
    name: "boAt Rockerz 450",
    brand: "boAt",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=90",
    rating: 4.5,
    reviews: 1200,
    shortDescription: "Stylish wireless headphones with powerful sound and comfortable ear cushions.",
    price: 1599,
    originalPrice: 2999,
    discount: "47%",
    availability: "In Stock",
    description: "The boAt Rockerz 450 headphones offer an enjoyable audio experience with powerful sound, comfortable ear cushions and a stylish design. They are suitable for music, movies and everyday entertainment.",
    keyFeatures: [
      "Wireless Connectivity",
      "Powerful Stereo Sound",
      "Comfortable Ear Cushions",
      "Foldable Design",
      "Built-in Microphone"
    ],
    specifications: {
      brand: "boAt",
      model: "Rockerz 450",
      connectivity: "Bluetooth",
      battery: "Up to 15 Hours",
      color: "Black",
      warranty: "1 Year"
    },
    customerReviews: [
      {
        name: "Amit",
        rating: 5,
        comment: "Amazing sound quality at this price."
      },
      {
        name: "Priya",
        rating: 4,
        comment: "Comfortable and stylish headphones."
      }
    ]
  },

  {
    id: 3,
    name: "Red Tape Sneakers",
    brand: "Red Tape",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=90",
    rating: 4.5,
    reviews: 980,
    shortDescription: "Modern casual sneakers designed for comfort, durability and everyday style.",
    price: 2099,
    originalPrice: 3999,
    discount: "48%",
    availability: "In Stock",
    description: "Red Tape Sneakers combine modern styling with everyday comfort. Their versatile design makes them suitable for casual outings, daily wear and different fashion looks.",
    keyFeatures: [
      "Stylish Modern Design",
      "Comfortable Footbed",
      "Durable Construction",
      "Lightweight Feel",
      "Everyday Casual Wear"
    ],
    specifications: {
      brand: "Red Tape",
      model: "Casual Sneakers",
      material: "Synthetic",
      closure: "Lace-Up",
      color: "Red",
      warranty: "Manufacturer Warranty"
    },
    customerReviews: [
      {
        name: "Rohit",
        rating: 5,
        comment: "Very stylish and comfortable shoes."
      },
      {
        name: "Karan",
        rating: 4,
        comment: "Good quality for everyday use."
      }
    ]
  },

  {
    id: 4,
    name: "Noise ColorFit Pro 4",
    brand: "Noise",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=90",
    rating: 4.6,
    reviews: 2300,
    shortDescription: "A stylish smartwatch with fitness tracking and smart notifications.",
    price: 2999,
    originalPrice: 4999,
    discount: "40%",
    availability: "In Stock",
    description: "The Noise ColorFit Pro 4 smartwatch is designed to help you stay connected and track your daily activities. Its modern design and useful smart features make it a great everyday companion.",
    keyFeatures: [
      "Large Touch Display",
      "Heart Rate Monitoring",
      "Activity Tracking",
      "Smart Notifications",
      "Multiple Sports Modes"
    ],
    specifications: {
      brand: "Noise",
      model: "ColorFit Pro 4",
      display: "Touch Display",
      connectivity: "Bluetooth",
      color: "Black",
      warranty: "1 Year"
    },
    customerReviews: [
      {
        name: "Akash",
        rating: 5,
        comment: "Great smartwatch with useful features."
      },
      {
        name: "Neha",
        rating: 4,
        comment: "Looks premium and works smoothly."
      }
    ]
  },

  {
    id: 5,
    name: "Levi's Jeans",
    brand: "Levi's",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=90",
    rating: 4.5,
    reviews: 890,
    shortDescription: "Classic denim jeans offering a stylish look and comfortable everyday fit.",
    price: 2099,
    originalPrice: 3499,
    discount: "40%",
    availability: "In Stock",
    description: "Levi's Jeans bring together classic denim styling and everyday comfort. Their versatile look makes them easy to pair with shirts, T-shirts and casual outfits.",
    keyFeatures: [
      "Classic Denim Style",
      "Comfortable Fit",
      "Durable Fabric",
      "Versatile Design",
      "Everyday Wear"
    ],
    specifications: {
      brand: "Levi's",
      model: "Denim Jeans",
      material: "Denim",
      fit: "Regular Fit",
      color: "Blue",
      warranty: "No Warranty"
    },
    customerReviews: [
      {
        name: "Vishal",
        rating: 5,
        comment: "Excellent fitting and fabric quality."
      },
      {
        name: "Pooja",
        rating: 4,
        comment: "Good jeans with a classic look."
      }
    ]
  },

  {
    id: 6,
    name: "boAt Airdopes 141",
    brand: "boAt",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=90",
    rating: 4.4,
    reviews: 3400,
    shortDescription: "Compact wireless earbuds with immersive audio and a convenient charging case.",
    price: 1299,
    originalPrice: 2490,
    discount: "48%",
    availability: "In Stock",
    description: "The boAt Airdopes 141 provide a convenient wireless listening experience. Their compact design, charging case and immersive audio make them suitable for music and daily communication.",
    keyFeatures: [
      "True Wireless Stereo",
      "Compact Charging Case",
      "Touch Controls",
      "Built-in Microphone",
      "Portable Design"
    ],
    specifications: {
      brand: "boAt",
      model: "Airdopes 141",
      connectivity: "Bluetooth",
      type: "Wireless Earbuds",
      color: "Black",
      warranty: "1 Year"
    },
    customerReviews: [
      {
        name: "Sahil",
        rating: 5,
        comment: "Good sound quality and easy to use."
      },
      {
        name: "Riya",
        rating: 4,
        comment: "Compact and convenient for daily use."
      }
    ]
  },

  {
    id: 7,
    name: "Men's Casual Shirt",
    brand: "Fashion Wear",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=800&q=90",
    rating: 4.3,
    reviews: 760,
    shortDescription: "A versatile casual shirt designed for a smart and comfortable everyday look.",
    price: 899,
    originalPrice: 1499,
    discount: "40%",
    availability: "In Stock",
    description: "This men's casual shirt is designed for everyday comfort and effortless styling. Pair it with jeans or trousers for a smart casual look.",
    keyFeatures: [
      "Modern Casual Design",
      "Comfortable Fabric",
      "Versatile Styling",
      "Easy to Pair",
      "Suitable for Everyday Wear"
    ],
    specifications: {
      brand: "Fashion Wear",
      model: "Men's Casual Shirt",
      material: "Cotton Blend",
      sleeve: "Full Sleeve",
      color: "Blue",
      fit: "Regular Fit"
    },
    customerReviews: [
      {
        name: "Aman",
        rating: 5,
        comment: "Nice design and comfortable fabric."
      },
      {
        name: "Sagar",
        rating: 4,
        comment: "Good shirt for casual outings."
      }
    ]
  },

  {
    id: 8,
    name: "Minimalist Table Lamp",
    brand: "Home Decor",
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=90",
    rating: 4.5,
    reviews: 540,
    shortDescription: "A modern minimalist table lamp that adds style and soft lighting to your space.",
    price: 1199,
    originalPrice: 1999,
    discount: "40%",
    availability: "In Stock",
    description: "The Minimalist Table Lamp combines a clean modern design with practical lighting. It is suitable for bedrooms, study tables and workspaces.",
    keyFeatures: [
      "Minimalist Design",
      "Soft Ambient Lighting",
      "Compact Structure",
      "Suitable for Study Tables",
      "Modern Home Decor"
    ],
    specifications: {
      brand: "Home Decor",
      model: "Minimalist Table Lamp",
      type: "Table Lamp",
      usage: "Indoor",
      color: "White",
      warranty: "1 Year"
    },
    customerReviews: [
      {
        name: "Meera",
        rating: 5,
        comment: "Looks beautiful on my study table."
      },
      {
        name: "Nikhil",
        rating: 4,
        comment: "Good design and useful lighting."
      }
    ]
  }
];

export default productDetails;
