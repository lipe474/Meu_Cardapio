import { Request, Response } from "express";
import { CreateIngredientUseCase } from "../usecases";

export class CreateIngredientController {
  async handle(request: Request, response: Response) {
    const { name, recipe_id } = request.body;

    const createIngredientUseCase = new CreateIngredientUseCase();

    await createIngredientUseCase.execute(name, parseInt(recipe_id));

    return response.status(201).send();
  }
}
