"use client"
import { useState } from 'react';

function ExploreButton() {
    const [rotation, setRotation] = useState(0);

    const rotate = (degrees) => {
        setRotation(degrees);
    };

    return (
        <div className="grid md:grid-cols-main-page grid-cols-main-page-mobile col-span-full md:gap-x-2.5 bg-eggshell">
            <div className="col-start-2 flex justify-end px-4 py-6 md:col-span-5 md:col-start-3">
                <button className="w-full text-fusion md:w-auto">
                    
                    <div className="relative h-12 w-full animate-spinX" style={{ transformStyle: 'preserve-3d' }}>
                        {[0, 90, 180, 270].map((deg, index) => (
                            <div key={index} className="absolute right-0 flex h-12 w-full items-center justify-center border-[1px] border-fusion bg-eggshell px-4 py-2 opacity-100" style={{ transform: `rotateX(${deg}deg) translateZ(1.45rem)`, opacity: rotation === deg ? 1 : 1 }}>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="text-[4vw] font-bold uppercase sm:text-lg">Explore our Berlin Campus</div>
                                    <span className="icon inline-block text-transparent bg-no-repeat h-[5vw] w-[5vw] bg-fusion sm:h-5 sm:w-5" style={{ '--data-url': 'url(/assets/arrow_to_tr.svg)' }}>&nbsp;&nbsp;&nbsp;</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </button>
            </div>
        </div>
    );
}

export default ExploreButton;
