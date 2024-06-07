import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const CreditCardPaymentScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </View>
      <View style={styles.stepIndicator}>
        <View style={styles.stepContainer}>
          <View style={styles.stepCircle}>
            <Text style={styles.stepNumber}>1</Text>
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
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name on Card"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          placeholderTextColor="#888"
        />
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="CVC Number"
            placeholderTextColor="#888"
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Expiry Date"
            placeholderTextColor="#888"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.continueButton}>
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
  },
  selectPaymentText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  continueButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CreditCardPaymentScreen;
