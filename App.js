import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import DashboardScreen from './screens/DashboardScreen';

import firebase from 'firebase';
// import { firebaseConfig } from "./config";

var firebaseConfig = {
  apiKey: 'AIzaSyDa3_Bv77FRDoW-P95uVI1sISo5JdM69bY',
  authDomain: 'hotel-chatbot-demo.firebaseapp.com',
  databaseURL: 'https://hotel-chatbot-demo-default-rtdb.firebaseio.com',
  projectId: 'hotel-chatbot-demo',
  storageBucket: 'hotel-chatbot-demo.appspot.com',
  messagingSenderId: '1092137861522',
  appId: '1:1092137861522:web:025039ed5ee2809e17814b',
  measurementId: 'G-V8HVEEE1SY',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}
