import { useAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const profile = () => {
  const {signOut} = useAuth()
  
  const handleSignOut = () => {
    signOut();
    router.replace("/(auth)/login");
  };
  return (
  
        <SafeAreaView>
      <Text>profile</Text>
      <Text onPress={handleSignOut} className="text-red-500 mt-4 text-center">
      Log out
    </Text>
    </SafeAreaView>
  )
}

export default profile