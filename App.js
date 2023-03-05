import { Form } from './src/components/Form';
import { StatusBar } from 'expo-status-bar';
import { styles } from './src/styles/styles';
import HomeStack from './src/components/HomeStack';
import { View } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fafafa" />
      <HomeStack />
    </View>
  );
}
