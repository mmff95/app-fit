import { TextStyle, ViewStyle } from 'react-native'

export type Size = 'small' | 'medium' | 'large'
export type Variant = 'filled' | 'outline' | 'text'
export type Color = 'primary' | 'secondary' | 'danger'

export interface ButtonProps {
  onPress: () => void
  children: React.ReactNode
  size?: Size
  variant?: Variant
  color?: Color
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  loading?: boolean
  disabled?: boolean
  style?: ViewStyle
  textStyle?: TextStyle
}
