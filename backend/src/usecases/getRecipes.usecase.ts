import { prisma } from "../database/prismaClient";

export class GetRecipesUseCase {
  async execute() {
    const recipes = await prisma.recipes.findMany({
      include: {
        Ingredients: true,
      },
    });

    return recipes;
  }
}
