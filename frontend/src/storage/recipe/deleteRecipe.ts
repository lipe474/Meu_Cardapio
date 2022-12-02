import { AppError } from '@utils/AppError';
import { Alert } from 'react-native';

export const removeRecipe = async (id: number) => {
  try {
    return await fetch(`http://192.168.3.24:3000/recipe/${id}`, {
      method: 'DELETE'
    });
  } catch (error) {
    if (error instanceof AppError) {
      Alert.alert('Deletar Receita', error.message);
    } else {
      Alert.alert('Deletar Receita', 'Não foi possível deletar a receita!');
    }
  }
};
