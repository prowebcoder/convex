"use client";
import React, { useState } from 'react';
import Image from 'next/image'; 
import AccordionApi from './AccordionApi';

const AboutAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-white">
      <div className="lg:w-10/12 w-full items-center justify-between font-mono lg:flex p-8 lg:p-24 lg:pl-56">
        <h1 className={`mb-3 text-5xl font-semibold`}>
          THE CONVEX ENERGY VALUE CHAIN
        </h1>
      </div>

      {AccordionApi.map((item, index) => (
        <div key={index} className={`w-full bg-zinc-300 cursor-pointer mb-2.5 accordion-item`}>
          <div className="lg:flex flex-col items-center justify-between text-black p-4 accordion-title" onClick={() => handleAccordionClick(index)}>
            {item.question}
          </div>
          {activeIndex === index && (
            <div className="w-full justify-between items-center lg:px-32 lg:py-14 lg:flex accordion-content bg-orange-700 text-white">
              <Image
                src={item.image}
                alt="Image single"
                width={540}
                height={304}
                priority
              />
              <div>
                <h2>{item.heading}</h2>
                <p>{item.answer}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutAccordion;
