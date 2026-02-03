import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
// Uncomment after Convex is set up:
// import { useQuery } from "convex/react";
// import { api } from "@repo/convex";

export default function InventoryScreen() {
  // Uncomment after Convex is set up:
  // const items = useQuery(api.inventory.list, {});

  const handleAddItem = () => {
    Alert.alert("Coming Soon", "Add Item will be available in a future update.");
  };

  // Placeholder data
  const items = [
    { _id: "1", name: "Bud Light", category: "beer", quantity: 24, unit: "cases" },
    { _id: "2", name: "Chardonnay", category: "wine", quantity: 12, unit: "bottles" },
    { _id: "3", name: "Tito's Vodka", category: "spirits", quantity: 6, unit: "bottles" },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      beer: "#f39c12",
      wine: "#9b59b6",
      spirits: "#3498db",
      food: "#2ecc71",
      supplies: "#95a5a6",
    };
    return colors[category] || "#888";
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Inventory</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
          <Text style={styles.addButtonText}>+ Add Item</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemCard}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemName}>{item.name}</Text>
              <View
                style={[
                  styles.categoryBadge,
                  { backgroundColor: getCategoryColor(item.category) },
                ]}
              >
                <Text style={styles.categoryText}>{item.category}</Text>
              </View>
            </View>
            <Text style={styles.quantity}>
              {item.quantity} {item.unit}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f0f1a" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  headerTitle: { fontSize: 24, fontWeight: "bold", color: "#fff" },
  addButton: {
    backgroundColor: "#e94560",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addButtonText: { color: "#fff", fontWeight: "600" },
  list: { padding: 16 },
  itemCard: {
    backgroundColor: "#1a1a2e",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  itemName: { fontSize: 18, fontWeight: "600", color: "#fff" },
  categoryBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  categoryText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  quantity: { fontSize: 16, color: "#aaa" },
});
