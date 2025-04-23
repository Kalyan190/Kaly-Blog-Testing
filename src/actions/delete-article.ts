"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteArticle = async (articleId: string) => {
   // Step 1: Delete related likes
   await prisma.likes.deleteMany({
      where: {
         articleId: articleId,
      },
   });

   // Step 2: Delete related comments
   await prisma.comments.deleteMany({
      where: {
         articleId: articleId,
      },
   });

   // Step 3: Delete the article itself
   await prisma.articles.delete({
      where: {
         id: articleId,
      },
   });

   // Step 4: Revalidate the dashboard UI
   revalidatePath("/dashboard");
};
