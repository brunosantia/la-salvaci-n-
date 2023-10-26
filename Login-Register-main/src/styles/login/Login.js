import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  firstSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    width: '100%',
  },
  secondSection: {
    flex: 2,
    backgroundColor: 'white',
    width: '100%',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  label: {
    color: '#CCC',
  },
  textInput: {
    color: '#000',
    padding: 8,
  },
  forgotPassword: {
    color: '#000',
    textAlign: 'right',
  },
  button: {
    backgroundColor: 'pink',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  spacing: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUp: {
    color: 'pink',
    paddingLeft: 5,
  },
});
