import React, { FC } from 'react'
import { ScrollView } from 'react-native'

import { ViewContainer, PageTitle, BottomActionButton } from '@/components/shared'
import CharacterSelect from '@/components/game/settings/character-select'
import TimeLimit from '@/components/game/settings/time-limit'
import { Container } from './elements'

const Settings: FC = () => {
  return (
    <>
      <ViewContainer>
        <PageTitle title='Settings' shouldShowIcons={false} />
        <Container>
          <ScrollView>
            <CharacterSelect />
            <TimeLimit />
          </ScrollView>
        </Container>
      </ViewContainer>
      <BottomActionButton width='95%' text='Start' />
    </>
  )
}

export default Settings
