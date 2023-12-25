import React from "react";
import { StyleSheet, View } from "react-native";
import Video from "react-native-video";
import video from "@/theme/assets/videos/test-video.mp4";
import { Button } from "react-native-paper";

function VideoScreen({ navigation }) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);

  const togglePlaying = () => {};

  return (
    <View style={styles.backgroundVideo}>
      <Video
        source={video}
        paused={false}
        controls={true}
        style={styles.backgroundVideo}
        muted={isMuted}
      />
      {/* <View style={{ flexDirection: "row" }}>
        <Button
          onPress={() => setIsPlaying((p) => !p)}
          title={isPlaying ? "Stop" : "Play"}
        />
        <Button
          onPress={() => setIsMuted((m) => !m)}
          title={isMuted ? "Unmute" : "Mute"}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
  },
});

export default VideoScreen;
