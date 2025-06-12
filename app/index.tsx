import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

const Page = () => {
  const { isSignedIn } = useAuth();
  const { getToken } = useAuth();
  console.log(getToken)

  if (isSignedIn) return <Redirect href="/(root)/(drawer)/(tabs)/home" />;



  return <Redirect href="/(auth)/welcome" />;
};

export default Page;