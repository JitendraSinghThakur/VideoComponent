import React from 'react';
import { View , StyleSheet, Text} from 'react-native';
import Video from 'react-native-video';

const DATA = [
	{
		uri: "https://content.jwplatform.com/manifests/yp34SRmf.m3u8",
		title: "First"
	},
	{
		uri: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
		title: "Second"
  },
  {
		uri: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
		title: "Third"
	},
]

const App: () => MYVideoApp = () => {
  return (
    <>
     <View style={styles.Container}>

          <Text style={{fontSize:20, textAlign:'center', padding:20, color:'blue'}}>Video Straming</Text>

          <Video source={{uri: "https://content.jwplatform.com/manifests/yp34SRmf.m3u8"}}   // Can be a URL or a local file.
              style={styles.backgroundVideo} 
              repeat={true}
              controls={true}
              resizeMode={"cover"}              
              />
        

        
            </View>
    </>
  );
};

const styles = StyleSheet.create({
  Container:{
        flex:1,
        marginTop:10
  },
  backgroundVideo: {
    position: 'absolute',
    top: 70,
    left: 50,
    bottom: 300,
    right: 50,
  },
 
});

export default App;
