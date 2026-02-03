import { Tabs } from "expo-router";
import { Text, View } from "react-native";

function TabIcon({ name }: { name: string }) {
  const icons: Record<string, string> = {
    inventory: "📦",
    "low-stock": "⚠️",
    settings: "⚙️",
  };
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24 }}>{icons[name] || "📋"}</Text>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#e94560",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: { backgroundColor: "#1a1a2e", borderTopColor: "#333" },
        headerStyle: { backgroundColor: "#1a1a2e" },
        headerTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inventory",
          tabBarIcon: () => <TabIcon name="inventory" />,
        }}
      />
      <Tabs.Screen
        name="low-stock"
        options={{
          title: "Low Stock",
          tabBarIcon: () => <TabIcon name="low-stock" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: () => <TabIcon name="settings" />,
        }}
      />
    </Tabs>
  );
}
