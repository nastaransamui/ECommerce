import bcrypt from 'bcryptjs';
const data = {
  users:[
    {
      name: "Majid",
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8 ),
      isAdmin: true,
    },
    {
      name: "John",
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8 ),
      isAdmin: false,
    },
  ],
  products:[
    {
      name: 'Nike Slim Shirt',
      category: "Shirts",
      image: '/images/p0.jpg',
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product'
    },
    {
      name: 'Adidas Slim Shirt',
      category: "Shirts",
      image: '/images/p1.jpg',
      price: 100,
      countInStock: 20,
      brand: "Adidas",
      rating: 1.5,
      numReviews: 10,
      description: 'high quality product'
    },
    {
      name: 'Lacoste Free Shirt',
      category: "Shirts",
      image: '/images/p2.jpg',
      price: 220,
      countInStock: 0,
      brand: "Lacoste",
      rating: 2.8,
      numReviews: 10,
      description: 'high quality product'
    },
    {
      name: 'Nike Slim Pants',
      category: "Pants",
      image: '/images/p3.jpg',
      price: 78,
      countInStock: 15,
      brand: "Nike",
      rating: 3.5,
      numReviews: 14,
      description: 'high quality product'
    },
    {
      name: 'Puma Slim Pants',
      category: "Pants",
      image: '/images/p4.jpg',
      price: 60,
      countInStock: 5,
      brand: "Puma",
      rating: 4,
      numReviews: 10,
      description: 'high quality product'
    },
    {
      name: 'Adidas Slim Pants',
      category: "Pants",
      image: '/images/p5.jpg',
      price: 139,
      countInStock: 12,
      brand: "Adidas",
      rating: 5,
      numReviews: 15,
      description: 'high quality product'
    },
  ]
}

export default data;