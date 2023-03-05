import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { errorMessages } from '../utilities/ErrorMessages';
import { ErrorCheck } from '../utilities/ErrorChecker';
import { styles } from '../styles/styles';

export const Form = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
  });
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  const postFunction = () => {
    fetch('https://63e9d49ee0ac9368d644fa65.mockapi.io/data/fakeapi', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(() => {
        Alert.alert('Submited');
        setLoading(false);
        setData({
          name: '',
          email: '',
        });
      })
      .catch((error) => {
        Alert.alert('Failed to Submit');
        setLoading(false);
      });
  };

  const handleSubmit = () => {
    const result = ErrorCheck(data);
    if (result.length !== 0) {
      setError(result);
    } else {
      setError([]);
      setLoading(true);
      postFunction();
    }
  };

  const handleChange = (value, fieldName) => {
    setData({ ...data, [fieldName]: value });
  };
  return (
    <View style={{ padding: '5%' }}>
      <Text style={styles.header}>Fill the following Form</Text>
      <Text style={styles.label}>Name</Text>
      {error.includes('name') && (
        <Text style={styles.error}>{errorMessages.name}</Text>
      )}
      <TextInput
        placeholder="Enter Name"
        style={styles.textInput}
        onChangeText={(val) => handleChange(val, 'name')}
        value={data.name}
        maxLength={15}
      />

      <Text style={styles.label}>Email</Text>
      {error.includes('email') && (
        <Text style={styles.error}>{errorMessages.email}</Text>
      )}
      <TextInput
        placeholder="Enter Email"
        style={styles.textInput}
        onChangeText={(val) => handleChange(val, 'email')}
        value={data.email}
      />

      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text style={styles.buttonText}>
          {loading ? 'SUBMITTING' : 'SUBMIT'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
