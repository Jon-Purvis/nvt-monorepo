import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { useState } from "react";

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>

        <View style={styles.settingRow}>
          <View>
            <Text style={styles.settingLabel}>Push Notifications</Text>
            <Text style={styles.settingDescription}>Get alerts for low stock items</Text>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: "#333", true: "#e94560" }}
            thumbColor="#fff"
          />
        </View>

        <View style={styles.settingRow}>
          <View>
            <Text style={styles.settingLabel}>Dark Mode</Text>
            <Text style={styles.settingDescription}>Use dark theme</Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: "#333", true: "#e94560" }}
            thumbColor="#fff"
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>👤 Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>🏪 Tavern Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>👥 Team Members</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>📄 Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>📋 Terms of Service</Text>
        </TouchableOpacity>
        <View style={styles.versionInfo}>
          <Text style={styles.versionText}>NVT Inventory v1.0.0</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f0f1a" },
  section: { padding: 16, borderBottomWidth: 1, borderBottomColor: "#333" },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#888",
    textTransform: "uppercase",
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  settingLabel: { fontSize: 16, color: "#fff", marginBottom: 4 },
  settingDescription: { fontSize: 13, color: "#888" },
  menuItem: { paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: "#222" },
  menuItemText: { fontSize: 16, color: "#fff" },
  versionInfo: { paddingTop: 16, alignItems: "center" },
  versionText: { fontSize: 13, color: "#666" },
});
