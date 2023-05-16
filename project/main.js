import React, {useState} from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import {Button, TextInput, Title} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import styles from './styles';

const Main = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isOpen, setisOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const [irest, setIrest] = useState(0);
  const [per, setPer] = useState(1.5);
  const [totalTime, setTotalTime] = useState(0);

  const calc = () => {
    const date1 = startDate;
    const date2 = endDate;
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 48,
              overflow: 'hidden',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                marginTop: 24,
                color: '#3c096c',
                alignSelf: 'flex-start',
              }}>
              End Date
            </Text>
            <DatePicker date={endDate} onDateChange={setEndDate} mode="date" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 48,
              overflow: 'hidden',
              marginTop: 32,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                marginTop: 16,
                color: '#3c096c',
                alignSelf: 'flex-start',
              }}>
              Start Date
            </Text>
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

export default Main;
