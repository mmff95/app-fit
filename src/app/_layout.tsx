import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

import { useColorScheme } from '@/hooks/useColorScheme'

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    FontTextRegular: require('../assets/fonts/MaisonNeue-Book.ttf'),
    FontTextMedium: require('../assets/fonts/MaisonNeue-Medium.ttf'),
    FontTextBold: require('../assets/fonts/MaisonNeue-Bold.ttf'),
    FontTitleRegular: require('../assets/fonts/MaisonNeueExtended-Book.ttf'),
    FontTitleMedium: require('../assets/fonts/MaisonNeueExtended-Medium.ttf'),
    FontTitleBold: require('../assets/fonts/MaisonNeueExtended-Bold.ttf')
  })

  const isLogged = false

  if (!loaded) {
    return null
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Protected guard={isLogged}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={!isLogged}>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  )
}
