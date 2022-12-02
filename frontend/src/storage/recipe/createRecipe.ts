import { AppError } from '@utils/AppError';
import { Alert } from 'react-native';

export const createRecipes = async (recipe: string) => {
  try {
    if (recipe.trim().length === 0) {
      return Alert.alert('Nova Receita', 'Informe o nome da receita!');
    }

    return await fetch('http://192.168.3.24:3000/recipe', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: recipe
      })
    });
  } catch (error) {
    if (error instanceof AppError) {
      Alert.alert('Nova Receita', error.message);
    } else {
      Alert.alert('Nova Receita', 'Não foi possível criar uma nova receita!');
    }
  }
};
