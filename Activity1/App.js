import React from 'react';
import { StatusBar } from 'react-native';
import MovieScreen from './MovieScreen';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FF69B4" />
      <MovieScreen />
    </>
  );
}