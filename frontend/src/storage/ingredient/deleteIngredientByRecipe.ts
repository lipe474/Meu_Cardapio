import { AppError } from '@utils/AppError';
import { Alert } from 'react-native';

export const removeIngredient = async (id: number) => {
  try {
    return await fetch(`http://192.168.3.24:3000/ingredient/${id}`, {
      method: 'DELETE'
    });
  } catch (error) {
    if (error instanceof AppError) {
      Alert.alert('Deletar Ingrediente', error.message);
    } else {
      Alert.alert(
        'Deletar Ingrediente',
        'Não foi possível deletar o ingrediente!'
      );
    }
  }
};
