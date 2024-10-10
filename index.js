const express = require('express');
const { resolve } = require('path');
let cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
let products = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
];

// 1. Function to sort products by rating in descending order
function sortProductsByRating(product1, product2) {
  return product2.rating - product1.rating;
}

// 1. Endpoint to get products sorted by popularity
app.get('/products/sort/popularity', (req, res) => {
  const sortedProducts = products.slice().sort(sortProductsByRating);
  res.json({ products: sortedProducts });
});

// 2. Function to sort products by price in descending order
function sortProductsByPriceHighToLow(product1, product2) {
  return product2.price - product1.price;
}

// 2. Endpoint to get products sorted by price (high to low)
app.get('/products/sort/price-high-to-low', (req, res) => {
  const sortedProducts = products.slice().sort(sortProductsByPriceHighToLow);
  res.json({ products: sortedProducts });
});
// 3. Function to sort products by price in ascending order
function sortProductsByPriceLowToHigh(product1, product2) {
  return product1.price - product2.price;
}

// 3. Endpoint to get products sorted by price (low to high)
app.get('/products/sort/price-low-to-high', (req, res) => {
  const sortedProducts = products.slice().sort(sortProductsByPriceLowToHigh);
  res.json({ products: sortedProducts });
}); // 4. Function to filter products by RAM
function filterByRam(product, ram) {
  return product.ram === ram;
}

// 4. Endpoint to filter products by RAM
app.get('/products/filter/ram', (req, res) => {
  const ram = parseInt(req.query.ram); // Get the RAM from the query parameter
  const filteredProducts = products.filter((product) =>
    filterByRam(product, ram)
  );
  res.json({ products: filteredProducts });
});

// 5. Function to filter products by ROM
function filterByRom(product, rom) {
  return product.rom === rom;
}

// 5. Endpoint to filter products by ROM
app.get('/products/filter/rom', (req, res) => {
  const rom = parseInt(req.query.rom); // Get the ROM from the query parameter
  const filteredProducts = products.filter((product) =>
    filterByRom(product, rom)
  );
  res.json({ products: filteredProducts });
});
// 6. Function to filter products by brand
function filterByBrand(product, brand) {
  return product.brand.toLowerCase() === brand.toLowerCase();
}

// 6. Endpoint to filter products by brand
app.get('/products/filter/brand', (req, res) => {
  const brand = req.query.brand;
  const filteredProducts = products.filter((product) =>
    filterByBrand(product, brand)
  );
  res.json({ products: filteredProducts });
});
// 7. Function to filter products by OS
function filterByOs(product, os) {
  return product.os.toLowerCase() === os.toLowerCase();
}

// 7. Endpoint to filter products by OS
app.get('/products/filter/os', (req, res) => {
  const os = req.query.os; // Get the OS from the query parameter
  const filteredProducts = products.filter((product) =>
    filterByOs(product, os)
  );
  res.json({ products: filteredProducts });
});
// 8. Function to filter products by price
function filterByPrice(product, maxPrice) {
  return product.price <= maxPrice;
}

// 8. Endpoint to filter products by price
app.get('/products/filter/price', (req, res) => {
  const maxPrice = parseFloat(req.query.price); // Get the price from the query parameter
  const filteredProducts = products.filter((product) =>
    filterByPrice(product, maxPrice)
  );
  res.json({ products: filteredProducts });
});
// 1. Endpoint to get all products
app.get('/products', (req, res) => {
  res.json({ products: products });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
