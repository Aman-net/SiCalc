import {StyleSheet} from 'react-native';

const makeStyles = colors =>
  StyleSheet.create({
    titleBox: {
      backgroundColor: colors.primary,
      paddingVertical: 8,
      paddingBottom: 180,
      marginBottom: -180,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    title: {
      color: 'white',
      fontSize: 24,
      marginLeft: 16,
      fontWeight: 'bold',
      letterSpacing: 1,
    },
    display: {
      backgroundColor: colors.primary,
      color: 'white',
    },
    text1: {
      color: 'white',
      fontSize: 18,
    },
    text2: {
      color: 'white',
      fontSize: 14,
      letterSpacing: 1,
    },
    displayView1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 8,
      zIndex: 5,
      elevation: 4,
    },
    bottom: {
      backgroundColor: colors.background,
      flex: 1,
      justifyContent: 'space-between',
    },
    displayView2: {
      backgroundColor: colors.secondary,
      margin: 16,
      borderRadius: 24,
      padding: 16,
      marginBottom: 16,
      elevation: 8,
    },
    textinBox: {
      flexDirection: 'row',
      marginBottom: 8,
    },
    textin: {
      borderRadius: 20,
      borderTopEndRadius: 20,
      borderTopStartRadius: 20,
      paddingLeft: 8,
      flex: 1,
    },
    rc1: {
      flex: 1,
      fontSize: 16,
      fontWeight: '600',
      color: 'black',
    },
    rc2: {
      flex: 1,
      fontSize: 14,
      color: 'black',
    },
    rc3: {
      flex: 1,
      fontSize: 14,
      color: 'black',
      fontWeight: '500',
    },
  });

export default makeStyles;

// main: {
//   height: '100%',
//   backgroundColor: '#FFF8F0',
// },
// headingbox: {
//   marginHorizontal: 16,
//   height: 48,
//   justifyContent: 'center',
// },
// heading: {
//   fontSize: 20,
//   fontFamily: 'Roboto',
//   fontWeight: 'bold',
//   color: '#001524',
// },
// darkbox: {
//   backgroundColor: '#001524',
//   height: '100%',
//   borderRadius: 24,
//   padding: 24,
//   justifyContent: 'space-evenly',
//   elevation: 8,
// },
// dbt1: {
//   color: '#ffffff',
//   margin: 8,
//   fontSize: 24,
//   letterSpacing: 2,
//   fontWeight: '700',
// },
// dbt2: {
//   color: '#0DD0D3',
//   margin: 8,
//   fontSize: 34,
//   fontWeight: '700',
//   letterSpacing: 2,
// },
// textin: {
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   alignItems: 'center',
// },
// bot: {
//   marginTop: 32,
//   height: '100%',
//   marginHorizontal: 16,
// },
// heText: {
//   fontSize: 28,
//   fontWeight: '700',
//   color: '#3c096c',
//   fontFamily: 'serif',
//   textAlign: 'center',
// },
// calcButton: {
//   marginTop: 48,
//   backgroundColor: '#0BAAAD',
//   borderRadius: 24,
//   padding: 4,
//   elevation: 8,
// },
// below: {
//   backgroundColor: '#0BAAAD80',
//   height: '22%',
//   marginHorizontal: 16,
//   borderRadius: 24,
//   paddingTop: 8,
//   paddingRight: 4,
// },
// credit: {
//   alignSelf: 'center',
//   color: 'grey',
//   marginTop: 36,
// },
