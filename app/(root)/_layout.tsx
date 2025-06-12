import { Stack } from "expo-router";
import React from "react";

export default function Layout() {
  
  return (
    
      <Stack>
      <Stack.Screen name="(drawer)" options={{headerShown: false }}/>
      <Stack.Screen name="find-ride" options={{headerShown: false}}/>
      <Stack.Screen name="confirm-ride" options={{headerShown: false}}/>

  </Stack>
);
}

