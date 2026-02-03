import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function LowStockScreen() {
  const handleUpdateCount = (itemName: string) => {
    Alert.alert("Coming Soon", `Update count for ${itemName} will be available in a future update.`);
  };
  // Placeholder data - uncomment Convex after setup:
  // import { useQuery } from "convex/react";
  // const lowStockItems = useQuery(api.inventory.getLowStock, {});

  const lowStockItems = [
    { _id: "1", name: "Lime Juice", category: "supplies", quantity: 2, minQuantity: 5, unit: "bottles" },
    { _id: "2", name: "Napkins", category: "supplies", quantity: 1, minQuantity: 3, unit: "cases" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>⚠️ Low Stock Alerts</Text>
        <Text style={styles.subtitle}>
          {lowStockItems?.length || 0} items need attention
        </Text>
      </View>

      <FlatList
        data={lowStockItems}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.alertCard}>
            <View style={styles.alertHeader}>
              <Text style={styles.itemName}>{item.name}</Text>
              <View style={styles.urgentBadge}>
                <Text style={styles.urgentText}>Low</Text>
              </View>
            </View>
            <View style={styles.stockInfo}>
              <Text style={styles.currentStock}>
                Current: {item.quantity} {item.unit}
              </Text>
              <Text style={styles.minStock}>
                Min: {item.minQuantity} {item.unit}
              </Text>
            </View>
            <TouchableOpacity style={styles.reorderButton} onPress={() => handleUpdateCount(item.name)}>
              <Text style={styles.reorderText}>Update Count</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>✅</Text>
            <Text style={styles.emptyText}>All items are well stocked!</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f0f1a" },
  header: { padding: 16, borderBottomWidth: 1, borderBottomColor: "#333" },
  headerTitle: { fontSize: 24, fontWeight: "bold", color: "#fff", marginBottom: 4 },
  subtitle: { fontSize: 14, color: "#888" },
  list: { padding: 16 },
  alertCard: {
    backgroundColor: "#1a1a2e",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#e94560",
  },
  alertHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  itemName: { fontSize: 18, fontWeight: "600", color: "#fff" },
  urgentBadge: {
    backgroundColor: "#e94560",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  urgentText: { color: "#fff", fontSize: 12, fontWeight: "600" },
  stockInfo: { flexDirection: "row", justifyContent: "space-between", marginBottom: 12 },
  currentStock: { fontSize: 14, color: "#e94560" },
  minStock: { fontSize: 14, color: "#888" },
  reorderButton: {
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  reorderText: { color: "#fff", fontWeight: "600" },
  emptyState: { flex: 1, justifyContent: "center", alignItems: "center", paddingVertical: 60 },
  emptyIcon: { fontSize: 48, marginBottom: 16 },
  emptyText: { fontSize: 16, color: "#888" },
});
