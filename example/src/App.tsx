import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import RNXPrinter from '@lampn9397/react-native-xprinter';

const App = () => {
  const onPress = React.useCallback(async () => {
    await RNXPrinter.print();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="Press to print" onPress={onPress} />
    </SafeAreaView>
  );
};

export default App;
