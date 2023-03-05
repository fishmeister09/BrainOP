import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingTop: Constants.statusBarHeight,
  },

  textInput: {
    height: 40,
    width: '100%',
    padding: '1%',
    borderWidth: 0,
    marginBottom: '7%',
    borderBottomWidth: 1,
    borderColor: '#919192',
  },
  header: {
    fontWeight: 700,
    fontSize: 40,
    marginBottom: '5%',
  },
  label: {
    color: '#1d1d1d',
    marginVertical: '1%',
    fontWeight: 700,
    fontSize: 18,
  },
  error: {
    color: '#ff5135',
    fontSize: 13,
    fontWeight: 700,
  },
  button: {
    backgroundColor: '#e7e8e0',
    alignItems: 'center',
    justifyContent: 'center',
    height: 54,
    paddingHorizontal: '5%',
    borderRadius: 10,
  },
  buttonText: {
    color: '#000000',
    fontWeight: 500,
    fontSize: 18,
  },
});
