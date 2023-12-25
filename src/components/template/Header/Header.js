import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@/theme";
import { Icon } from "react-native-paper";
import moment from "moment";

function Header({ title, date, goBack, place }) {
  const { fonts } = useTheme();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Icon source="chevron-left" color={"#000"} size={40} />
      </TouchableOpacity>
      <View style={styles.title}>
        <Text style={[fonts.size_16, { marginBottom: 10, marginStart: -40 }]}>
          {title}
        </Text>
        {date ? (
          <Text style={[fonts.size_10, { color: "#61C3F2", marginStart: -40 }]}>
            {"In theaters " + moment(date).format("MMM Do, YYYY")}
          </Text>
        ) : (
          <Text style={[fonts.size_10, { color: "#61C3F2", marginStart: -40 }]}>
            {place}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  title: {
    flex: 1,
    alignItems: "center",
  },
});
export default Header;
