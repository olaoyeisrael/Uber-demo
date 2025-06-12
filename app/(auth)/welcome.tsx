import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const welcome = () => {
  const handleSignup = () =>{
    router.push('/(auth)/signup')
  }
   const handleLogin = () =>{
    router.push('/(auth)/login')
  }
  return (
    <SafeAreaView>
      <Text>Welcome Page</Text>
      <TouchableOpacity className='bg-blue-200' onPress={handleLogin}>
        <Text>Go to Login</Text>
      </TouchableOpacity>
      <TouchableOpacity className='mt-[5px]' onPress={handleSignup}>
        <Text>Go to Signup</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default welcome