import { type ViewProps as RViewProps } from 'react-native';

export type ViewProps = RViewProps & {
  lightColor?: string;
  darkColor?: string;
};
