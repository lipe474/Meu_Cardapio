import { prisma } from "../database/prismaClient";
import { AppError } from "../errors/AppError";

export class DeleteRecipeUseCase {
  async execute(id: number) {
    const recipe = await prisma.recipes.findFirst({ where: { id } });

    if (!recipe) {
      throw new AppError("Recipe does not exists!");
    }

    await prisma.recipes.delete({ where: { id } });

    return recipe;
  }
}
