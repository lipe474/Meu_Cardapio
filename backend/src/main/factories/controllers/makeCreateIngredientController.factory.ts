import { CreateIngredientController } from "../../../controllers";

const makeCreateIngredientController = (): CreateIngredientController =>
  new CreateIngredientController();

export { makeCreateIngredientController };
