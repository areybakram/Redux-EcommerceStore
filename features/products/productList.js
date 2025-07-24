import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './productSlice';
import { addToCart } from '../cart/cartSlice';

export default function ProductList() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === 'loading') return <ActivityIndicator size="large" />;
  if (status === 'failed') return <Text>Error: {error}</Text>;

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
          <Button title="Add to Cart" onPress={() => dispatch(addToCart(item))} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  card: { marginBottom: 20, backgroundColor: '#f5f5f5', padding: 10, borderRadius: 8 },
  image: { width: 100, height: 100, resizeMode: 'contain', marginBottom: 10 },
  title: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 14, color: 'green' }
});
