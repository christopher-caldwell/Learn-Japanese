import { atom } from 'recoil'

import { Routes } from '@/router/routes'

export const activeTabAtom = atom<Routes>({
  key: 'active-tab',
  default: Routes.Home,
})
