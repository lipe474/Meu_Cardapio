import { prisma } from "../database/prismaClient";

export class CreateRecipeUseCase {
  async execute(name: string) {
    await prisma.recipes.create({
      data: {
        name,
      },
    });
  }
}
