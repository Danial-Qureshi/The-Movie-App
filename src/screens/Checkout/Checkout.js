import { Text, View } from "react-native";
import { useTheme } from "@/theme";
import { Button } from "react-native-paper";
import { Header, SafeScreen } from "@/components/template";
import { ImageVariant } from "@/components/atoms";
import HallImage from "@/theme/assets/images/hall_full.png";
import Selected from "@/theme/assets/images/selected.png";
import NotAvailable from "@/theme/assets/images/not.png";
import VIP from "@/theme/assets/images/vip.png";
import Regular from "@/theme/assets/images/regular.png";
import Surf from "@/theme/assets/images/surf.png";

function Checkout({ navigation, route }) {
  const { detail } = route.params;
  const { layout, gutters, fonts, colors } = useTheme();

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <SafeScreen>
      <Header
        title={detail.title}
        place={"March 5, 2021 I 12:30 hall 1"}
        goBack={goBack}
      />
      <View
        style={[
          layout.flex_1,
          {
            paddingTop: 50,
            justifyContent: "space-between",
            backgroundColor: colors.grayPrime,
          },
        ]}
      >
        <View
          style={[
            layout.justifyCenter,
            layout.itemsCenter,
            { marginBottom: 150 },
          ]}
        >
          <ImageVariant
            source={HallImage}
            minScale={0.5}
            maxScale={3}
            resizeMode="cover"
          />
        </View>
        <View
          style={[layout.flex_1, { backgroundColor: "#EFEFEF", padding: 30 }]}
        >
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <ImageVariant source={Selected} />
              <Text style={[{ marginStart: 10 }, fonts.size_10, fonts.gray400]}>
                {"Selected"}
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginStart: 60 }}>
              <ImageVariant source={NotAvailable} />
              <Text style={[{ marginStart: 10 }, fonts.size_10, fonts.gray400]}>
                {"Not Available"}
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginBottom: 40 }}>
            <View style={{ flexDirection: "row" }}>
              <ImageVariant source={VIP} />
              <Text style={[{ marginStart: 10 }, fonts.size_10, fonts.gray400]}>
                {"Vip (150$)"}
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginStart: 49 }}>
              <ImageVariant source={Regular} />
              <Text style={[{ marginStart: 10 }, fonts.size_10, fonts.gray400]}>
                {"Regular (50$)"}
              </Text>
            </View>
          </View>

          <View style={{ marginBottom: 40 }}>
            <ImageVariant source={Surf} />
          </View>

          <View style={{ flexDirection: "row", marginBottom: 30 }}>
            <View
              style={{
                borderRadius: 10,
                padding: 10,
                marginBottom: 10,
                backgroundColor: colors.gray100,
                marginEnd: 20,
                paddingEnd: 30,
              }}
            >
              <Text style={{ fontSize: 11 }}>{"Total Price"}</Text>
              <Text style={[fonts.bold, fonts.size_16]}>{"$ 50"}</Text>
            </View>
            <Button
              mode="contained"
              buttonColor={"#61C3F2"}
              style={{
                borderRadius: 10,
                width: "65%",
                padding: 5,
                marginBottom: 10,
              }}
            >
              {"Proceed to pay"}
            </Button>
          </View>
        </View>
      </View>
    </SafeScreen>
  );
}
export default Checkout;
