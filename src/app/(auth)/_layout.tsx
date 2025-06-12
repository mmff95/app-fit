import { Stack } from 'expo-router'
export { ErrorBoundary } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen name="login" options={{ headerShown: false }} />
    </Stack>
  )
}

export default AuthLayout
