import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ProductList from './features/products/productList';
import CartScreen from './features/cart/cartScreen';
import { Button, View } from 'react-native';

export default function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Button title={showCart ? "View Products" : "View Cart"} onPress={() => setShowCart(!showCart)} />
        {showCart ? <CartScreen /> : <ProductList />}
      </View>
    </Provider>
  );
}
