import { icons } from "@/constants/image";
import { hp, wp } from "@/utils/dimensions";
import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
// import { HapticTab } from "@/components/HapticTab";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { HapticTab } from "../../../../components/HapticTab";

const TabIcon = ({ focused, icon, title }: any)=> {
    
    if (focused) {
      return (
        <View className="bg-green-500 flex flex-row w-full flex-1 justify-center mt-[40px] items-center rounded-xl overflow-hidden" style={{minWidth: wp(26), minHeight: hp(4)}}>
          <Image source={icon} tintColor="#151312" className="h-[24px] w-[24px]" />
          <Text className="text-black text-xs font-medium  ml-2 font-Inter" >
            {title}
          </Text>
        </View>
   
      );
    }
  
    return (
      <View className="size-full justify-center items-center w-[34px] h-[34px]" style={{marginTop:hp(4)}}>
        <Image source={icon} tintColor="#A8B5DB" className="h-[24px] w-[24px]"  />
      </View>
    );
  }
  
  export default function _layout() {
    return (
     
      <Tabs
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarButton: HapticTab,
          tabBarItemStyle: {
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          },
          headerLeft: ()=> <DrawerToggleButton  />,
          tabBarStyle: {
            backgroundColor: "#FFFFFF",
            borderRadius: 0,
            // marginHorizontal: 38,
            // marginBottom: 8,
            height: hp(9.5),
            position: "absolute",
            overflow: "hidden",
            borderWidth: 0,
            // borderColor: "#FFFFFF",
            
          },
          
        })}
      >
       
       <Tabs.Screen
          name="home"
          options={{
            title: "home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.houseFill} title="Home" />
            ),
          }}
        />

        <Tabs.Screen
          name="history"
          options={{
            title: "history",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.history} title="History" />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.user} title="Profile" />
            ),
          }}
        />
        
      </Tabs>
    );
  }