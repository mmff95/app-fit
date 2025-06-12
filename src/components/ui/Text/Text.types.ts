import { TextProps as RTextProps } from "react-native";

export type TextProps = RTextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};
