import React, { useEffect, useState } from 'react';
import { worker } from './mocks/browser';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

worker.start();

export default function App() {
  const [title, setTitle] = useState('Loading');

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setTitle(data.title));
  }, []);

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
