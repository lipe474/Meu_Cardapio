import { Alert, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'

import { Content, Icon } from "./styles";

import { AppError } from '@utils/AppError';
import { createRecipes } from '@storage/recipe/createRecipe';

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { GeneralContainer } from '@components/Container';
import { getAllRecipes } from '@storage/recipe/getRecipe';

export function NewRecipe() {
  const [recipe, setRecipe] = useState('')

  const navigation = useNavigation()

  async function createRecipe() {
      const response = await createRecipes(recipe);

      if (!response) {
        Alert.alert('Nova Receita', 'Não foi possível criar uma nova receita!');
      }

      const recipes = await getAllRecipes()
      const array_recipes = [...recipes]
      const filter = array_recipes.filter((item) => item.name === recipe)
      const id = filter[0].id

      navigation.navigate('ingredients', { recipe_name: recipe, recipe_id: id })
  }

  return (
    <GeneralContainer>
      <Header showBackButton />

      <Content>
        <Icon />
        
        <Highlight 
          title="Nova receita"
          subtitle="Crie aqui uma nova receita!"
        />

        <Input
          placeholder="Nome da receita"
          onChangeText={setRecipe}
          onSubmitEditing={createRecipe}
          returnKeyType="done"
        />

      </Content>
        <Button 
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={createRecipe}
        />
    </GeneralContainer>
  )
}