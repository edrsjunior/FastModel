// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  svg:{
    width: 60,
    height: 24,
  },

  container: {
    paddingTop: 80,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
  },

  navBar: {
    position: 'fixed',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 200,
  },  

  logoNavBar: {
    width: 216,
    height: 89,
    marginLeft: 50,
    marginRight: 50,

  },

  logoTop: {
    width: 299,
    height: 157,
    marginBottom: 20,
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
