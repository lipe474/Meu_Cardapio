import { Request, Response } from "express";
import { DeleteRecipeUseCase } from "../usecases";

export class DeleteRecipeController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteRecipeUseCase = new DeleteRecipeUseCase();

    await deleteRecipeUseCase.execute(parseInt(id));

    return response.status(204).send();
  }
}
