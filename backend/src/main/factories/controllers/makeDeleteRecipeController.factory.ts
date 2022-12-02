import { DeleteRecipeController } from "../../../controllers";

const makeDeleteRecipeController = (): DeleteRecipeController =>
  new DeleteRecipeController();

export { makeDeleteRecipeController };
