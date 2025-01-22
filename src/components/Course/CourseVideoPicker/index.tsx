import { useRef, useState } from "react";
import {
  Button,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import COLORS from "../../../constants/colors";
import { Video, ResizeMode } from 'expo-av';


export default function CourseVideoPicker({ video, setVideo, setVideoMimeType }: any) {
    const videoRef = useRef<any>(null);
    const [status, setStatus] = useState<any>({});

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setVideo(result.assets[0].uri);
      // set type pour les metadata
      setVideoMimeType(result.assets[0].mimeType);
    }
  };

 

  return (
    <View style={styles.container}>
      {video && (
       <>
        <Video
        ref={videoRef}
        style={styles.video}
        source={{
          uri: video,
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

      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>{"Sélectionner une video"}</Text>
      </TouchableOpacity>

      
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
});
