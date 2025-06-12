import { Color, Size, Variant } from './Button.types'

export const backgroundColors: Record<Color, string> = {
  primary: '#2563eb',
  secondary: '#64748b',
  danger: '#dc2626'
}

export const textColors: Record<Color, string> = {
  primary: '#ffffff',
  secondary: '#ffffff',
  danger: '#ffffff'
}

export const padding: Record<Size, number> = {
  small: 8,
  medium: 12,
  large: 16
}

export const fontSize: Record<Size, number> = {
  small: 14,
  medium: 16,
  large: 18
}

export const getButtonStyle = (
  size: Size,
  variant: Variant,
  color: Color,
  disabled: boolean
) => {
  return {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    paddingVertical: padding[size],
    paddingHorizontal: padding[size] * 2,
    borderRadius: 8,
    opacity: disabled ? 0.6 : 1,
    borderWidth: variant === 'outline' ? 2 : 0,
    backgroundColor:
      variant === 'filled' ? backgroundColors[color] : 'transparent',
    borderColor: variant === 'outline' ? backgroundColors[color] : 'transparent'
  }
}

export const getTextStyle = (size: Size, variant: Variant, color: Color) => {
  return {
    fontSize: fontSize[size],
    color: variant === 'filled' ? textColors[color] : backgroundColors[color],
    marginHorizontal: 4
  }
}
