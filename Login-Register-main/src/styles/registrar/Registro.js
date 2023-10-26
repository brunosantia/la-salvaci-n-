import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  firstSection: {
    width: '100%',
    paddingTop: 50,
    paddingLeft: 25,
  },
  firstText: {
    fontSize: 35,
    paddingRight: 100,
  },
  secondText: {
    fontSize: 18,
  },
  secondSection: {
    flex: 2,
    backgroundColor: 'white',
    width: '100%',
    padding: 20,
    justifyContent: 'space-between',
  },
  label: {
    color: '#CCC',
  },
  textInput: {
    color: '#000',
    padding: 8,
  },
  spacing: {
    marginTop: 10,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  login: {
    color: 'pink',
    paddingLeft: 5,
  },
  imageRoll: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRoll: {
    backgroundColor: 'pink',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: 200,
    height: 200,
  },
  textRoll: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
