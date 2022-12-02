import { Request, Response } from "express";
import { GetRecipesUseCase } from "../usecases";

export class GetRecipesController {
  async handle(request: Request, response: Response) {
    const getRecipesUseCase = new GetRecipesUseCase();

    const recipes = await getRecipesUseCase.execute();

    return response.json(recipes);
  }
}
