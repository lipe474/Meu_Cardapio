import { Request, Response } from "express";
import { CreateRecipeUseCase } from "../usecases";

export class CreateRecipeController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createRecipeUseCase = new CreateRecipeUseCase();

    await createRecipeUseCase.execute(name);

    return response.status(201).send();
  }
}
