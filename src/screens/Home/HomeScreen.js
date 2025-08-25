// HomeScreen.js
import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import dayjs from "dayjs";
import { getMonthlyIncome } from "../../services/expenseService";
import { getGreenColor, getPrimarycolor } from "../../theme/theme";
import Header from "./components/Header";

const HomeScreen = () => {
  const currentMonth = dayjs().month(); 
  const currentYear = dayjs().year();


  // useEffect(()=>{
  //   getMonthlyIncome(currentYear, 'token').then((data)=>{
  //     console.log(data);
  //   })
  // },[])
  // generisemo 12 meseci (od januara do decembra)
  const months = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    name: dayjs().month(i).format("MMMM"),
    isCurrent: i === currentMonth,
    isPast: i < currentMonth,
    income: 2000
  }));

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          styles.card,
          item.isCurrent && styles.currentCard,
          item.isPast && !item.isCurrent && styles.pastCard,
        ]}
      >
        <Text style={item.isCurrent ? styles.currentCardText : styles.cardText}>{item.name}</Text>
      
        <Text style={[item.isCurrent ? styles.currentCardText : styles.cardText, item.isCurrent && styles.greenText]}> {item.income>0 ? ' + ' : ' - '}
        {item.income} <Text style={[item.isCurrent ? styles.currentCardText : styles.cardText, styles.valuteText]}>EUR</Text></Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header/>

      <FlatList
        data={months}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: 20 }}
      />
 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  valuteText: {
    fontSize: 12,

  },
 
 

  card: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#fff",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  cardText: {
    fontSize: 18,
    fontWeight: "500",
  },
  currentCardText:{
    fontSize: 18,
    fontWeight: "500",
    color:'white'
  
  },
  greenText:{
    color:getGreenColor(),
    fontSize:22
  },
  currentCard: {
    backgroundColor: getPrimarycolor(), 

  },
  pastCard: {
    opacity: 0.5, // prosli meseci bleđi
  },
});

export default HomeScreen;
