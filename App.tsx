import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
} from 'react-native';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello World!
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'white',
  },
  darkText: {
    color: 'black',
  },
});
export default App;
