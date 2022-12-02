import { prisma } from "../database/prismaClient";

export class GetIngredientsUseCase {
  async execute(recipe_id: number) {
    const ingredients = await prisma.ingredients.findMany({
      where: {
        recipe_id,
      },
    });

    return ingredients;
  }
}
