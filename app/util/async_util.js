import { AsyncStorage } from 'react-native';


// anonymous aync function expression... consider supplementing or
// replacing with redux-sagas if problematic during testing

export default {
  async setItem(key, value) {
      try {
          return await AsyncStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
          console.log('AsyncStorage#setItem error: ' + error.message);
      }
  },
  async getItem(key) {
      return await AsyncStorage.getItem(key)
          .then((result) => {
              if (result) {
                  try {
                      result = JSON.parse(result);
                      return result
                  } catch (e) {
                      console.log('AsyncStorage#getItem error deserializing JSON for key: ' + key, e.message);
                  }
              }
              return result;
          });
  },
  async removeItem(key) {
      return await AsyncStorage.removeItem(key);
  }
}
