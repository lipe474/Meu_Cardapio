import { DeleteIngredientController } from "../../../controllers";

const makeDeleteIngredientController = (): DeleteIngredientController =>
  new DeleteIngredientController();

export { makeDeleteIngredientController };
