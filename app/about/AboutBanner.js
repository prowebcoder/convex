import React from 'react'
import Image from "next/image";
const AboutBanner = () => {
  return (
    <div>
        <section className="bg-gray-300">
      
      <div className="lg:w-10/12 w-full items-center justify-between font-mono lg:flex p-8 lg:p-24 lg:pl-56">
       <h1 className={`mb-3 lg:text-8xl text-5xl font-semibold`}>
  COMBINING EXPERTISE AND TECHNOLOGY
  </h1>
      </div>
      <div className="w-10/12 justify-end lg:flex">
          <div className="hidden max-w-4xl w-full lg:p-24"></div>
      <div className="lg:max-w-2xl w-full lg:p-24 p-8">
      <p className={`mb-3 text-lg font-semibold`}>
            Our team consists of some of the most knowledgeable energy trading domain experts in the world. Since the very beginning, we’ve been utilizing their insights to develop our proprietary technology. One simply cannot exist without the other.
          </p>
          </div>
          </div>
      </section>

      <section className="flex flex-col items-center justify-between bg-white">
        <div className="w-full justify-between items-end lg:flex">
      <div className=" w-full img-with-text-image">
      <Image
                src="/tower.png"
                alt="Image with text"
                width={854}
                height={919}
                priority
              />
      </div>
      <div className="w-full img-with-text-text p-8">
      <div className="lg:max-w-lg w-full items-center justify-between font-mono text-sm lg:flex lg:p-24">
	   <h1 className={`mb-3 lg:text-7xl text-5xl text-cyan-800 font-semibold`}>
2017
</h1>
	   <h1 className={`mb-3 lg:text-7xl text-5xl text-cyan-800 font-semibold`}>
21
</h1>
	  </div>
	  
	  <div className="lg:max-w-lg w-full items-center justify-between font-mono text-sm lg:flex lg:p-24">
	   <h1 className={`mb-3 lg:text-7xl text-5xl text-cyan-800 font-semibold`}>
2.5M
</h1>
	   <h1 className={`mb-3 lg:text-7xl text-5xl text-cyan-800 font-semibold`}>
33K
</h1>
	  </div>
      </div>
      </div>
  
      </section>
    </div>
  )
}

export default AboutBanner