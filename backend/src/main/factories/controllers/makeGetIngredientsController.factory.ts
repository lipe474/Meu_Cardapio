import { GetIngredientsController } from "../../../controllers";

const makeGetIngredientsController = (): GetIngredientsController =>
  new GetIngredientsController();

export { makeGetIngredientsController };
