import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    padding: 50,
  }
});
const Spinner = () => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator size={ 'large' }/>
    </View>
  );
}

export { Spinner }
