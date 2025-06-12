import RideLayout from '@/components/RideLayout'
import React from 'react'
import { Text } from 'react-native'

const confirmRide = () => {
    
  return (
  <RideLayout title={"Choose a Driver"} snapPoints={["85%"]}>
    <Text>Select A Driver</Text>
    </RideLayout>
    
  )
}

export default confirmRide