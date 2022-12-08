import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text} >RANA SAHAB OOO HOSH WHICH AAAOOO SARKAAAR hun fair kay program aey!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
color: 'red',
fontSize: 20,
textAlign : 'center',

  },
});
