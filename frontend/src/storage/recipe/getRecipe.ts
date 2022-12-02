import { Alert } from 'react-native';

export const getAllRecipes = async () => {
  try {
    const response = await fetch('http://192.168.3.24:3000/recipes');

    return await response.json();
  } catch (error) {
    Alert.alert('Receitas', 'Não foi possível carregar as receitas!');
  }
};
