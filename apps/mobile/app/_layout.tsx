import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

const convexUrl = process.env.EXPO_PUBLIC_CONVEX_URL;
if (!convexUrl) {
  throw new Error(
    "Missing EXPO_PUBLIC_CONVEX_URL environment variable. " +
    "Run `npx convex dev` in packages/convex and add the URL to your .env file."
  );
}
const convex = new ConvexReactClient(convexUrl);

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: "#1a1a2e" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="light" />
      </SafeAreaProvider>
    </ConvexProvider>
  );
}
