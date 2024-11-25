import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Button from './Button';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    Alert.alert('Cadastro realizado!', `Paciente: ${formData.name}`);
  };

  return (
    <View style={styles.formContainer}>
      {/* Espaço reservado para imagens */}
      {/* Adicionar aqui as imagens relacionadas ao tema */}
      <Text style={styles.headerText}>Cadastro de Paciente</Text>
      
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome"
        value={formData.name}
        onChangeText={(value) => handleInputChange('name', value)}
      />
      
      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a idade"
        value={formData.age}
        keyboardType="numeric"
        onChangeText={(value) => handleInputChange('age', value)}
      />
      
      <Text style={styles.label}>Contato:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o contato"
        value={formData.contact}
        keyboardType="phone-pad"
        onChangeText={(value) => handleInputChange('contact', value)}
      />
      
      <Button title="Cadastrar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});
