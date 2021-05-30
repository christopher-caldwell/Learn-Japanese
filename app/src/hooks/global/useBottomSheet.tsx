import React, { FC, useRef, useCallback, useMemo } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'
import { Portal } from '@gorhom/portal'

const defaultSnapPoints = [0, '90%']
export const useBottomSheet = (snapPointsOverride?: (string | number)[]) => {
  const snapPoints = snapPointsOverride || defaultSnapPoints
  const bottomSheetRef = useRef<BottomSheet>(null)

  const openSheet = useCallback(() => {
    bottomSheetRef?.current?.expand()
  }, [])

  const closeSheet = useCallback(() => {
    bottomSheetRef?.current?.close()
  }, [])

  const Sheet: FC = useMemo(
    () =>
      ({ children }) =>
        (
          <Portal>
            <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints}>
              {children}
            </BottomSheet>
          </Portal>
        ),
    []
  )

  return {
    Sheet,
    openSheet,
    closeSheet,
    bottomSheetRef,
  }
}
