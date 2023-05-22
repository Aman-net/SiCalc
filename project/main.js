import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableHighlight,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {
  Button,
  DataTable,
  Divider,
  TextInput,
  useTheme,
} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import makeStyles from './styles';

const Main = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [price, setPrice] = useState(0);
  const [irest, setIrest] = useState(0);
  const [per, setPer] = useState(1.5);
  const [totalTime, setTotalTime] = useState(0);
  const [itemList, setItemList] = useState([]);
  const [priceTotal, setPriceTotal] = useState(0);
  const [interestTotal, setInterestTotal] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const theme = useTheme();

  const styles = makeStyles(theme.colors);

  const rnum = num => {
    return parseFloat(parseFloat(num).toFixed(2));
  };

  const clearState = () => {
    setPrice();
    setStartDate(new Date());
    setEndDate(new Date());
    setTotalTime(0);
  };

  // const calc = () => {
  //   const date1 = startDate;
  //   const date2 = endDate;
  //   var months;

  //   months = (date2.getFullYear() - date1.getFullYear()) * 12;
  //   months += date2.getMonth() - date1.getMonth();

  //   const day_Diff = date2.getDate() - date1.getDate();

  //   months += day_Diff / 30;

  //   if (months < 0) months = 0;
  //   if (months > 0 && months < 1) months = 1;
  //   const i = (months * per * price) / 100;
  //   setTotalTime(months);
  //   setIrest(parseFloat(i.toFixed(2)));
  //   return;
  // };

  const addItem = () => {
    Keyboard.dismiss();
    const date1 = startDate;
    const date2 = endDate;
    var months;

    months = (date2.getFullYear() - date1.getFullYear()) * 12;
    months += date2.getMonth() - date1.getMonth();

    const day_Diff = date2.getDate() - date1.getDate();

    months += day_Diff / 30;
    if (months > 0 && months < 1) months = 1;

    if (months <= 0 || price == undefined || per == undefined) {
      alert('Invalid! Please enter correct values.');
      clearState();
      return;
    }
    const i = (months * rnum(per) * rnum(price)) / 100;
    const intr = rnum(i);
    setTotalTime(months);
    setIrest(intr);

    const item = {
      id: 'id' + Math.random().toString(16).slice(2),
      price: rnum(price),
      time: Math.trunc(months) + 'm ' + Math.trunc((months % 1) * 30) + 'd',
      interest: intr,
      total: rnum(rnum(price) + intr),
    };
    setPriceTotal(prev => rnum(prev + item.price));
    setInterestTotal(prev => rnum(prev + item.interest));
    setFinalTotal(prev => rnum(prev + item.total));
    setItemList(prev => [...prev, item]);
    clearState();
  };

  const deleteItem = e => {
    setPriceTotal(prev => rnum(prev - e.price));
    setInterestTotal(prev => rnum(prev - e.interest));
    setFinalTotal(prev => rnum(prev - e.total));
    setItemList(prev => {
      let l = [...prev];
      return l.filter(item => item.id !== e.id);
    });
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: theme.colors.background}}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>S.I. Calc</Text>
      </View>
      <View style={styles.displayView2}>
        <View style={styles.textinBox}>
          <TextInput
            label="Price"
            keyboardType="number-pad"
            value={price ? price.toString() : ''}
            onChangeText={setPrice}
            style={styles.textin}
          />
          <TextInput
            style={{...styles.textin, marginLeft: 12}}
            label="Rate"
            value={per ? per.toString() : ''}
            keyboardType="number-pad"
            onChangeText={setPer}
            defaultValue="1.5"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            overflow: 'hidden',
            justifyContent: 'space-between',
          }}>
          <Text style={{flex: 1, color: 'black'}}>End Date</Text>
          <Button mode="text" style={{flex: 3}} onPress={() => setIsOpen(true)}>
            {endDate.toDateString()}
          </Button>
          <DatePicker
            fadeToColor="none"
            date={endDate}
            mode="date"
            androidVariant="nativeAndroid"
            modal
            open={isOpen}
            onConfirm={date => {
              setEndDate(date);
              setIsOpen(false);
            }}
            onCancel={() => setIsOpen(false)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            overflow: 'hidden',
          }}>
          <Text style={{flex: 1, color: 'black'}}>Start Date</Text>
          <DatePicker
            date={startDate}
            onDateChange={setStartDate}
            mode="date"
            style={{height: 64, flex: 3}}
            androidVariant="nativeAndroid"
            fadeToColor="none"
            textColor="black"
          />
        </View>
        <Button
          labelStyle={{letterSpacing: 2}}
          mode="contained"
          elevation={4}
          onPress={() => addItem()}
          style={{marginTop: 8, width: '70%', alignSelf: 'center'}}>
          ADD
        </Button>
      </View>
      <View style={styles.bottom}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 8,
            marginHorizontal: 24,
          }}>
          <Text style={styles.rc1}>Price</Text>
          <Text style={{...styles.rc1}}>Time</Text>
          <Text style={styles.rc1}>Interest</Text>
          <Text style={{...styles.rc1, textAlign: 'right'}}>Total</Text>
        </View>
        <ScrollView style={{marginHorizontal: 8}}>
          <View style={{marginHorizontal: 16}}>
            {itemList.map(item => (
              <TouchableOpacity
                key={item.id}
                onLongPress={() => deleteItem(item)}>
                <View>
                  <View style={{flexDirection: 'row', marginVertical: 6}}>
                    <Text style={styles.rc2}>{item.price}</Text>
                    <Text style={styles.rc2}>{item.time}</Text>
                    <Text style={styles.rc2}>{item.interest}</Text>
                    <Text style={{...styles.rc2, textAlign: 'right'}}>
                      {item.total}
                    </Text>
                  </View>
                  <Divider />
                </View>
              </TouchableOpacity>
            ))}
            {/* {itemList.length > 0 && (
              <>
                <Divider />
                <View style={{flexDirection: 'row', marginVertical: 8}}>
                  <Text style={styles.rc3}>{priceTotal}</Text>
                  <Text style={styles.rc3}></Text>
                  <Text style={styles.rc3}>{interestTotal}</Text>
                  <Text style={styles.rc3}>{finalTotal}</Text>
                </View>
              </>
            )} */}
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: theme.colors.secondary,
            padding: 16,
            margin: 16,
            borderRadius: 16,
            elevation: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                fontWeight: '600',
                color: theme.colors.primary,
              }}>
              {interestTotal}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: theme.colors.primary,
                letterSpacing: 1,
              }}>
              Interest
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: '600',
                color: theme.colors.primary,
              }}>
              {finalTotal}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: theme.colors.primary,
                fontWeight: '600',
                letterSpacing: 1,
              }}>
              Total
            </Text>
          </View>
        </View>
        <Text style={{textAlign: 'center', marginBottom: 4, color: 'grey'}}>
          Made with ♥️ by Aman
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Main;
