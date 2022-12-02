import { Request, Response } from "express";
import { DeleteIngredientUseCase } from "../usecases";

export class DeleteIngredientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteIngredientUseCase = new DeleteIngredientUseCase();

    await deleteIngredientUseCase.execute(parseInt(id));

    return response.status(204).send();
  }
}
