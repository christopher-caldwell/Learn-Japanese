import { Dimensions } from 'react-native'

const dimensions = Dimensions.get('window')

export const height = dimensions.height
export const fonScale = dimensions.fontScale
export const width = dimensions.width
export const scale = dimensions.scale
export const aspectRatio = height / width
export const tabBarHeight = 50
