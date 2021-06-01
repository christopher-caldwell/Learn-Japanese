import React, { FC, useCallback } from 'react'
import { ScrollView } from 'react-native'
import { useRecoilValue } from 'recoil'

import { useNavigation } from '@/hooks'
import { GameRoutes } from '@/router/routes'
import { gameCharacterSetAtom, gameTimeLimitInMsAtom, gameNumberOfQuestionsLimitAtom } from '@/store'
import { ViewContainer, PageTitle, BottomActionButton } from '@/components/shared'
import CharacterSelect from '@/components/game/settings/character-select'
import NumberOfQuestions from '@/components/game/settings/number-of-questions'
import TimeLimit from '@/components/game/settings/time-limit'
import { Container } from './elements'

const Settings: FC = () => {
  const characters = useRecoilValue(gameCharacterSetAtom)
  const timeLimit = useRecoilValue(gameTimeLimitInMsAtom)
  const numberOfQuestions = useRecoilValue(gameNumberOfQuestionsLimitAtom)
  const { handleNavigation } = useNavigation()
  const startGame = useCallback(() => {
    handleNavigation(GameRoutes.Play)
  }, [handleNavigation])
  return (
    <>
      <ViewContainer>
        <PageTitle title='Settings' shouldShowIcons={false} />
        <Container>
          <ScrollView>
            <CharacterSelect />
            <TimeLimit />
            <NumberOfQuestions />
          </ScrollView>
        </Container>
      </ViewContainer>
      <BottomActionButton
        onPress={startGame}
        disabled={!characters?.length || !timeLimit || !numberOfQuestions}
        width='95%'
        text='Start'
      />
    </>
  )
}

export default Settings
