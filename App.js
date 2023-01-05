import React from 'react';
import { Platform, ScrollView, Text } from 'react-native';
import { ArrowMTest } from './ArrowMethodTest';
import XcyStyles from './PlatformTest';
const Component = Platform.select({
  ios: () => {
    console.log("this is iooooooooooooooooos!");

  },
  android: () => {
    console.log("this is aaaaaaaaaaaaaaaaaandroid!");
  },
})();

const MyButton = (props) => {
  return (
    <Text style={props}> my button</Text>
  );
}

const App = () => {
  return (
    <ScrollView>
      <Text
        style={XcyStyles.container}
        onPress={() => {
          console.log(Platform.OS);
        }}>
      asdfasdf
    </Text>
     
      <MyButton style={{fontSize:30}} color="blue" shadowSize={2}>
        CLick Me
      </MyButton>

      <ArrowMTest />
    </ScrollView >
  );
}

export default App;
