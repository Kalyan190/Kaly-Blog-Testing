import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import { prisma } from "@/lib/prisma";

const layout = async ({ children }: { children: React.ReactNode }) => {
   try {
      const user = await currentUser();

      if (!user) {
         return <>{children}</>;
      }

      const existingUser = await prisma.user.findUnique({
         where: { clerkUserId: user.id },
      });

      if (!existingUser) {
         await prisma.user.create({
            data: {
               name: user.fullName ?? user.lastName ?? "Unknown User",
               clerkUserId: user.id,
               email: user.emailAddresses[0]?.emailAddress ?? "no-email@unknown.com",
               imageUrl: user.imageUrl ?? "",
            },
         });
      }

      return <div>{children}</div>;
   } catch (error) {
      console.error("Error in Layout:", error);
      return (
         <div className="text-red-600 p-4">
            Something went wrong. Please try again later.
         </div>
      );
   }
};

export default layout;
