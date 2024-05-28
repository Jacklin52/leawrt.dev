
import Repos from '../components/Index/repos.jsx'
import Link from '../components/Index/links.jsx'
import Tech from '../components/Index/tech.jsx'
import Footer from './panel/_footer.jsx'
import Header from './panel/_header.jsx'
import Disc from './panel/_main.jsx'
import ReactDOM from 'react-dom';
import { Dialog, Menu, Listbox, Switch, Popover, Tab, Transition, Disclosure } from '@headlessui/react'
import React, { useEffect,useState } from "react";
export default function Home() {
  return (
    
    <div>
<Header />
          <div className='h-[100vh] w-full flex items-center justify-center' style={{ background: 'linear-gradient(to bottom, #96bfe9, #f5f5f5)' }}>
  <Disc />
</div>


          <div className=' lg:px-[3rem] md:px-[4rem] sm:px-[3rem] px-[2rem]'>
          <div className='pt-64'>
          <div>  
       
          <div className="flex items-center space-x-3">
          <div className="select-none w-10 h-10 flex items-center justify-center">
          <i className="text-transparent bg-clip-text bg-gradient-to-br from-red-700 to-blue-500 fas fa-bookmark text-4xl" />
          </div> 
          <h1 className='text-4xl font-extrabold lg:text-start md:text-start sm:text-start text-center'><b>TECHNOLOGİES I USE</b></h1>
          </div>
          <div className='bg-gradient-to-r lg:block md:block sm:block hidden from-white to-blue-500 w-[80vh] rounded-xl h-4 -mt-4'></div>
          </div>
         <Tech />
          </div>
        
      

          <div className='pt-64' id='repo'>
          <div>
          <div className="flex items-center space-x-3">
          <div className="select-none w-10 h-10 flex items-center justify-center">
          <i className="text-transparent bg-clip-text bg-gradient-to-br from-red-700 to-blue-500 fab fa-github text-4xl" />
          </div> 
          <h1 className='text-4xl font-extrabold lg:text-start md:text-start sm:text-start text-center'><b>MY GİTHUB REPOSİTORİES</b></h1>
          </div>
          <div className='bg-gradient-to-r lg:block md:block sm:block hidden from-white to-blue-500 w-[95vh] rounded-xl h-4 -mt-4'></div>  
          <Repos />    
           </div>
          </div>

          <div className='pt-64' id='repo'>
          <div>
          <div className="flex items-center space-x-3">
          <div className="select-none w-10 h-10 flex items-center justify-center">
          <i className="text-transparent bg-clip-text bg-gradient-to-br from-red-700 to-blue-500 fa-solid fa-hashtag text-3xl" />
          </div> 
          <h1 className='text-4xl font-extrabold lg:text-start md:text-start sm:text-start text-center'><b>SOCİAL MEDİA</b></h1>
          </div>
          <div className='bg-gradient-to-r lg:block md:block sm:block hidden from-white to-blue-500 w-[65vh] rounded-xl h-4 -mt-4'></div>      
          <Link />  
           </div>
          </div>
        </div>
        <Footer />
    </div>

  )

}
