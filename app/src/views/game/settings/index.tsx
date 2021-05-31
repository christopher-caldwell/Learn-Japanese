import React, { FC } from 'react'
import { View } from 'react-native'

import { ViewContainer, PageTitle } from '@/components/shared'
import CharacterSelect from '@/components/game/settings/character-select'
// import CharacterSelect from './select'

const Settings: FC = () => {
  return (
    <ViewContainer>
      <PageTitle title='Settings' shouldShowIcons={false} />
      <View>
        <CharacterSelect />
      </View>
    </ViewContainer>
  )
}

export default Settings
