import CustomButton from '@/components/ComponentButton'
import GoogleTextInput from '@/components/GoogleTextInput'
import RideLayout from '@/components/RideLayout'
import { icons } from "@/constants/image"
import { useLocationStore } from '@/store'
import { router } from "expo-router"
import React from 'react'
import { Text, View } from 'react-native'


const findride = () => {
    const {userAddress, destinationAddress, setDestinationLocation, setUserLocation} = useLocationStore()
  return (
    <RideLayout title='Ride' snapPoints={["85%"]}>
        <View className="my-3">
        <Text className="text-lg font-Nunito mb-3">From</Text>
      
        <GoogleTextInput
          icon={icons.mapIcon}
          initialLocation={userAddress!}
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="#f5f5f5"
          handlePress={(location) => setUserLocation(location)}
        />
      </View>
      

      <View className="my-3">
        <Text className="text-lg font-Nunito mb-3">To</Text>

        <GoogleTextInput
         icon={icons.locationform}
          initialLocation={destinationAddress!}
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="transparent"
          handlePress={(location) => setDestinationLocation(location)}
        />
      </View>

      {/* <Text className='text-2xl'>You are here: {userAddress}</Text>
      <Text className='text-2xl'>Your destionation: {destinationAddress}</Text> */}
      <CustomButton
        title="Confirm Location"
        onPress={() => router.push('/confirm-ride')}
        className="mt-5"
      />
      
      
    </RideLayout>
  )
}

export default findride