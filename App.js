import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './src/navigation/Nav';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <>
      <AuthProvider>
          <Nav />
      </AuthProvider>
    </>
  );
}