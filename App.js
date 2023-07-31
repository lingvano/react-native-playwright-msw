import React, { useEffect, useState } from 'react';
import { worker } from './mocks/browser';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

worker.start();

export default function App() {
  const [message, setMessage] = useState('Loading');

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.title));
  }, []);

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
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
