import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from "expo-linear-gradient";

import { images, icons, COLORS, FONTS, SIZES } from "../constants";

const OptionItem = ({ bgColor, icon, label, onPress }) => {
  return (
    <TouchableOpacity
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      onPress={onPress}
    >
      <View style={[styles.shadow, { width: 60, height: 60 }]}>
        <LinearGradient
          style={[
            {
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              backgroundColor: "red",
            },
          ]}
          colors={bgColor}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Image
            source={icon}
            resizeMode="cover"
            style={{
              tintColor: COLORS.white,
              width: 30,
              height: 30,
            }}
          />
        </LinearGradient>
      </View>
      <Text
        style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const Home = ({ navigation }) => {
  // Dummy Data
  const [destinations, setDestinations] = React.useState([
    {
      id: 0,
      name: "Kathmundu",
      img: images.skiVilla,
    },
    {
      id: 1,
      name: "Sylhet",
      img: "http://www.visitsylhet.com/images/thumbs/places/view/t3.jpg",
    },
    {
      id: 2,
      name: "Dhaka",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/67/91/99/caption.jpg?w=300&h=300&s=1",
    },
    {
      id: 3,
      name: "Cox's Bazar",
      img: "https://tourrom.com/wp-content/uploads/2019/01/coxbazaar-1024x573.gif",
    },
    {
      id: 4,
      name: "Nepal",
      img: "https://www.planetware.com/photos-large/NEP/nepal-everest-base-camp-trek.jpg",
    },
    {
      id: 5,
      name: "Kashmir",
      img: "https://media.easemytrip.com/media/Blog/India/637188548584468080/637188548584468080hquDq3.jpg",
    },
    {
      id: 6,
      name: "Delhi",
      img: "https://www.planetware.com/photos-large/IND/india-delhi-red-fort.jpg",
    },
    {
      id: 7,
      name: "Sundarban",
      img: "https://www.sundarbantours.com/wp-content/uploads/2013/03/Hiron-Point-Sundarban.jpg",
    },
    {
      id: 8,
      name: "Rangamati",
      img: "https://blog.amarroom.com/wp-content/uploads/2019/04/rangamati-tour.jpg",
    },
    {
      id: 9,
      name: "switzerland",
      img: "http://www.planetware.com/photos-large/CH/switzerland-matterhorn.jpg",
    },
    {
      id: 10,
      name: "Shrimangal",
      img: "https://avijatrik.org/wp-content/uploads/2020/09/tea-870x555.jpg",
    },
  ]);

  function renderDestinations(item, index) {
    var destinationStyle = {};

    if (index == 0) {
      destinationStyle = { marginLeft: SIZES.padding };
    }

    return (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          marginHorizontal: SIZES.base,
          ...destinationStyle,
        }}
        onPress={() => {
          navigation.navigate("Destination");
        }}
      >
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            width: SIZES.width * 0.28,
            height: "82%",
            borderRadius: 15,
          }}
        />

        <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h4 }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      {/* Banner */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.base,
          marginBottom: SIZES.base,

          paddingHorizontal: SIZES.padding,
        }}
      >
        <Image
          source={images.homeBanner}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 15,
          }}
        />
      </View>

      {/* Options */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          marginTop: SIZES.base,
          marginBottom: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.base,
          }}
        >
          <OptionItem
            icon={icons.airplane}
            bgColor={["#46aeff", "#5884ff"]}
            label="Flight"
            onPress={() => {
              console.log("Flight");
            }}
          />
          <OptionItem
            icon={icons.train}
            bgColor={["#fddf90", "#fcda13"]}
            label="Train"
            onPress={() => {
              console.log("Train");
            }}
          />
          <OptionItem
            icon={icons.bus}
            bgColor={["#e973ad", "#da5df2"]}
            label="Bus"
            onPress={() => {
              console.log("Bus");
            }}
          />
          <OptionItem
            icon={icons.taxi}
            bgColor={["#fcaba8", "#fe6bba"]}
            label="Taxi"
            onPress={() => {
              console.log("Taxi");
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            paddingHorizontal: SIZES.base,
          }}
        >
          <OptionItem
            icon={icons.bed}
            bgColor={["#ffc465", "#ff9c5f"]}
            label="Hotel"
            onPress={() => {
              console.log("Hotel");
            }}
          />
          <OptionItem
            icon={icons.eat}
            bgColor={["#7cf1fb", "#4ebefd"]}
            label="Eats"
            onPress={() => {
              console.log("Eats");
            }}
          />
          <OptionItem
            icon={icons.compass}
            bgColor={["#7be993", "#46caaf"]}
            label="Adventure"
            onPress={() => {
              console.log("Adventure");
            }}
          />
          <OptionItem
            icon={icons.event}
            bgColor={["#fca397", "#fc7b6c"]}
            label="Event"
            onPress={() => {
              console.log("Event");
            }}
          />
        </View>
      </View>

      {/* Destination */}
      <View style={{ flex: 1 }}>
        <Text
          style={{
            marginTop: SIZES.base,
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}
        >
          Destination
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={destinations}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => renderDestinations(item, index)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
export default Home;
