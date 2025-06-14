import BottomSheet, {
  BottomSheetView
} from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import React, { useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Map from '@/components/map';
import { icons } from "@/constants/image";
import { Image, Text, TouchableOpacity, View } from "react-native";



const RideLayout = ({title, snapPoints, children}: {title: string,snapPoints?: string[], children: React.ReactNode}) => {
      const bottomSheetRef = useRef<BottomSheet>(null);
      
      
  return (

    <GestureHandlerRootView>
        <View className="flex-1 bg-white">
        <View className="flex flex-col h-screen bg-blue-500">
          <View className="flex flex-row absolute z-10 top-16 items-center justify-start px-5">
            <TouchableOpacity onPress={() => router.back()}>
              <View className="w-10 h-10 bg-white rounded-full items-center justify-center">
                <Image
                  source={icons.backArrow}
                  resizeMode="contain"
                  className="w-6 h-6"
                />
              </View>
            </TouchableOpacity>
            <Text className="text-xl font-Inter ml-5">
              {title || "Go Back"}
            </Text>
          </View>

          <Map />
        </View>
         <BottomSheet
         keyboardBehavior="extend"
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          index={0}
        >
          {title === "Choose a Rider" ? (
            <BottomSheetView
              style={{
                flex: 1,
                padding: 20,
              }}
            >
              {children}
            </BottomSheetView>
          ) : (
            <BottomSheetView
              style={{
                flex: 1,
                padding: 20,
              }}
            >
              {children}
            </BottomSheetView>
          )}
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  )
}

export default RideLayout