// Arquivo: App.tsx (na raiz do projeto)

import React from 'react';
import { StatusBar } from 'react-native';
import LoginScreen from '@/screens/Auth/LoginScreen';

function App(): React.JSX.Element {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <LoginScreen />
    </>
  );
}

export default App;