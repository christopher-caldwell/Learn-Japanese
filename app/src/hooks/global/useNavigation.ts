import { useCallback } from 'react'
import { useNavigation as useReactNavigation } from '@react-navigation/core'
import { useSetRecoilState } from 'recoil'

import { activeTabAtom } from '@/store'
import { Routes } from '@/router/routes'

export const useNavigation = <Route extends MainRouteOption>() => {
  const setActiveTab = useSetRecoilState(activeTabAtom)
  const navigation = useReactNavigation()

  const handleNavigation = useCallback(
    (route: Route, options?: RouteOptions) => {
      if (options?.screen) setActiveTab(route as Routes)
      navigation.navigate(route, options)
    },
    [navigation, setActiveTab]
  )

  return {
    handleNavigation,
    navigation,
  }
}

type MainRouteOption = Routes | GiftsRoutes | GroupRoutes | VisitorRoutes
type SubRouteOption = GiftsRoutes | GroupRoutes

type RouteOptions =
  | {
      screen: SubRouteOption
      params?: Record<string, unknown>
      initial?: boolean
    }
  | (Record<string, unknown> & {
      screen?: never
    })
