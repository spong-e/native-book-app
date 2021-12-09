import Constants from 'expo-constants';
// get the localhost ip address at runtime using the Expo manifest
//running on expo and through a physical device, need to track down your local ip address,
//otherwise it will raise Network error
let localhost;
if (Constants.manifest.debuggerHost) {
  localhost = Constants.manifest.debuggerHost.split(':').shift();
}
const ENV = {
    dev: {
        API_URL: `http://192.1.168.36:4000/api`
    },
    prod: {
        API_URL: 'https://jonesa4-gqlapi.herokuapp.com/api'
    }
};
   
const getEnvVars = (env = Constants.manifest.releaseChannel) => {
   
    // __DEV__ is set to true when react-native is running locally in dev mode
    // __DEV__ is set to false when our app is published
    if (__DEV__) {
        return ENV.dev;
    } else if (env === 'prod') {
        return ENV.prod;
    }
};
  
export default getEnvVars;