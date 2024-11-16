import React from 'react';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card1 from '../assets/card1.png';
import btn from '../assets/btn.png';

function FooterSection() {
  return (
    <section className="p-8 md:p-16 bg-[#796EFF] flex flex-col md:flex-row items-center md:h-[200px] sm:max-h[100vh]  gap-8">
      {/* Product Images Section */}
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-6 w-full md:w-1/2 items-center">
        {/* First Image (Cap) */}
        <div className="p-4 rounded-lg text-center">
          <img src={card2} alt="Cap" className="mx-auto mb-2 w-[100px] md:w-[120px] lg:w-[150px]" />
        </div>

        {/* Second Image (Perfumes with Overlap Effect) */}
        <div className="rounded-lg text-center relative">
          <div className="w-[100px] md:w-[150px] lg:w-[177px] h-[100px] md:h-[150px] lg:h-[177px] relative -top-[25px] md:-top-[50px] mx-auto">
            <img src={card3} alt="Perfumes" className="mx-auto" />
            <img src={btn} alt="Button" className="mx-auto mt-4 w-[80px] md:w-[100px]" />
          </div>
        </div>

        {/* Third Image (Sneakers) */}
        <div className="p-4 rounded-lg text-center">
          <img src={card1} alt="Sneakers" className="mx-auto mb-2 w-[100px] md:w-[120px] lg:w-[150px]" />
        </div>
      </div>

      {/* Description Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-lg md:text-2xl font-semibold text-white">Our Feature</h2>
        <h2 className="text-lg md:text-2xl font-semibold text-white">Products</h2>
        <p className="text-white mt-2 text-sm md:text-base">
          If we define Buzz buy in three words, it will be
        </p>
        <p className="text-white text-sm md:text-base">elegant, classic, and high-quality.</p>
      </div>
    </section>
  );
}

export default FooterSection