import { View, Text, Image } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import styles from "./style";
import School from "../../types/school";
import COLORS from "../../constants/colors";
import HomeHeader from "../../components/Home/HomeHeader";

export default function SchoolsScreen() {
  return (
    <View style={styles.container}>
      <HomeHeader title="Centres Simplons" subtitle="Retrouve les"/>
      {/* <MapView
        style={styles.map}
        mapType="mutedStandard"
        showsPointsOfInterest={true}
        showsUserLocation={true}
        followsUserLocation={false}
        initialRegion={{
          latitude: 45.75731045293414,
          longitude: 4.8968310288360595,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {schools.map((school: School) => (
          <Marker
            key={school.id}
            coordinate={{
              latitude: school.latitude,
              longitude: school.longitude,
            }}
            title={school.name}
            description={school.description}
          >
            <View style={styles.marker}>
              <Image
                // source={{uri: 'https://thispersondoesnotexist.com'}}
                source={require("../../../assets/simplon.jpg")}
                style={styles.markerImage}
              />
            </View>
          </Marker>
        ))}
      </MapView> */}
    </View>
  );
}
