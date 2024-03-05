//2. content text without navbar
 import React from 'react';
 import './App.css';

 function App() {
     return (
      <><header>

         <nav className="w-full h-14  flex justify-between px-4 items-center text bg-blend-color-block md:px-4">
           <div className="text-2xl text-indigo-700 font-bold ">Skills</div>
           <ul className="md:flex  font-semibold">
             <li className="mx-[10px]">Home</li>
             <li className="mx-[10px]">Contact Us</li>
             <li className="mx-[10px]">About Us</li>
             <li className="mx-[10px]">Help</li>
           </ul>
           <div className="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer ">Login/Signup</div>
           <div className="md:hidden">
             <a className="text-4xl" href="#">&#8801;</a>
           </div>
         </nav>
       </header>
       <div className='p-5 grid lg:grid-flow-col'>

            <div>
            <img 
             src="https://www.easel.ly/blog/wp-content/uploads/2019/05/People-following-directions-with-text-and-illustrations-do-323-better-than-those-following-directions-without-illustrations.-1.png" alt='kkk'
             className='w-[100%] h-[30rem]'
             />
            </div>
            
             <div className='sm:w-full lg:mt-8   space-y-3 tracking-wider   text-align: left; text-[#656565] pl-4'>
                 There is no two ways about it —  thoughtful content and beautiful visuals can help make your story, message, or 
                     content into an engaging piece that gets the attention of your audience.
                    
                     While thoughtful, text-only content has its pros in communicating with impact, there’s been a significant shift in recent years favouring 
                     a combination of text and visuals — eye-catching infographics, beautifully crafted animations, clever gifs, and stunning Powerpoint presentations.
                  
                     </div>
          </div>

         </>
           ) ;

           }
export default App;




























