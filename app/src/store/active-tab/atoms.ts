import { atom } from 'recoil'

import { Routes } from '@/views/authenticated/routes'

export const activeTabAtom = atom<Routes>({
  key: 'active-tab',
  default: Routes.Home,
})
