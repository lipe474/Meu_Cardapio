import { prisma } from "../database/prismaClient";
import { AppError } from "../errors/AppError";

export class DeleteIngredientUseCase {
  async execute(id: number) {
    const ingredient = await prisma.ingredients.findFirst({ where: { id } });

    if (!ingredient) {
      throw new AppError("Ingredient does not exists!");
    }

    await prisma.ingredients.delete({ where: { id } });

    return ingredient;
  }
}
