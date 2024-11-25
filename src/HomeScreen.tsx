import { Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function HomeScreen() {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('IbanVerification');
      }}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Text>Home Screen Inside Package</Text>
    </Pressable>
  );
}
