import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button } from 'react-native';

const PromptAndroid = ({ title, message, placeholder, visible, onSubmit, onCancel }) => {
  const [password, setPassword] = useState('');

  return (
    <Modal visible={visible} onRequestClose={onCancel}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>{title}</Text>
        <Text style={{ fontSize: 14, marginBottom: 16 }}>{message}</Text>
        <TextInput
          secureTextEntry
          placeholder={placeholder}
          onChangeText={(text) => setPassword(text)}
          value={password}
          style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 4, padding: 8, marginBottom: 16 }}
        />
        <Button title='OK' onPress={() => onSubmit(password)} />
        <Button title='Cancel' onPress={onCancel} />
      </View>
    </Modal>
  );
};

export default PromptAndroid;
