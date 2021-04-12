import React from 'react';
import {
  Text, View, StyleSheet, TextInput,
} from 'react-native';
import AppBar from '../components/AppBar';

export default function LogInScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.inner}>

        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="passsward" />

        <View style={styles.buttonContainer}>
          <Text style={styles.bottonLabel}>Submit</Text>
        </View>

        <View style={styles.fotter}>
          <Text style={styles.fotterText}> Sign up here!</Text>
          <Text style={styles.fotterLink}>Not registered?</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    backgroundColor: '#467fd3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  bottonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#fff',
  },
  fotterText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  fotterLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467fd3',
  },
  fotter: {
    flexDirection: 'row',
  },
});
