/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type { PropsWithChildren, ReactNode } from 'react';
import { Component, React } from 'react';
import {
  Dimensions, PermissionsAndroid, SafeAreaView, StatusBar, StyleSheet,
  Text, useColorScheme,
  View
} from 'react-native';
import { WebView } from 'react-native-webview';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  requestCameraPermission()

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        {/* <WebView
          source={{ html: '<iframe width="100%" height="50%" src="https://www.youtube.com/embed/cqyziA30whE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' }}
          style={{ marginTop: 20 }}
        /> */}
        <WebViewComponent />
      </View>
      <Text>Hello World</Text>
    </SafeAreaView>
  );
}


class WebViewComponent extends Component {
  render(): ReactNode {
    return <WebView allowsInlineMediaPlayback mediaPlaybackRequiresUserAction={false} source={{ uri: 'https://alenpaulvarghese-anm1vv.premagic.com/insight-dinj/register/' }} />;
  }
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    width: "100%",
    height: Dimensions.get('window').height,
    //height: "100%",
    backgroundColor: "yellow"
  }
});

export default App;