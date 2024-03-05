// 4. Image slides
   import React, { useState } from 'react';
   import './App.css';


  const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
  
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <img
          className="w-full h-auto"
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
        />
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r-full"
        onClick={prevSlide}
      >
        {'<'}
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l-full"
        onClick={nextSlide}
      >
        {'>'}
      </button>
      
    </div>
  );
};

const images = [
  ' https://static-cse.canva.com/blob/572091/Thecompleteguideforhowtomarrytextandimages.jpg ',
  ' https://miro.medium.com/v2/resize:fit:1200/1*cEVU-fDssfsrHK_b911Sig.jpeg ',
  ' https://elearningindustry.com/wp-content/uploads/2023/05/The-Complementary-Relationship-Between-Instructional-Design-And-Graphic-Design.jpg ',
];



const App = () => {
  return (
    <div className="container mx-auto p-4">
      
      < ImageSlider images={images}  />
     
      <p> hvuwfgwkc sjhvgscna,cm sdvhlkcnv skdvbsjb</p>
    </div>
  );
};

export default App;
       
