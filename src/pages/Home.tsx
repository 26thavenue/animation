import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className='h-[100dvh] w-[100dvw] flex flex-col justify-center px-24 bg-[#fffdfd]'>
        <h1 className='text-7xl font-bold max-w-4xl '>COLLECTION OF ANIMATION RESOURCES </h1>
        <h6 className='font-italic text-xl mt-6'>by Oluwatomiwa Oni</h6>

        <button className="w-fit px-6 py-2 bg-amber-200 text-lg rounded-full my-12">
            Scroll Down
        </button>

        <div className="grid grid-cols-4">
            <Link to="/day1">
                <div className="w-[300px] h-[200px] bg-amber-100 flex items-center justify-center px-3">
                    <h3 className="max-w-xs">Awwards Floating Downward Navbar</h3>
                </div>
            </Link>
            
            <Link to="/day2">
                <div className="w-[300px] h-[200px] bg-amber-100 flex items-center justify-center px-3">
                    <h3 className="max-w-xs">Mouse Trail</h3>
                </div>
            </Link>

            <Link to="/day3">
                <div className="w-[300px] h-[200px] bg-amber-100 flex items-center justify-center px-3">
                    <h3 className="max-w-xs">Glow Button</h3>
                </div>
            </Link>

            <Link to="/day4">
                <div className="w-[300px] h-[200px] bg-amber-100 flex items-center justify-center px-3">
                    <h3 className="max-w-xs">Parallax</h3>
                </div>
            </Link>
            
        </div>
    </div>
  )
}

export default Home