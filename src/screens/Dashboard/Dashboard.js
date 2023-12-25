import { ActivityIndicator, Text, View } from "react-native";
import { useTheme } from "@/theme";
import { Brand } from "@/components/molecules";
import { SafeScreen } from "@/components/template";

function Dashboard({ navigation }) {
  const { layout, gutters, fonts } = useTheme();

  return (
    <SafeScreen>
      <View
        style={[
          layout.flex_1,
          layout.col,
          layout.itemsCenter,
          layout.justifyCenter,
        ]}
      >
        <Brand />
      </View>
    </SafeScreen>
  );
}
export default Dashboard;
