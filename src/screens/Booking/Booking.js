import { Text, View, FlatList } from "react-native";
import { useTheme } from "@/theme";
import { useState } from "react";
import { Button } from "react-native-paper";
import { bookingData } from "@/theme/_config";
import { Header, SafeScreen } from "@/components/template";
import { ImageVariant } from "@/components/atoms";
import HallImage from "@/theme/assets/images/hall.png";

function Booking({ navigation, route }) {
  const { detail } = route.params;

  const { layout, fonts, colors } = useTheme();

  const [details, setDetails] = useState(bookingData);

  const navigateToCheckout = () => {
    navigation.navigate("Checkout", { detail: detail });
  };

  const renderHallView = (item) => {
    return (
      <View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Text
            style={[
              {
                marginTop: 20,
              },
              fonts.size_16,
              fonts.gray500,
            ]}
          >
            {item.timming}
          </Text>
          <Text
            style={[
              {
                marginTop: 20,
                marginStart: 10,
              },
              fonts.size_16,
              fonts.gray200,
            ]}
          >
            {item.hall_name}
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 35,
            paddingVertical: 20,
            borderWidth: 1,
            marginEnd: 15,
            borderRadius: 15,
            borderColor: item.id === 572802 ? "#61C3F2" : colors.gray200,
          }}
        >
          <ImageVariant source={HallImage} />
        </View>
        <Text
          style={[
            {
              marginTop: 20,
            },
            fonts.size_16,
            fonts.gray500,
          ]}
        >
          {item.price}
        </Text>
      </View>
    );
  };

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const renderDate = (item) => {
    return (
      <Button
        mode="contained"
        buttonColor={"#61C3F2"}
        textColor={item.id == 1 ? "#000" : "#fff"}
        style={{ borderRadius: 12, marginEnd: 10 }}
        onPress={() => console.log("Pressed")}
      >
        {item.name}
      </Button>
    );
  };

  return (
    <SafeScreen>
      <Header title={detail.title} date={detail.release_date} goBack={goBack} />
      <View
        style={[
          layout.flex_1,
          {
            paddingTop: 50,
            paddingStart: 30,
            justifyContent: "space-between",
            backgroundColor: colors.grayPrime,
          },
        ]}
      >
        <View>
          <Text
            style={[
              {
                marginBottom: 20,
              },
              fonts.bold,
              fonts.size_20,
            ]}
          >
            {"Date"}
          </Text>

          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={details.dates}
              renderItem={(item) => renderDate(item.item)}
            />
          </View>

          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={details.halls}
              renderItem={(item) => renderHallView(item.item)}
            />
          </View>
        </View>
        <View
          style={[layout.justifyCenter, layout.itemsCenter, { paddingEnd: 30 }]}
        >
          <Button
            mode="contained"
            buttonColor={"#61C3F2"}
            style={{
              borderRadius: 10,
              width: "100%",
              padding: 5,
              marginBottom: 10,
            }}
            onPress={navigateToCheckout}
          >
            {"Select Seats"}
          </Button>
        </View>
      </View>
    </SafeScreen>
  );
}
export default Booking;
