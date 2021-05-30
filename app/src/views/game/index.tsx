import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { GameRoutes } from '@/router/routes'
import Play from './play'
import Settings from './settings'
import Results from './results'

const Stack = createStackNavigator()

const GameRouter = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name={GameRoutes.Settings} component={Settings} />
        <Stack.Screen
          options={{
            headerBackTitleVisible: false,
            headerTitle: '',
          }}
          name={GameRoutes.Play}
          component={Play}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={GameRoutes.Results}
          component={Results}
        />
      </Stack.Navigator>
    </>
  )
}

export default GameRouter
