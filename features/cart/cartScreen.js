import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../cart/cartSlice'; 



export default function CartScreen() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return <Text style={styles.empty}>Cart is empty.</Text>;
  }
  return (
    <FlatList
      data={cartItems}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>${item.price}</Text>
          <Button
            title="Remove"
            onPress={() => dispatch(removeFromCart(item.id))}
            color="#ff4d4d"
          />
        </View>
      )}
    />
  );
}
const styles = StyleSheet.create({
  container: { padding: 10 },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    borderRadius: 8
  },
  title: { fontWeight: 'bold', marginBottom: 5 },
  empty: { textAlign: 'center', marginTop: 50, fontSize: 18 }
});
