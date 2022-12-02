import { Express } from "express";
import {
  makeCreateIngredientController,
  makeCreateRecipeController,
  makeDeleteIngredientController,
  makeDeleteRecipeController,
  makeGetIngredientsController,
  makeGetRecipesController,
} from "../factories/controllers";

export const setupRoutes = (app: Express) => {
  app.post("/recipe", makeCreateRecipeController().handle);
  app.delete("/recipe/:id", makeDeleteRecipeController().handle);
  app.get("/recipes", makeGetRecipesController().handle);

  app.post("/ingredient", makeCreateIngredientController().handle);
  app.delete("/ingredient/:id", makeDeleteIngredientController().handle);
  app.get("/ingredients/:recipe_id", makeGetIngredientsController().handle);
};
