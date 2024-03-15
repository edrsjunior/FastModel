// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
  },

  navBar: {
    flexDirection: 'row',
    marginBottom: 400,
  },  

  logoNavBar: {
    width: 216,
    height: 89,
  },

  logoTop: {
    width: 299,
    height: 157,
    marginBottom: 100,
  },
  defaultInput: {
    width: 256,
    height: 45,
    backgroundColor: 'transparent',
    color: 'gray',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 9,
    textAlign: 'center',
    marginBottom: 19,
  },
 
});

export default styles;
