import React from 'react';
import './config/ReactotronConfig';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </>
  );
}
