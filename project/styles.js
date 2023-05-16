import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#FFF8F0',
  },
  headingbox: {
    marginHorizontal: 16,
    height: 48,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#001524',
  },
  darkbox: {
    backgroundColor: '#001524',
    height: '100%',
    borderRadius: 24,
    padding: 24,
    justifyContent: 'space-evenly',
    elevation: 8,
  },
  dbt1: {
    color: '#ffffff',
    margin: 8,
    fontSize: 24,
    letterSpacing: 2,
    fontWeight: '700',
  },
  dbt2: {
    color: '#0DD0D3',
    margin: 8,
    fontSize: 34,
    fontWeight: '700',
    letterSpacing: 2,
  },
  textin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bot: {
    marginTop: 32,
    height: '100%',
    marginHorizontal: 16,
  },
  heText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#3c096c',
    fontFamily: 'serif',
    textAlign: 'center',
  },
  calcButton: {
    marginTop: 48,
    backgroundColor: '#0BAAAD',
    borderRadius: 24,
    padding: 4,
    elevation: 8,
  },
  below: {
    backgroundColor: '#0BAAAD80',
    height: '22%',
    marginHorizontal: 16,
    borderRadius: 24,
    paddingTop: 8,
    paddingRight: 4,
  },
  credit: {
    alignSelf: 'center',
    color: 'grey',
    marginTop: 36,
  },
});

export default styles;
