import { StyleSheet } from 'react-native'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Text } from '@/components/ui/Text'
import { View } from '@/components/ui/View'
import i18n from '@/lib/i18n'
import { useState } from 'react'

export default function LoginScreen() {
  const [name, setName] = useState('')
  return (
    <View style={{ padding: 20 }}>
      <View style={styles.titleContainer}>
        <Text type="title">{i18n.t('welcome')}</Text>
        <Text>{i18n.t('login')}</Text>
      </View>
      <Input label="E-mail" value={name} onChangeText={setName} />
      <Input label="Senha" value={name} onChangeText={setName} />
      <Button onPress={() => console.log('teste')}>teste</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    marginVertical: 100,
    gap: 8
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute'
  }
})
