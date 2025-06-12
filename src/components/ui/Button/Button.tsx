import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import { getButtonStyle, getTextStyle } from './Button.styles'
import { ButtonProps } from './Button.types'

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  size = 'medium',
  variant = 'filled',
  color = 'primary',
  icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  style,
  textStyle
}) => {
  const buttonStyle = getButtonStyle(size, variant, color, disabled)
  const textStyles = getTextStyle(size, variant, color)

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[buttonStyle, style]}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={textStyles.color} />
      ) : (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {icon && iconPosition === 'left' && (
            <View style={{ marginRight: 6 }}>{icon}</View>
          )}
          <Text style={[textStyles, textStyle]}>{children}</Text>
          {icon && iconPosition === 'right' && (
            <View style={{ marginLeft: 6 }}>{icon}</View>
          )}
        </View>
      )}
    </TouchableOpacity>
  )
}
