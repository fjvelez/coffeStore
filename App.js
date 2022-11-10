import MainStack from './src/navigation/MainStack';
import { LogBox } from 'react-native';

function App() {
  LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);
  return (
      <MainStack />
  );
}

export default App;

