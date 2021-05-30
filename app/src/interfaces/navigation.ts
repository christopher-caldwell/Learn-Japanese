export interface NavigationProps<NavigationEnum> {
  navigation: {
    navigate: (nameOfScreen: NavigationEnum, routeProps?: Record<string, unknown>) => void
  }
  goBack: () => void
}
