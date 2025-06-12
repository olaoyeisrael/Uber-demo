// import { Drawer } from 'expo-router/drawer';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from "expo-router";

export default function Layout() {
  return (
     <Stack>
    
      <Stack.Screen name="welcome" options={{headerShown: false }}/>
      <Stack.Screen name="login" options={{headerShown: false }}/>
      <Stack.Screen name="signup" options={{headerShown: false }}/>
  </Stack>
  );
}
