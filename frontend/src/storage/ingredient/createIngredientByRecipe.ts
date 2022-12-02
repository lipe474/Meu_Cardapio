import { AppError } from '@utils/AppError';
import { Alert } from 'react-native';

export const createIngredient = async (
  ingredient: string,
  recipe_id: number
) => {
  try {
    if (ingredient.trim().length === 0) {
      return Alert.alert('Novo Ingrediente', 'Informe o nome do ingrediente!');
    }

    const response = await fetch('http://192.168.3.24:3000/ingredient', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: ingredient,
        recipe_id: recipe_id
      })
    });
    return response.status;
  } catch (error) {
    if (error instanceof AppError) {
      Alert.alert('Novo Ingrediente', error.message);
    } else {
      Alert.alert(
        'Novo Ingrediente',
        'Não foi possível criar um novo ingrediente!'
      );
    }
  }
};
