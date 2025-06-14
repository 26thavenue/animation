import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const NormalTrail = () => (
  <div className="bg-amber-300 h-16 w-16 rounded-full pointer-events-none" />
);

const SecondTrail = () => (
  <div className="bg-amber-700 flex items-center text-white justify-center px-6 py-3 rounded-full pointer-events-none" >
    <h3 className="text-xs">Buy Now</h3>
    </div>
);

const PulsatingDot = () => {
  return (
    <div className="relative w-4 h-4">
      
      <span className="absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75 animate-ping"></span>
      
      <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500" />
    </div>
  );
};

const MouseTrail = () => {
  const trailRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [useSecondTrail, setUseSecondTrail] = useState(false);


  const imgArray=[
    "https://images.unsplash.com/photo-1487015307662-6ce6210680f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
  ]

  useEffect(() => {
    const moveTrail = (e: MouseEvent) => {
      gsap.to(trailRef.current, {
        x: e.clientX - 12, 
        y: e.clientY - 12,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleMouseEnterGrid = () => setUseSecondTrail(true);
    const handleMouseLeaveGrid = () => setUseSecondTrail(false);

    const gridItems = containerRef.current?.querySelectorAll(".grid-item");
    gridItems?.forEach(item => {
      item.addEventListener("mouseenter", handleMouseEnterGrid);
      item.addEventListener("mouseleave", handleMouseLeaveGrid);
    });

    window.addEventListener("mousemove", moveTrail);

    return () => {
      window.removeEventListener("mousemove", moveTrail);
      gridItems?.forEach(item => {
        item.removeEventListener("mouseenter", handleMouseEnterGrid);
        item.removeEventListener("mouseleave", handleMouseLeaveGrid);
      });
    };
  }, []);

  return (
    <div className="relative w-[100dvw] min-h-[100dvh] overflow-hidden">
      <div
        ref={trailRef}
        className="fixed top-8 left-0 z-50 pointer-events-none"
      >
        {useSecondTrail ? <SecondTrail /> : <NormalTrail />}
      </div>

      <div
        ref={containerRef}
        className="flex flex-col w-[100dvw] px-32 justify-center py-32"
      >
        <div className="flex items-center gap-3">
          <PulsatingDot/>
          <h1 className="text-3xl font-medium my-16">Check Out Our Furniture</h1>
        </div>

        <div className="w-full items-end flex">
          <div className="grid grid-cols-4 gap-4">
            {imgArray.map((i, idx) => (
              <div
                key={idx}
                className="grid-item bg-gray-200 h-[400px] w-[300px] cursor-pointer"
              >
                
                <img src={i} alt="Furniture" className="h-full w-full object-cover"/>
            </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default MouseTrail;
