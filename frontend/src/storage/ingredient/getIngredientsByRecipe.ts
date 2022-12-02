import { Alert } from 'react-native';

export const getIngredients = async (recipe_id: number) => {
  try {
    const response = await fetch(
      `http://192.168.3.24:3000/ingredients/${recipe_id}`
    );

    return await response.json();
  } catch (error) {
    Alert.alert('Ingredientes', 'Não foi possível carregar os ingredientes!');
  }
};
