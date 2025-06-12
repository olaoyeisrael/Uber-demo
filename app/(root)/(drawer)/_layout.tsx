// import { Drawer } from 'expo-router/drawer';
// import React from 'react';
import CustomDrawerContent from "@/components/CustomComponentDrawer";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';



export default function Layout() {
  return (
    
    <GestureHandlerRootView >
       <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{headerShown: false}}>
      <Drawer.Screen name="favorites" options={{headerShown: true}} />
      <Drawer.Screen name="settings" options={{headerShown: true}} />
    </Drawer>
    </GestureHandlerRootView>
  );
}

