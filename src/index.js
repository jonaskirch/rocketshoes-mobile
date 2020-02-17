import React from 'react';
import './config/ReactotronConfig';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import Routes from './routes';
import Header from './components/Header'

export default function App() {
  return (
    <>
      {/* <StatusBar  barStyle="light-content" /> */}
      {/* <Header /> */}
      <Routes />
    </>
  );
}
