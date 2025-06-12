import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

interface FloatingLabelInputProps extends TextInputProps {
  label: string;
  focusColor?: string;
  blurColor?: string;
}

export const Input: React.FC<FloatingLabelInputProps> = ({
  label,
  value = '',
  onFocus,
  onBlur,
  focusColor = '#fff',
  blurColor = 'rgba(255,255,255,0.4)',
  ...props
}) => {
  const animation = useRef(new Animated.Value(value ? 1 : 0)).current;
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isFocused || value !== '' ? 1 : 0,
      duration: 200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const labelStyle = {
    top: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [7, -10],
    }),
    fontSize: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [blurColor, focusColor],
    }),
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.label, labelStyle]}>
        {label}
      </Animated.Text>
      <TextInput
        value={value}
        onChangeText={props.onChangeText}
        onFocus={(e) => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        style={[
          styles.input,
          {
            borderBottomColor: isFocused ? focusColor : blurColor,
          },
        ]}
        placeholder=""
        {...props}
        placeholderTextColor="transparent"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
  },
  label: {
    position: 'absolute',
    left: 0,
  },
  input: {
    height: 40,
    fontSize: 16,
    color: '#fff',
    borderBottomWidth: 2,
  },
});
