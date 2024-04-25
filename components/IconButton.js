import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function IconButtom({ icon, label, onPress }) {
  return (
    <Pressable style={StyleSheet.IconButtom} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#ff" />
      <Text style={StyleSheet.IconButtomLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  IconButtom: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconButtomLabel: {
    color: '#fff',
    margin: 12,
  },
});
