# 🛒 React Native E-Commerce Store App

A simple and modern **React Native E-Commerce Store** built using Redux for state management. This app fetches product data from an API, displays a product list, allows users to add items to the cart, and supports cart management (add/remove items). Built with **Expo**, **Redux Toolkit**, and **Axios**. 

---

## Features

- Fetch products from a live API using `createAsyncThunk`
- Add items to cart
- Remove items from cart
- Global state management using Redux Toolkit
- Organized folder structure with feature slices

---

## Project Structure

```
ecommerce-app/
├── App.js
├── store/
│   └── index.js               # Redux store setup
├── features/
│   └── products/
│       ├── productSlice.js    # Async product fetching logic
│       └── ProductList.js     # Product listing component
│
│   └── cart/
│       ├── cartSlice.js       # Cart state management
│       └── CartScreen.js      # Cart UI with remove feature
```

---

## Tech Stack

- **React Native** with Expo
- **Redux Toolkit** for state management
- **React Redux**
- **Axios** for API calls
- **JavaScript (ES6+)**

---

## Getting Started

### 1. Clone the repository

```bash
git https://github.com/areybakram/Redux-EcommerceStore.git
cd Redux-EcommerceStore
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the app

```bash
npx expo start
```

Make sure you have Expo Go installed on your phone or use an emulator/simulator.

---

## API Used

This app fetches products from the [Fake Store API](https://fakestoreapi.com/products).

Example response:
```json
[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack",
    "price": 109.95,
    ...
  }
]
```

---

## Key Redux Concepts Used

### `createAsyncThunk` (Product Slice)

```js
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});
```

Used to asynchronously fetch products and update the Redux state on success/failure.

### Cart Slice Logic

Add/Remove items using Redux reducers:
```js
addToCart: (state, action) => {
  state.items.push(action.payload);
},

removeFromCart: (state, action) => {
  const idToRemove = action.payload;
  state.items = state.items.filter(item => item.id !== idToRemove);
}
```

---

## Screens

### ProductList

- Displays all fetched products
- Button to add product to cart

### CartScreen

- Displays added cart items
- "Remove" button to delete item from cart

---

## Known Improvements (TODO)

- Quantity selection in cart
- Persist cart with AsyncStorage
- Product detail screen
- Checkout flow
- Authentication (login/register)

---

## 👨‍💻 Author

Built by Mohammad Areeb Akram

This project was part of Mobile Application Development Internship at WEBSOULS.

Feel free to fork, extend, or use it as a starter template for your own apps!

---

