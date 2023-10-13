import './App.css'
import food1 from './food1.jpg'
import food2 from './food2.jpg'
import food3 from './food3.jpg'
import food4 from './food4.jpg'
import food5 from './food5.jpg'
import food6 from './food6.jpg'
import food7 from './food7.jpg'
import food8 from './food8.jpg'
import food9 from './food9.jpg'
import food10 from './food10.jpg'
import food11 from './food11.jpg'
import { BiLogoInstagram } from 'react-icons/bi'
import { BiLogoTiktok } from 'react-icons/bi'
import { BiLogoTwitter } from 'react-icons/bi'
import { AiOutlineCopyrightCircle } from "react-icons/ai";
function App() {
  return (
    <>
    <div className='text-4xl text-center'>
    <div className='relative' >{/*landing page div:BigJEats,nav,login/signup,recipe for ninjas*/}
    <p>
      <img src={food6} alt="food1" className='absolute object-cover w-full h-96 ' />
    </p>
      <div className=''>{/*div containing 'BigJEats' and nav bar */}
        <div>
          <h1 className='absolute pt-4'>
            <a href="/" className='ml-8 text-white hover:text-red-700 ' >BigJEats</a> {/*logo.png */}
          </h1>
        </div>
            <nav className='flex justify-end pt-4 text-red-700'>
            <a href="#">
              <p className='px-8 transition duration-300 ease-linear transform hover:scale-105 hover:border hover:rounded-full hover:shadow-xl hover:border-red-700' >Home</p>
            </a>
            <a href="#">
              <p className='px-8 transition duration-300 ease-linear transform hover:scale-105 hover:border hover:rounded-full hover:shadow-xl hover:border-red-700' >About Us</p>
            </a>
            <a href="#">
              <p className='px-8 transition duration-300 ease-linear transform hover:scale-105 hover:border hover:rounded-full hover:shadow-xl hover:border-red-700' >Contact Us</p>
            </a>
        </nav>
        </div>
      <div className='flex p-4 pt-36 justify-evenly'>
        <a href="#" className='p-2 px-12 text-white transition duration-300 ease-in transform scale-90 bg-red-700 border rounded-full shadow-xl hover: hover:scale-100'>Log in</a>
        <a href="#" className='p-2 px-12 text-black transition duration-300 ease-in transform scale-90 bg-white border-2 rounded-full shadow-xl hover:border-red-700 hover:scale-100'>Sign up</a>
      </div>
    </div>
    <div className='pt-40 pb-24 mb-0'>
        <h2 className='font-semibold text-red-700 transform scale-105 '>Special Today:</h2>{/*down arrow icon*/}
        <div className='grid sm:grid-cols-4' > {/*image div */}  
        <div className='px-2'>
          <div className='relative overflow-hidden transform scale-95 bg-gray-100 shadow-xl rounded-xl hover:shadow-2xl'  >{/*card 2*/} 
            <p className='overflow-hidden rounded-xl'><img src={food3} alt="food3" className='object-cover w-full h-32 sm:h-80'/></p>
            <div>
              <p className='p-2'><span className='font-semibold'>5 Bean Chili Stew Recipe</span> by <span className='text-red-700'> BigJ </span> </p>
            </div>
          </div>
        </div>
        <div className='px-2'>
          <div className='relative overflow-hidden transform scale-95 bg-gray-100 shadow-xl rounded-xl hover:shadow-2xl'  >{/*card 2*/} 
            <p className='overflow-hidden rounded-xl'><img src={food9} alt="food9" className='object-cover w-full h-32 sm:h-80'/></p>
            <div>
              <p className='p-2'><span className='font-semibold'>5 Bean Chili Stew Recipe</span> by <span className='text-red-700'> BigJ </span> </p>
            </div>
          </div>
        </div>
        <div className='px-2'>
          <div className='relative overflow-hidden transition scale-95 bg-gray-100 shadow-xl rounded-xl hover:shadow-2xl'  >{/*card 2*/} 
            <p className='overflow-hidden rounded-xl'><img src={food10} alt="food10" className='object-cover w-full h-32 sm:h-80'/></p>
            <div>
              <p className='p-2'><span className='font-semibold'>5 Bean Chili Stew Recipe</span> by <span className='text-red-700'> BigJ </span> </p>
            </div>
          </div>
        </div>

        <div className='px-2'>
          <div className='relative overflow-hidden transform scale-95 bg-gray-100 shadow-xl rounded-xl hover:shadow-2xl'  >{/*card 2*/} 
            <p className='overflow-hidden rounded-xl'><img src={food11} alt="food11" className='object-cover w-full h-32 sm:h-80'/></p>
            <div>
              <p className='p-2'><span className='font-semibold'>5 Bean Chili Stew Recipe</span> by <span className='text-red-700'> BigJ </span> </p>
            </div>
          </div>
        </div>
          </div>
      </div>
      <main className=''>{/*body div:latest recipies,most popular dishes,load more dishes*/}
      <div className=''>
        <h4 className='p-4 mb-4 font-semibold'>Latest Recipes</h4>
      <div className='grid sm:grid-cols-3'>{/*grid,3 columns */}
        <div className='px-2'>
          <div className='relative overflow-hidden transition duration-300 ease-in transform scale-95 bg-gray-100 shadow-xl rounded-xl hover:shadow-2xl hover:scale-110'  >{/*card 1*/} 
            <p className='overflow-hidden rounded-xl'><img src={food4} alt="food4" className='object-cover w-full h-32 sm:h-48'/></p>
            <div>
              <p className='p-2'><span className='font-semibold'>5 Bean Chili Stew Recipe</span> by <span className='text-red-700'> BigJ </span> </p>
            </div>
            <div className='absolute top-0 p-2 mt-2 ml-2 text-sm text-white uppercase bg-gray-400 rounded-full cursor-pointer text-md'><p>25 mins</p></div>{/*badge 1*/}
          </div>
        </div>
        <div className='px-2'>
          <div className='relative overflow-hidden transition duration-300 ease-in transform scale-95 bg-gray-100 shadow-xl rounded-xl hover:shadow-2xl hover:scale-110'  >{/*card 2*/} 
            <p className='overflow-hidden rounded-xl'><img src={food1} alt="food1" className='object-cover w-full h-32 sm:h-48'/></p>
            <div>
              <p className='p-2'><span className='font-semibold'>5 Bean Chili Stew Recipe</span> by <span className='text-red-700'> BigJ </span> </p>
            </div>
            <div className='absolute top-0 p-2 mt-2 ml-2 text-sm text-white uppercase bg-gray-400 rounded-full cursor-pointer text-md'><p>25 mins</p></div>{/*badge 2*/}
          </div>
        </div>
        <div className='px-2'>
          <div className='relative overflow-hidden transition duration-300 ease-in transform scale-95 bg-gray-100 shadow-xl rounded-xl hover:shadow-2xl hover:scale-110'  >{/*card 3*/} 
            <p className='overflow-hidden rounded-xl'><img src={food7} alt="food7" className='object-cover w-full h-32 sm:h-48'/></p>
            <div>
              <p className='p-2'><span className='font-semibold'>5 Bean Chili Stew Recipe</span> by <span className='text-red-700'> BigJ </span> </p>
            </div>
            <div className='absolute top-0 p-2 mt-2 ml-2 text-sm text-white uppercase bg-gray-400 rounded-full cursor-pointer text-md'><p>25 mins</p></div>{/*badge 3*/}
          </div>
        </div>
      </div>
        <h4 className='p-4 m-4 font-semibold '>Most Popular Dishes</h4>
        <div>
        <div className='grid sm:grid-cols-3'>{/*grid,3 columns */}
        <div className='px-2'>
          <div className='relative overflow-hidden transition duration-300 ease-in transform scale-95 bg-gray-100 shadow-xl rounded-xl hover:shadow-2xl hover:scale-110'  >{/*card 1*/} 
            <p className='overflow-hidden rounded-xl'><img src={food2} alt="food2" className='object-cover w-full h-32 sm:h-48'/></p>
            <div>
              <p className='p-2'><span className='font-semibold'>5 Bean Chili Stew Recipe</span> by <span className='text-red-700'> BigJ </span> </p>
            </div>
            <div className='absolute top-0 p-2 mt-2 ml-2 text-sm text-white uppercase bg-gray-400 rounded-full cursor-pointer text-md'><p>25 mins</p></div>{/*badge 1*/}
          </div>
        </div>
        <div className='px-2'>
          <div className='relative overflow-hidden transition duration-300 ease-in transform scale-95 bg-gray-100 shadow-xl rounded-xl hover:shadow-2xl hover:scale-110'  >{/*card 2*/} 
            <p className='overflow-hidden rounded-xl'><img src={food5} alt="food5" className='object-cover w-full h-32 sm:h-48'/></p>
            <div>
              <p className='p-2'><span className='font-semibold'>5 Bean Chili Stew Recipe</span> by <span className='text-red-700'> BigJ </span> </p>
            </div>
            <div className='absolute top-0 p-2 mt-2 ml-2 text-sm text-white uppercase bg-gray-400 rounded-full cursor-pointer text-md'><p>25 mins</p></div>{/*badge 2*/}
          </div>
        </div>
        <div className='px-2'>
          <div className='relative overflow-hidden transition duration-300 ease-in transform scale-95 bg-gray-100 shadow-xl rounded-xl hover:shadow-2xl hover:scale-110'  >{/*card 3*/} 
            <p className='overflow-hidden rounded-xl'><img src={food8} alt="food8" className='object-cover w-full h-32 sm:h-48'/></p>
            <div>
              <p className='p-2'><span className='font-semibold'>5 Bean Chili Stew Recipe</span> by <span className='text-red-700'> BigJ </span> </p>
            </div>
            <div className='absolute top-0 p-2 mt-2 ml-2 text-sm text-white uppercase bg-gray-400 rounded-full cursor-pointer text-md'><p>25 mins</p></div>{/*badge 3*/}
          </div>
        </div>
      </div>
{/* cards go here */}
        </div>
      </div>
      <div className='mt-8 transform scale-90 hover:scale-100'>
        <a href='#' className='p-2 px-12 text-black transition duration-300 ease-in bg-white border rounded-full shadow-xl hover:bg-red-700 hover:text-white'>Load more Dishes?</a>
      </div>    
    </main>
      <div className='pt-2 pb-12 mt-24 bg-red-700 '>{/*footer with social media icons*/}
        <p className='mt-4 mb-4 text-white transform scale-95'>Social media</p>
          <div className='flex justify-center text-white ' >
              <p className='px-2 transition duration-300 ease-in scale-90 hover:scale-110'><BiLogoInstagram/></p>
              <p className='px-2 transition duration-300 ease-in scale-90 hover:scale-110'><BiLogoTiktok/></p>
              <p className='px-2 transition duration-300 ease-in scale-90 hover:scale-110'><BiLogoTwitter/></p>
          </div>  
          <div className='flex justify-center'>
            <AiOutlineCopyrightCircle className='mt-3 text-sm text-white capitalize text'/>
            <p className='mt-2 text-sm text-white text '> developed by John Muriithi</p>
          </div>      
        </div>
      </div>
    </>
  )
}
export default App
