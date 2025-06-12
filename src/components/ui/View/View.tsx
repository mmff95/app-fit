import { useThemeColor } from '@/hooks/useThemeColor';
import { View as RView } from 'react-native';
import { ViewProps } from './View.types';

export const View = ({ style, lightColor, darkColor, ...otherProps }: ViewProps) => {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <RView style={[{ backgroundColor }, style]} {...otherProps} />;
}
