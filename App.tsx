import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, StyleSheet } from 'react-native';


function App(): React.JSX.Element {

  return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Estrutura inicial</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;