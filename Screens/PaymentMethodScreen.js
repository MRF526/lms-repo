import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import CreditCardPaymentScreen from './CardPayment';

const PaymentMethodScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.stepIndicator}>
        <View style={styles.stepContainer}>
          <View style={[styles.stepCircle, styles.activeStepCircle]}>
            <Text style={[styles.stepNumber, styles.activeStepNumber]}>1</Text>
          </View>
          <Text style={styles.stepLabel}>Overview</Text>
        </View>
        <View style={styles.stepLine}></View>
        <View style={styles.stepContainer}>
          <View style={[styles.stepCircle, styles.activeStepCircle]}>
            <Text style={[styles.stepNumber, styles.activeStepNumber]}>2</Text>
          </View>
          <Text style={styles.stepLabel}>Payment Method</Text>
        </View>
        <View style={styles.stepLine}></View>
        <View style={styles.stepContainer}>
          <View style={styles.stepCircle}>
            <Text style={styles.stepNumber}>3</Text>
          </View>
          <Text style={styles.stepLabel}>Confirmation</Text>
        </View>
      </View>
      <Text style={styles.selectPaymentText}>Select Payment Method</Text>
      <View style={styles.paymentOption}>
        <Ionicons name="add-circle-outline" size={24} color="#000" />
        <Text style={styles.paymentOptionText}>EasyPaisa</Text>
      </View>
      <View style={[styles.paymentOption, styles.selectedPaymentOption]}>
        <Ionicons name="add-circle-outline" size={24} color="#000" />
        <Text style={styles.paymentOptionText}>Add Credit Card</Text>
      </View>
      <View style={styles.paymentOption}>
        <Ionicons name="add-circle-outline" size={24} color="#000" />
        <Text style={styles.paymentOptionText}>JazzCash</Text>
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={()=>props.navigation.navigate(CreditCardPaymentScreen)}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop:35,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  stepContainer: {
    alignItems: 'center',
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeStepCircle: {
    backgroundColor: '#000',
  },
  stepNumber: {
    color: '#fff',
    //backgroundColor:'black'
  },
  activeStepNumber: {
    color: '#fff',
  },
  stepLabel: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  stepLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#ccc',
    borderWidth:1,
    
    
  },
  selectPaymentText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginBottom: 15,
  },
  selectedPaymentOption: {
    backgroundColor: '#e0e0e0',
  },
  paymentOptionText: {
    marginLeft: 10,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default PaymentMethodScreen;
