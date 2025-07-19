import { useState } from "react"

const MovingDiv = () => {

  const [hoveredCity,setHoveredCity] = useState<string|null>(null)

  const citiesArray =[
    "Lagos",
    "Ottawa",
    "Beijing",
    "London"
  ]

  const citiesPictureArray =[
      "https://images.unsplash.com/photo-1719314313652-d9835e0c52c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fExhZ29zfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1607821367633-57b0c6a038ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T3R0YXdhfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1603120527222-33f28c2ce89e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QmVpamluZ3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9uZG9ufGVufDB8fDB8fHww"
  ]

  const hoveredIndex = hoveredCity ? citiesArray.indexOf(hoveredCity) : -1;

  return (
    <div className=" py-6 px-48 flex flex-col min-h-[100dvh]  justify-end ">
       <div className="w-[500px] relative  h-[350px] self-end rounded-md overflow-hidden ease-in-out  transition-all duration-600">
        {hoveredIndex >= 0 && (
          <img
            src={citiesPictureArray[hoveredIndex]}
            alt={hoveredCity || ""}
            className={` absolute top-0 rounded-md  w-[500px]  h-[350px] object-cover transition-all duration-900 ease-in-out 
              ${
                hoveredIndex 
                  ? "opacity-100 translate-y-0 z-10"
                  : "opacity-0 translate-y-10 z-0"
              }`}
          />
        )}
      </div>
      <p className="text-5xl font-medium my-8">Top Cities</p>
      <div className="flex flex-col h-full gap-6">
           {citiesArray.map((city, idx) => (
          <p
            key={idx}
            onMouseEnter={() => setHoveredCity(city)}
            onMouseLeave={() => setHoveredCity(null)}
            className={`text-4xl cursor-pointer transition-colors ease-in-out duration-500 ${
              hoveredCity
                ? hoveredCity === city
                  ? "text-black"
                  : "text-gray-500"
                : "text-black"
            }`}
          >
            {city}
          </p>
        ))}
      </div>
    

     

     
    </div>
  )
}

export default MovingDiv