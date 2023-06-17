import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigator from './src/navigations/MainStack'
import { Provider } from 'react-redux';
import store from './src/store'
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App
