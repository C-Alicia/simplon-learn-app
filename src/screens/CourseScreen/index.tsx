import { View, Text, Image, StyleSheet, Button } from "react-native";
import React, { useRef, useState } from "react";
import COLORS from "../../constants/colors";
import { Video, ResizeMode } from 'expo-av';

export default function CourseScreen({ route }: any) {
  const course = route?.params?.course;

  const videoRef = useRef<any>(null);
  const [status, setStatus] = useState<any>({});


  return (
    <View>
      <Text>{course?.title}</Text>
      {course?.image && (
        <Image
          style={styles.image}
          source={
            { uri: course?.image }

            // require("../../../assets/images/onizuka.png")
          }
        />
      )}

{course?.video && (
       <>
        <Video
        ref={videoRef}
        style={styles.video}
        source={{
          uri: course?.video,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? videoRef.current.pauseAsync() : videoRef.current.playAsync()
          }
        />
      </View>
       </>
      ) }
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    userInitial: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderColor: COLORS.light,
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: '90%',
      height: 150,
      borderRadius: 10,
      borderColor: COLORS.light,
      borderWidth: 0.5,
    },
    initialText: {
      fontSize: 60,
      fontFamily: "NunitoSans_700Bold",
      color: COLORS.light,
    },
    button: {
      margin: 20,
      backgroundColor: COLORS.light,
      padding: 6,
    },
    buttonText: {
      fontSize: 12,
      textTransform: "uppercase",
      fontFamily: "NunitoSans_700Bold",
      color: COLORS.primary,
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
     
  });