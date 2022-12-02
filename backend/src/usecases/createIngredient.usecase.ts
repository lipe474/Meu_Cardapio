import { prisma } from "../database/prismaClient";
import { AppError } from "../errors/AppError";

export class CreateIngredientUseCase {
  async execute(name: string, recipe_id: number) {
    const recipe = await prisma.recipes.findFirst({
      where: {
        id: recipe_id,
      },
    });

    if (!recipe) {
      throw new AppError("This recipe does not exist!");
    }

    await prisma.ingredients.create({
      data: {
        name,
        recipe_id,
      },
    });
  }
}
