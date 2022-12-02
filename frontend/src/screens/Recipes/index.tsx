import { useState, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { getAllRecipes } from '@storage/recipe/getRecipe';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Loading } from '@components/Loading';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { RecipeCard } from '@components/RecipeCard';
import { GeneralContainer } from '@components/Container';

type Props = {
  id: number,
  name: string;
  Ingredients: [],
}

export function Recipes() {
  const [isLoading, setIsLoading] = useState(true)
  const [recipes, setRecipes] = useState<Props[]>([]);

  const navigation = useNavigation()

  function handleNewRecipe() {
    navigation.navigate('new')
  }

  async function getRecipes() {
      
    setIsLoading(true)
    const recipes = await getAllRecipes().finally(() => setIsLoading(false))
      
    if(recipes?.length > 0){
      setRecipes(recipes)  
    }
  } 

  function handleOpenRecipe(recipe: Props) {
    navigation.navigate('ingredients', { recipe_name: recipe.name, recipe_id: recipe.id })
  }

  useFocusEffect(useCallback(() => {
    getRecipes();
  }, []))

  return (
    <GeneralContainer>
      <Header />
      <Highlight 
        title="Meu Cardápio"
        subtitle="Crie suas receitas!"
      />

    {
      isLoading ? <Loading /> :
      <FlatList 
        data={recipes}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <RecipeCard 
            title={item.name} 
            onPress={() => handleOpenRecipe(item)}
          />
        )}
        contentContainerStyle={recipes.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Cadastre abaixo a sua primeira receita!" />
        )}
        showsVerticalScrollIndicator={false}
      />
    }

      <Button 
        title='Criar nova receita'
        onPress={handleNewRecipe}
      />
    </GeneralContainer>
  );
}