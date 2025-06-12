import { Text as RText, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { TextProps } from './Text.types';

export const Text = ({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: TextProps) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <RText
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'FontTextRegular'
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'FontTextMedium'
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    fontFamily: 'FontTitleBold'
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'FontTitleBold'
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
