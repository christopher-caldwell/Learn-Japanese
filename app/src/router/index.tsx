import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { TabBar } from '@/components/shared'

import Home from '@/views/home'
import { Routes } from './routes'

const Tab = createBottomTabNavigator()
const Router: FC = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={Routes.Home} component={Home} />
      <Tab.Screen name={Routes.Groups} component={Home} />
      <Tab.Screen name={Routes.Add} component={Home} />
      <Tab.Screen name={Routes.Gifts} component={Home} />
      <Tab.Screen name={Routes.Profile} component={Home} />
    </Tab.Navigator>
  )
}

export default Router
