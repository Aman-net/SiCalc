import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Button, TextInput, Title} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';

const Main = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [open1, setOpen1] = useState(false);
  const [price, setPrice] = useState(0);
  const [irest, setIrest] = useState(0);
  const [per, setPer] = useState(1.5);
  const [totalTime, setTotalTime] = useState(0);

  const calc = () => {
    const date1 = startDate;
    const date2 = endDate;
    // const diffTime = Math.abs(date2 - date1);
    // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // const i = (diffDays * per * price) / 3000;
    // setDiff(diffDays);
    //setIrest(i.toFixed(2));

    var months;
    months = (date2.getFullYear() - date1.getFullYear()) * 12;
    months += date2.getMonth() - date1.getMonth();

    const day_Diff = date2.getDate() - date1.getDate();

    months += day_Diff / 30;

    if (months < 0) months = 0;
    if (months > 0 && months < 1) months = 1;
    const i = (months * per * price) / 100;
    setTotalTime(months);
    setIrest(i.toFixed(2));

    return;
  };

  return (
    <KeyboardAvoidingView enabled>
      <ScrollView style={styles.main}>
        <View style={styles.headingbox}>
          <Text style={styles.heading}>Interest Calculator</Text>
        </View>
        <View style={styles.below}>
          <View style={styles.darkbox}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}>
              <Text style={{...styles.dbt1, fontSize: 20}}>
                {Math.trunc(totalTime) +
                  ' m ' +
                  Math.trunc((totalTime % 1) * 30) +
                  ' d'}
              </Text>
              <Text style={{color: 'white', letterSpacing: 1}}>Time</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}>
              <Text style={styles.dbt1}>{parseFloat(irest)}</Text>
              <Text style={{color: 'white', letterSpacing: 1}}>Interest</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}>
              <Text style={styles.dbt2}>{irest + price}</Text>
              <Text style={{color: '#0DD0D3', letterSpacing: 1}}>Total</Text>
            </View>
          </View>
        </View>
        <View style={styles.bot}>
          <View style={styles.textin}>
            <TextInput
              label="Price"
              keyboardType="number-pad"
              onChangeText={text => setPrice(text)}
              style={{
                borderRadius: 24,
                borderTopEndRadius: 24,
                borderTopStartRadius: 24,
                fontSize: 18,
                paddingLeft: 8,
                flex: 1,
              }}
            />
            <TextInput
              style={{
                borderRadius: 24,
                borderTopStartRadius: 24,
                borderTopEndRadius: 24,
                fontSize: 18,
                paddingLeft: 8,
                flex: 1,
                marginLeft: 12,
              }}
              label="Rate"
              keyboardType="number-pad"
              onChangeText={text => setPer(text)}
              defaultValue="1.5"
            />
          </View>
          <Text style={{marginTop: 24, color: '#3c096c'}}>End Date</Text>
          <Button mode="text" onPress={() => setOpen1(true)}>
            {endDate.toDateString()}
          </Button>
          <DatePicker
            modal
            open={open1}
            date={endDate}
            onConfirm={date => {
              setEndDate(date);
              setOpen1(false);
            }}
            onCancel={() => setOpen1(false)}
            mode="date"
          />
          <Text style={{marginTop: 16, color: '#3c096c'}}>Start Date</Text>
          <View style={{alignItems: 'center'}}>
            <DatePicker
              date={startDate}
              onDateChange={setStartDate}
              mode="date"
            />
          </View>
          <Button
            style={styles.calcButton}
            labelStyle={{letterSpacing: 2}}
            mode="contained"
            onPress={() => calc()}>
            Calculate
          </Button>
          <Text style={styles.credit}>Made with ♥️ by Aman</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

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

export default Main;
