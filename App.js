import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  StatusBar,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import React, { useEffect, useMemo } from 'react';
import Root from './src/Root';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import { LoaderContext } from './src/utils/contexts';



const App = () => {
  const [isShowLoader, setIsShowLoader] = React.useState(false);

  const loaderContext = useMemo(
    () => ({
      showLoader: async () => {
        try {
          setIsShowLoader(true);
        } catch (e) {
          console.log(e);
        }
      },
      hideLoader: async () => {
        try {
          setIsShowLoader(false);
        } catch (e) {
          console.log(e);
        }
      },
    }),
    [],
  );

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <LoaderContext.Provider value={loaderContext}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Root />
            {isShowLoader && (
              <View
                style={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 1,
                  width: Dimensions.get('window').width,
                  height: Dimensions.get('window').height,
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0,0,0,0.2)',
                }}>
                <ActivityIndicator
                  style={{
                    alignSelf: 'center',
                  }}
                  pointerEvents="auto"
                  size="large"
                  color="#6531c4"
                  visible={true}
                />
              </View>
            )}
          </PersistGate>
        </Provider>
      </LoaderContext.Provider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});