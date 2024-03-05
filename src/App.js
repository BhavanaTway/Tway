 // Image content and navbar
         import React, { useState } from 'react';

         const ResponsiveMenu = () => {
           const [isOpen, setIsOpen] = useState(false);
         
           const toggleMenu = () => {
             setIsOpen(!isOpen);
           };
         
           return (
             <><div className="bg-gray-800">
               <div className="max-w-7xl mx-auto px-4">
                 <div className="flex justify-between items-center py-4">
                   <div className="flex items-center">
                     <h1 className="text-white text-lg font-bold">Logo</h1>
                   </div>
                   <div className="lg:hidden">
                     <button
                       onClick={toggleMenu}
                       className="text-white focus:outline-none focus:text-white"
                     >
                       <svg
                         className="h-6 w-6"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                       >
                         {isOpen ? (
                           <path
                             strokeLinecap="round"
                             strokeLinejoin="round"
                             strokeWidth="2"
                             d="M6 18L18 6M6 6l12 12" />
                         ) : (
                           <path
                             strokeLinecap="round"
                             strokeLinejoin="round"
                             strokeWidth="2"
                             d="M4 6h16M4 12h16M4 18h16" />
                         )}
                       </svg>
                     </button>
                   </div>
                   <div className="hidden lg:flex lg:items-center lg:w-auto">
                     <nav>
                       <ul className="flex items-center space-x-4">
                         <li>
                           <a
                             href="#"
                             className="text-white hover:text-gray-300 transition duration-300"
                           >
                             Home
                           </a>
                         </li>
                         <li>
                           <a
                             href="#"
                             className="text-white hover:text-gray-300 transition duration-300"
                           >
                             About
                           </a>
                         </li>
                         <li>
                           <a
                             href="#"
                             className="text-white hover:text-gray-300 transition duration-300"
                           >
                             Services
                           </a>
                         </li>
                         <li>
                           <a
                             href="#"
                             className="text-white hover:text-gray-300 transition duration-300"
                           >
                             Contact
                           </a>
                         </li>
                       </ul>
                     </nav>
                   </div>
                 </div>
               </div>
         
               {isOpen && (
                 <div className="lg:hidden">
                   <nav>
                     <ul className="flex flex-col items-center">
                       <li>
                         <a
                           href="#"
                           className="text-white hover:text-gray-300 py-2"
                         >
                           Home
                         </a>
                       </li>
                       <li>
                         <a
                           href="#"
                           className="text-white hover:text-gray-300 py-2"
                         >
                           About
                         </a>
                       </li>
                       <li>
                         <a
                           href="#"
                           className="text-white hover:text-gray-300 py-2"
                         >
                           Services
                         </a>
                       </li>
                       <li>
                         <a
                           href="#"
                           className="text-white hover:text-gray-300 py-2"
                         >
                           Contact
                         </a>
                       </li>
                     </ul>
                   </nav>
                 </div>
               )}
             </div>
             <div className='p-5 grid lg:grid-flow-col'>

            <div>
              
              <img 
              src="https://www.easel.ly/blog/wp-content/uploads/2019/05/People-following-directions-with-text-and-illustrations-do-323-better-than-those-following-directions-without-illustrations.-1.png" alt='kkk'
              className='w-[100%] h-[30rem]'
              />
             </div>
            
              <div className='sm:w-full lg:mt-8 text-left  space-y-3 tracking-wider  text-[#656565] pl-4'>
                  <p>There’s no two ways about it —  thoughtful content and beautiful visuals can help make your story, message, or 
                      content into an engaging piece that gets the attention of your audience.</p>
                      <p>
                      While thoughtful, text-only content has its pros in communicating with impact, there’s been a significant shift in recent years favouring 
                      a combination of text and visuals — eye-catching infographics, beautifully crafted animations, clever gifs, and stunning Powerpoint presentations.
                      </p>
                      </div>
           </div>

           
               </>
         
             
           );
         };
         
         export default ResponsiveMenu;
         



























