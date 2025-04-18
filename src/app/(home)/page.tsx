import BlogFooter from "@/components/home/blog-footer";
import Navbar from "@/components/home/header/navbar";
import HeroSection from "@/components/home/hero-section";
import TopArticles from "@/components/home/top-articles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import { AllArticlesPageSkeleton } from "../articles/page";



export default function Home() {
   return (
      <div className="container mx-auto">
         <Navbar/>
         <HeroSection/>
         <section className="relative py-16 md:py-24 ">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 ">
               <div className="mb-12 text-center">
                 <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Featured Articles</h2>
                 <p>Discover our most popular and trending content</p>
               </div>

               <Suspense fallback={<AllArticlesPageSkeleton/>}>
                  <TopArticles />
               </Suspense>
            
           
            <div className="mt-8 flex justify-center">
               <Link href={`/articles`}>
               <Button className="rounded-full hover:bg-gray-900 hover:text-white dark:bg-white dark:hover:text-gray-900">View all articles</Button>
               </Link>
            </div>
            </div>
         </section>
         <BlogFooter/>
        
      </div>
   );
}
