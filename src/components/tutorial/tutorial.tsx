import Image from "next/image";
import React from "react";

interface Tutorial {
   title: string;
   description: string;
   imageUrl: string;
   author: string;
   date: string;
   tags: string[];
}

const tutorials: Tutorial[] = [
   {
      title: "Mastering React in 2025",
      description:
         "Learn the fundamentals and advanced concepts of React with hands-on examples.",
      imageUrl: "https://images.unsplash.com/photo-1670057037226-b3d65909424f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhY3Rqc3xlbnwwfHwwfHx8MA%3D%3D",
      author: "Kalyan Kumar",
      date: "April 18, 2025",
      tags: ["React", "Frontend", "Hooks"],
   },
   {
      title: "TypeScript for Beginners",
      description:
         "Kickstart your TypeScript journey with this beginner-friendly tutorial.",
      imageUrl: "https://plus.unsplash.com/premium_photo-1664301969414-d8435c2b91bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlYWN0anN8ZW58MHx8MHx8fDA%3D",
      author: "Jane Doe",
      date: "March 10, 2025",
      tags: ["TypeScript", "JavaScript", "Strong Typing"],
   },
   {
      title: "Tailwind CSS Tips & Tricks",
      description:
         "Style your web apps with ease using these Tailwind CSS shortcuts.",
      imageUrl: "https://images.unsplash.com/photo-1731937389219-0482470c099e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFpbHdpbmQlMjBjc3N8ZW58MHx8MHx8fDA%3D",
      author: "John Smith",
      date: "January 20, 2025",
      tags: ["Tailwind", "CSS", "Design"],
   },
];

const Tutorials: React.FC = () => {
   return (
      <div className=" min-h-screen px-6 py-12">
         {/* Hero Section */}
         <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 dark:text-white">
               📚 Learn with Our Tutorials
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-200">
               Explore tutorials on modern web development, design, and best practices — from beginner to advanced.
            </p>
         </div>

         {/* Tutorials Grid */}
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tutorials.map((tutorial, index) => (
               <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer dark:border border-white"
               >
                  <div className="relative w-full h-48">
                     <Image
                        src={tutorial.imageUrl}
                        alt={tutorial.title}
                        fill
                        className="object-cover"
                     />
                  </div>
                  <div className="p-5">
                     <h2 className="text-xl font-semibold text-gray-800 mb-2">{tutorial.title}</h2>
                     <p className="text-gray-600 text-sm mb-3">{tutorial.description}</p>
                     <div className="flex flex-wrap gap-2 mb-3">
                        {tutorial.tags.map((tag, i) => (
                           <span
                              key={i}
                              className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full"
                           >
                              #{tag}
                           </span>
                        ))}
                     </div>
                     <div className="text-xs text-gray-500">
                        By <span className="font-medium">{tutorial.author}</span> · {tutorial.date}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Tutorials;
