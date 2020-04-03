import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: 'http://192.168.100.8' })
    .useReactNative()
    .connect();

  tron.clear();
  console.tron = tron;
}
