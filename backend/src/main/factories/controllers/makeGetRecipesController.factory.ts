import { GetRecipesController } from "../../../controllers";

const makeGetRecipesController = (): GetRecipesController =>
  new GetRecipesController();

export { makeGetRecipesController };
