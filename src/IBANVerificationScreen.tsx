import { Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function IBANVerificationScreen() {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      onPress={() => {
        navigation.goBack();
      }}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}
    >
      <Text>IBANVerificationScreen Screen Inside Package</Text>
    </Pressable>
  );
}
