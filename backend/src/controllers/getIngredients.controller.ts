import { Request, Response } from "express";
import { GetIngredientsUseCase } from "../usecases";

export class GetIngredientsController {
  async handle(request: Request, response: Response) {
    const { recipe_id } = request.params;

    const getIngredientsUseCase = new GetIngredientsUseCase();

    const ingredients = await getIngredientsUseCase.execute(
      parseInt(recipe_id)
    );

    return response.json(ingredients);
  }
}
