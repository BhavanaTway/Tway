

// 9.CARD WITH THE CARD HOVER

import React, { useEffect } from "react";

const App= () => {
  useEffect(() => {
    }, []);

  const App = [
    { id: 1, title: "The easiest way to design and launch your new business", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8DWcWDdaScD7ITbJD19l9dJ8ws1-TopAjEQ&usqp=CAU" },
    { id: 2, title: "Posts on this blog may contain affiliate links", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hKw7JXvXNQgnidtMOPCU9R5rMK926FQyKg&usqp=CAU" },
    { id: 3, title: "Toss in a professionally recorded voiceover.", image: "https://waterbearlearning.com/wp-content/uploads/2020/02/water_bear_learning_video_hacks007.jpg" },
  ];

  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
     
      <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center'>
        {App.map(card => (
          <div key={card.id} className='mx-auto relative mb-12'>
            <img src={card.image} alt={card.title} className='h-[250px] hover:scale-105 transition-all duration-500 shadow-2xl' />
            <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12 hover:-translate-y-4 transition-all duration-300'>
              <h3>{card.title}</h3>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}

export default App;



























