import { CreateRecipeController } from "../../../controllers";

const makeCreateRecipeController = (): CreateRecipeController =>
  new CreateRecipeController();

export { makeCreateRecipeController };
