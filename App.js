import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Button, FlatList, Image } from 'react-native';
import FormInput from './FormInput';
import PatientList from './PatientList';

export default function App() {
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');
  const [patientList, setPatientList] = useState([]);

  const handleRegister = () => {
    if (patientName && age && contact) {
      Alert.alert(
        'Cadastro Realizado!',
        `Paciente: ${patientName}\nIdade: ${age}\nContato: ${contact}`
      );
      setPatientList([
        ...patientList,
        { id: Date.now().toString(), patientName, age, contact },
      ]);
      setPatientName('');
      setAge('');
      setContact('');
    } else {
      Alert.alert('Erro', 'Preencha todos os campos!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastro de Pacientes</Text>
      <Image
        source={{ uri: 'https://example.com/patient-image-1.jpg' }}
        style={styles.image}
      />
      <Image
        source={{ uri: 'https://example.com/patient-image-2.jpg' }}
        style={styles.image}
      />

      <FormInput
        label="Nome do Paciente"
        value={patientName}
        onChangeText={setPatientName}
        placeholder="Digite o nome do paciente"
      />
      <FormInput
        label="Idade"
        value={age}
        onChangeText={setAge}
        placeholder="Digite a idade"
        keyboardType="numeric"
      />
      <FormInput
        label="Contato"
        value={contact}
        onChangeText={setContact}
        placeholder="Digite o contato"
        keyboardType="numeric"
      />

      <Button title="Cadastrar" onPress={handleRegister} />

      <PatientList data={patientList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
});