import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@/theme";
import { SafeScreen } from "@/components/template";
import ColorsWatchImage from "@/theme/assets/images/search.png";
import { ImageVariant } from "@/components/atoms";
import { useEffect, useState } from "react";
import { fetchMovies } from "@/services/users/fetchUpcoming";
import { Card, Divider, Icon, Searchbar } from "react-native-paper";
import { config } from "process";
import { themovieDb } from "@/theme/_config";
import { fetchCategory } from "@/services/users/fetchCategory";

function Watch({ navigation }) {
  const { layout, fonts, colors } = useTheme();
  const [upcoming, setUpcomming] = useState(themovieDb);
  const [category, setCategory] = useState(themovieDb);
  const [search, setSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
    fetchCat();
  }, []);

  const fetchData = async () => {
    const res = await fetchMovies();
    setUpcomming(res.data.results);
  };

  const fetchCat = async () => {
    const res = await fetchCategory();
    setCategory(res.data.genres);
  };

  const serchScreen = () => {
    setSearch(!search);
  };

  const onPressClear = () => {
    setSearchQuery("");
    fetchData();
    setSearch(false);
  };

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    if (query.length >= 3) {
      const startsWith = (wordToCompare) => (element, index, array) => {
        return element.title.includes(wordToCompare);
      };
      const rst = upcoming.filter(startsWith(query));

      setUpcomming(rst);
    } else {
      fetchData();
    }
  };

  const detailScreen = (item) => {
    navigation.navigate("Detail", { item: item });
  };

  const Item = ({ item }) => {
    return (
      <Card onPress={() => detailScreen(item)} style={styles.item}>
        <Card.Cover
          source={{
            uri: "https://image.tmdb.org/t/p/original" + item.backdrop_path,
          }}
        />
        <Text
          style={[
            {
              position: "absolute",
              bottom: 20,
              color: "white",
              paddingHorizontal: 20,
            },
            fonts.bold,
            fonts.size_20,
          ]}
        >
          {item.title}
        </Text>
      </Card>
    );
  };

  const ItemSearch = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => detailScreen(item)}>
        <View
          style={{
            flexDirection: "row",
            height: 120,
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <ImageVariant
            style={styles.searchItem}
            source={{
              uri: "https://image.tmdb.org/t/p/original" + item.backdrop_path,
            }}
          />
          <View
            style={[
              {
                paddingStart: 20,
              },
              layout.justifyCenter,
            ]}
          >
            <Text style={[fonts.size_16, { marginBottom: 10 }]}>
              {item.title.length > 18
                ? item.title.substring(0, 18).concat("...")
                : item.title}
            </Text>
            <Text style={[fonts.size_10, fonts.gray400]}>{"Crime"}</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Icon source="dots-horizontal" color={"#61C3F2"} size={35} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const RenderCategory = ({ name }) => {
    return (
      <Card style={styles.item}>
        <Card.Cover
          source={{
            uri: "https://image.tmdb.org/t/p/original/rmfIhftLXpHEZzkLSpWQMZhirMJ.jpg",
          }}
        />
        <Text
          style={[
            {
              position: "absolute",
              bottom: 20,
              color: "white",
              paddingHorizontal: 20,
            },
            fonts.bold,
            fonts.size_20,
          ]}
        >
          {name}
        </Text>
      </Card>
    );
  };

  return (
    <SafeScreen>
      <View style={[layout.flex_1]}>
        {search ? (
          <>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 30,
              }}
            >
              <Searchbar
                placeholder="Search"
                style={{
                  width: "100%",
                  backgroundColor: colors.grayPrime,
                  marginBottom: 30,
                }}
                onClearIconPress={onPressClear}
                onChangeText={onChangeSearch}
                value={searchQuery}
              />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: colors.grayPrime,
                width: "100%",
                paddingHorizontal: 10,
                paddingTop: 30,
              }}
            >
              {searchQuery.length <= 3 ? (
                <FlatList
                  showsVerticalScrollIndicator={false}
                  key={"_"}
                  numColumns={2}
                  data={category}
                  renderItem={({ item }) => <RenderCategory name={item.name} />}
                  keyExtractor={(item) => item.id}
                />
              ) : (
                <>
                  <View style={{ paddingHorizontal: 20 }}>
                    <Text
                      style={[
                        {
                          marginBottom: 10,
                        },
                        fonts.gray400,
                        fonts.bold,
                        fonts.size_16,
                      ]}
                    >
                      {"Top Results"}
                    </Text>
                    <Divider style={{ height: 2 }} />
                  </View>

                  <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: 10 }}
                    key={"#"}
                    data={upcoming}
                    renderItem={({ item }) => <ItemSearch item={item} />}
                    keyExtractor={(item) => item.id}
                  />
                </>
              )}
            </View>
          </>
        ) : (
          <>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 30,
                marginBottom: 10,
              }}
            >
              <Text style={[fonts.gray400, fonts.bold, fonts.size_24]}>
                {"Watch"}
              </Text>
              <TouchableOpacity onPress={serchScreen}>
                <ImageVariant source={ColorsWatchImage} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: colors.grayPrime,
                width: "100%",
                paddingHorizontal: 10,
                paddingTop: 30,
              }}
            >
              <FlatList
                showsVerticalScrollIndicator={false}
                key={"#"}
                data={upcoming}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={(item) => item.id}
              />
            </View>
          </>
        )}
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  searchItem: {
    width: "35%",
    marginVertical: 8,
    borderRadius: 15,
    marginStart: 16,
  },
  title: {
    fontSize: 12,
  },
});
export default Watch;
