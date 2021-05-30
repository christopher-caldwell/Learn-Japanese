import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { TabBar } from '@/components/shared'

import Home from '@/views/home'
import Game from '@/views/game'
import { Routes } from './routes'

const Tab = createBottomTabNavigator()
const Router: FC = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={Routes.Home} component={Home} />
      <Tab.Screen name={Routes.Game} component={Game} />
      <Tab.Screen name={Routes.Profile} component={Home} />
    </Tab.Navigator>
  )
}

export default Router
