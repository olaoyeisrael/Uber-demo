import { icons } from '@/constants/image';
import { calculateRegion } from '@/lib/map';
import { useLocationStore } from '@/store';
import React, { useEffect, useRef } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
// import MapViewDirections from "react-native-maps-directions";
import { MapViewRoute } from 'react-native-maps-routes';

const directionsAPI = process.env.EXPO_PUBLIC_DIRECTIONS_API_KEY;
const Map = () => {
  const {
    userLongitude,
    userLatitude,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore();
  const mapRef = useRef<MapView | null>(null);


  

  const region = calculateRegion({
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  });
  
  useEffect(() => {
  console.log("User location:", userLatitude, userLongitude);
  console.log("Destination location:", destinationLatitude, destinationLongitude);
}, [userLatitude, userLongitude, destinationLatitude, destinationLongitude]);

    return(
  <MapView 
    ref={mapRef}
    style={{width:'100%',height: '100%', }} 
    provider={PROVIDER_GOOGLE} 
    initialRegion={region}
    showsMyLocationButton = {true}
  
    showsUserLocation = {true}
    showsPointsOfInterest={false}>

      {destinationLatitude && destinationLongitude && (
        <>
         <Marker
            key="destination"
            coordinate={{
              latitude: destinationLatitude,
              longitude: destinationLongitude,
            }}
            title="Destination"
            image={icons.pin}
          />
    
       {/* <MapViewDirections
            origin={{
              latitude: userLatitude!,
              longitude: userLongitude!,
            }}
            
            destination={{
              latitude: destinationLatitude,
              longitude: destinationLongitude,
            }}
            apikey={directionsAPI!}
            strokeColor="hotpink"
            mode="DRIVING"
            strokeWidth={3}
             onReady={(result) => {
              console.log(`Distance: ${result.distance} km`);
              console.log(`Duration: ${result.duration} min`);

              mapRef.current?.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: Dimensions.get('window').width / 10,
                  bottom: 120,
                  left: Dimensions.get('window').width / 10,
                  top: 100,
                },
                animated: true,
              });
            }}
          

            resetOnChange={false}
            onError={(errorMessage: any) => {
              console.log('GOT AN ERROR: ', errorMessage);
            }}
          /> */}
          <MapViewRoute
          origin={{
            latitude: userLatitude!,
            longitude: userLongitude!,
          }}
          destination={{
            latitude: destinationLatitude,
            longitude: destinationLongitude,
          }}
          apiKey={directionsAPI}
          strokeColor="hotpink"
          strokeWidth={3}
          />
          


{/* <Polyline
  coordinates={[
    { latitude: userLatitude!, longitude: userLongitude! },
    { latitude: destinationLatitude!, longitude: destinationLongitude! }
  ]}
  strokeColor="#FF00FF"
  strokeWidth={3}
/> */}
          </>
           )}
      </MapView>)
}

export default Map


