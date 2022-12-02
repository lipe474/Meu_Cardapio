import { useState, useEffect, useRef } from "react";
import { useRoute, useNavigation } from '@react-navigation/native';
import { useTheme } from "styled-components/native";
import { Alert, FlatList, View, TextInput } from "react-native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Loading } from "@components/Loading";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { ButtonIcon } from "@components/ButtonIcon";
import { IngredientCard } from "@components/IngredientCard";
import { GeneralContainer } from "@components/Container";

import { Form, HeaderList } from "./styles";
import { createIngredient } from "@storage/ingredient/createIngredientByRecipe";
import { getIngredients } from "@storage/ingredient/getIngredientsByRecipe";
import { removeIngredient } from "@storage/ingredient/deleteIngredientByRecipe";
import { removeRecipe } from "@storage/recipe/deleteRecipe";

type RouteParams = {
  recipe_name: string;
  recipe_id: number;
}

type Props = {
  id: number;
  name: string;
  recipe_id: number;
}

export function Ingredients() {
  const { COLORS } = useTheme()

  const [isLoading, setIsLoading] = useState(true)

  const [newIngredientName, setNewIngredientName] = useState('')
  const [ingredients, setIngredients] = useState<Props[]>([]) 

  const newIngredientNameInputRef = useRef<TextInput>(null)

  const navigation = useNavigation()
  const route = useRoute()
  const { recipe_name, recipe_id } = route.params as RouteParams;

  async function handleAddIngredient(){
    if(newIngredientName.trim().length === 0) {
      return Alert.alert('Novo ingrediente', 'Informe o ingrediente para adicionar!')
    }

    const response = await createIngredient(newIngredientName, recipe_id)

    if(response === 201) {
      fetchIngredientsByRecipe()
      newIngredientNameInputRef.current?.blur()
      setNewIngredientName('')
    }
  }

  async function fetchIngredientsByRecipe(){
    setIsLoading(true)

    const response = await getIngredients(recipe_id)

    if(response) {
      setIsLoading(false)
      setIngredients(response)
    }
  }
  
  async function handleIngredientRemove(id: number){
    const response = await removeIngredient(id)
    
    if(response) {
      fetchIngredientsByRecipe()
    }
  }

  async function recipeRemove() {
    const response = await removeRecipe(recipe_id)
    
    if(response) {
      navigation.navigate('recipes')
    }
  }

  async function handleRecipeRemove() {
    Alert.alert(
      'Remover receita',
      'Deseja remover a receita?',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => recipeRemove() }
      ]
    )
  }

  useEffect(() => {
    fetchIngredientsByRecipe()
  }, [])

  return (
    <GeneralContainer>
      <Header showBackButton />

      <Highlight 
        title={recipe_name}
        subtitle={`Adicione os ingredientes da receita ${recipe_name}`}
      />

      <Form>
        <Input
          inputRef={newIngredientNameInputRef}
          onChangeText={setNewIngredientName}
          value={newIngredientName}
          placeholder="Nome do ingrediente"
          autoCorrect={false}
          onSubmitEditing={handleAddIngredient}
          returnKeyType="done"
        />
          
        <ButtonIcon 
          style={{backgroundColor: 'black', borderRadius: 6}}
          icon="add" 
          onPress={handleAddIngredient}
        />
      </Form>

      <HeaderList>
        <View style={{ height: 1, backgroundColor: COLORS.WHITE, alignSelf: 'stretch'}} />
      </HeaderList>

    {
      isLoading ? <Loading /> :
  
      <FlatList
        data={ingredients}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <IngredientCard 
            name={item.name}
            onRemove={() => handleIngredientRemove(item.id)}
          />
        )}

        ListEmptyComponent={() => (
          <ListEmpty message="Não há ingredientes cadastrados nessa receita!" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100}, ingredients.length === 0 && { flex: 1}]}
      />
    }

      <Button
        title="Remover receita"
        type="SECONDARY"
        onPress={handleRecipeRemove}
      />
    </GeneralContainer>
  )
}