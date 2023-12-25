import { ImageBackground, Text, View } from "react-native";
import { useTheme } from "@/theme";
import { fetchMovieDetails } from "@/services/users/fetchDetails";
import { useState, useEffect } from "react";
import { Button, Chip, Divider } from "react-native-paper";
import moment from "moment";

function Detail({ navigation, route }) {
  const { layout, gutters, fonts } = useTheme();

  const [details, setDetails] = useState();

  const { item } = route.params;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetchMovieDetails(item.id);
    setDetails(res.data);
  };

  const navigateToBooking = () => {
    navigation.navigate("Booking", { detail: details });
  };

  const navigateToVideo = () => {
    navigation.navigate("Video");
  };

  const image_path =
    "https://image.tmdb.org/t/p/original" + details?.poster_path;

  return (
    <View style={[layout.flex_1]}>
      <View style={{ height: "50%" }}>
        <ImageBackground
          style={{ height: "100%", width: "100%" }}
          source={{
            uri: image_path,
          }}
          resizeMode="center"
        >
          <View
            style={[
              layout.flex_1,
              layout.itemsCenter,
              { justifyContent: "flex-end", marginBottom: 30 },
            ]}
          >
            <Text
              style={[
                {
                  color: "white",
                  paddingHorizontal: 20,
                  marginBottom: 20,
                },
                fonts.bold,
                fonts.size_20,
              ]}
            >
              {"In theaters " +
                moment(details?.release_date).format("MMM Do, YYYY")}
            </Text>
            <Button
              mode="contained"
              buttonColor={"#61C3F2"}
              style={{ borderRadius: 5, width: 250, marginBottom: 10 }}
              onPress={navigateToBooking}
            >
              {"Get Tickets"}
            </Button>
            <Button
              icon={"play"}
              mode="outlined"
              textColor={"#fff"}
              style={{ borderRadius: 5, width: 250, borderColor: "#61C3F2" }}
              onPress={navigateToVideo}
            >
              {"Watch Trailer"}
            </Button>
          </View>
        </ImageBackground>
      </View>

      <View style={{ padding: 30 }}>
        <Text
          style={[
            {
              marginBottom: 20,
            },
            fonts.bold,
            fonts.size_20,
          ]}
        >
          {"Genres"}
        </Text>

        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          {details?.genres.map((item, index) => {
            return (
              <Chip
                key={item.id}
                style={{
                  marginEnd: 10,
                  borderRadius: 50,
                  backgroundColor: "#61C3F2",
                }}
              >
                {item.name}
              </Chip>
            );
          })}
        </View>

        <Divider />

        <Text
          style={[
            {
              marginTop: 20,
            },
            fonts.bold,
            fonts.size_20,
          ]}
        >
          {"Overview"}
        </Text>

        <Text
          style={[
            {
              marginTop: 20,
            },
            fonts.size_16,
            fonts.gray500,
          ]}
        >
          {details?.overview}
        </Text>
      </View>
    </View>
  );
}
export default Detail;
