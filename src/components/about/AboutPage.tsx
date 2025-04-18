import Image from "next/image";
import React from "react";

const AboutPage: React.FC = () => {
   return (
      <div className="dark:bg-primary/10 text-gray-800 min-h-screen px-6 py-16">
         <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 dark:text-white">About Our Blog</h1>
            <p className="text-lg text-gray-600 mb-8 dark:text-white">
               Welcome to <span className="text-blue-600 font-semibold">MindCanvas</span> – where thoughts become stories.
               This blog is a cozy corner of the internet where we share insights, ideas, and inspiration across technology, design, and everyday life.
            </p>
            <div className="w-full flex items-center justify-center ">
               <Image
                  src={"https://media.istockphoto.com/id/860887528/photo/whats-your-story-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=IkAjduoBDMOkFdqvJXpIN-8HoT7oUTdupABbl6p_nRE="}
                  alt="Blog inspiration"
                  width={500}
                  height={150}
                  className="rounded-2xl shadow-lg object-cover mb-10 dark:shadow-md dark:shadow-white"
               />
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-left dark:text-white">
               <div className="border border-gray-200 rounded-md p-4 shadow-xl">
                  <h2 className="text-2xl font-semibold mb-2">👋 Who We Are</h2>
                  <p className="text-gray-700 dark:text-white">
                     A passionate group of developers, designers, and storytellers who believe in the power of words and clean code.
                     We&apos;re here to explore, learn, and grow – one post at a time.
                  </p>
               </div>
               <div className="border border-gray-200 rounded-md p-4 shadow-xl">
                  <h2 className="text-2xl font-semibold mb-2">🌟 Our Mission</h2>
                  <p className="text-gray-700 dark:text-white">
                     To create a space where curiosity is celebrated and knowledge is shared freely.
                     Whether you&apos;re a seasoned dev or a curious mind, there&apos;s something here for you.
                  </p>
               </div>
            </div>

            <div className="mt-12 bg-blue-50 dark:bg-primary-foreground p-6 rounded-xl shadow-sm dark:border dark:border-white dark:text-white">
               <h3 className="text-xl font-semibold mb-2">Want to Connect?</h3>
               <p className="text-gray-700 mb-4 dark:text-white">
                  We&apos;re here to explore, learn, and grow – one post at a time.
                  Whether you&apos;re a seasoned dev or a curious mind, there&apos;s something here for you.
                  We&apos;re always excited to meet new people! Reach out to us via email or follow us on our socials.
               </p>
               <div className="flex justify-center space-x-4">
                  <a href="#" className="text-blue-500 hover:underline">Twitter</a>
                  <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
                  <a href="mailto:hello@mindcanvas.blog" className="text-blue-500 hover:underline">Email Us</a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutPage;
