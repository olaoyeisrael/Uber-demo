// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View className="flex-1 justify-center items-center">
//       <Text className="text-5xl text-blue-500 font-bold">Welcome</Text>
//     </View>
//   );
// }
// import { Button } from '@react-navigation/elements';
import Map from '@/components/map';
import { icons } from '@/constants/image';
import { useLocationStore } from '@/store';
import * as Location from 'expo-location';
import 'react-native-get-random-values';

import GoogleTextInput from '@/components/GoogleTextInput';
import { useUser } from '@clerk/clerk-expo';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const drivers= [
    {
        "ride_id": 1,
        "origin_address": "Kathmandu, Nepal",
        "destination_address": "Pokhara, Nepal",
        "origin_latitude": 27.717245,
        "origin_longitude": 85.323961,
        "destination_latitude": 28.209583,
        "destination_longitude": 83.985567,
        "ride_time": 391,
        "fare_price": 19500.00,
        "payment_status": "paid",
        "driver_id": 2,
        "user_id": "1",
        "created_at": "2024-08-12 05:19:20.620007",
        "driver": {
            "driver_id": "2",
            "first_name": "David",
            "last_name": "Brown",
            "profile_image_url": "https://ucarecdn.com/6ea6d83d-ef1a-483f-9106-837a3a5b3f67/-/preview/1000x666/",
            "car_image_url": "https://ucarecdn.com/a3872f80-c094-409c-82f8-c9ff38429327/-/preview/930x932/",
            "car_seats": 5,
            "rating": "4.60"
        }
    },
    
  ]



export default function App() {
   const { user } = useUser();
   
  const {setUserLocation, setDestinationLocation} = useLocationStore();

  const [hasPermission, setHasPermission] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setHasPermission(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync();
      console.log(location)

      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords?.latitude!,
        longitude: location.coords?.longitude!,
      });
       console.log(user!.id)

      setUserLocation({
        latitude: location.coords?.latitude,
        longitude: location.coords?.longitude,
        address: `${address[0].name}, ${address[0].region}`,
      });
    })();
  }, []);


  const handleDestinationPress = (location: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {

    console.log("Selected Destination:", location);
    setDestinationLocation(location);
    router.push("/find-ride")
  };
  
  return (
    <SafeAreaView className='mx-[16px]'>
      
    
       <GoogleTextInput
        icon={icons.search}
        textInputBackgroundColor='#d4d4d4'
        handlePress={handleDestinationPress}
       />
     
      <>
      <Text className='text-xl mt-5 mb-3 font-Nunito'>Your Current Location</Text>
      <View className='flex flex-row items-center bg-transparent h-[300px]'>
        <Map />
        </View>
      </>
       <Text className='text-xl mt-5 mb-3 font-Nunito'>Recent Rides</Text>
       <Text className="text-sm font-Inter">No recent rides found</Text>

     

  
    </SafeAreaView>
  );
}


