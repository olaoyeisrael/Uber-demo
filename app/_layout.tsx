import { tokenCache } from "@/lib/auth";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";
import { LogBox } from "react-native";
import './globals.css';


// export default function RootLayout() {
//   return <Stack />;
// }

export default function RootLayout() {
   const [loaded] = useFonts({
    "Nunito" : require('./../assets/fonts/Nunito-Medium.ttf'),
    "Roman" : require('./../assets/fonts/Romanesco-Regular.ttf'),
    "Inter": require('./../assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
    "Nunito-Semi": require('./../assets/fonts/Nunito-SemiBold.ttf')
  })
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env",
  );
}

LogBox.ignoreLogs(["Clerk:"]);
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
      <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
      <Stack>
    
      <Stack.Screen name="index" options={{headerShown: false }}/>
      <Stack.Screen name="(auth)" options={{headerShown: false }}/>
      <Stack.Screen name="(root)" options={{headerShown: false }}/>
  </Stack>
    </ClerkLoaded>
    </ClerkProvider>);
}

