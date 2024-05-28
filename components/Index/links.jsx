import swr from '../../lib/swr.jsx';
import Link from 'next/link';
import React from 'react';


export default function MyRepos() {

    
    return (
        <div className="w-full pb-16 pt-2 block px-5">
            <div className="max-w-screen-lg mx-auto w-full">
                <div className="flex items-center space-x-3">
                </div>
               <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
                   

                        
                 
                <div  className="bg-[#cfd4d6] hover:bg-[#bccacf] relative transition-all duration-200 flex flex-col rounded-lg py-4 px-5">                       
                                <>     
                              <a href="https://www.instagram.com/m3mte_" target="_blank">  
                              <i className={`fa-brands fa-instagram absolute top-4 right-5`} />
                              <h1 className="leading-none font-bold text-l">İnstagram</h1>
                              <div className="flex items-center space-x-2 mt-1">
                              </div>
                              </a>        
                                </>   
                        </div>
                        <div  className="bg-[#cfd4d6] hover:bg-[#bccacf] relative transition-all duration-200 flex flex-col rounded-lg py-4 px-5">                       
                                <>     
                              <a href="https://steamcommunity.com/id/m3mte/" target="_blank">  
                              <i className={`fa-brands fa-steam absolute top-4 right-5`} />
                              <h1 className="leading-none font-bold text-l">Steam</h1>
                              <div className="flex items-center space-x-2 mt-1">
                              </div>
                              </a>        
                                </>   
                        </div>
                        <div  className="bg-[#cfd4d6] hover:bg-[#bccacf] relative transition-all duration-200 flex flex-col rounded-lg py-4 px-5">                       
                                <>     
                              <a href="https://twitter.com/memte0" target="_blank">  
                              <i className={`fa-brands fa-twitter absolute top-4 right-5`} />
                              <h1 className="leading-none font-bold text-l">Twitter</h1>
                              <div className="flex items-center space-x-2 mt-1">
                              </div>
                              </a>        
                                </>   
                        </div>
                        <div  className="bg-[#cfd4d6] hover:bg-[#bccacf] relative transition-all duration-200 flex flex-col rounded-lg py-4 px-5">                       
                                <>     
                              <a href="https://github.com/memte" target="_blank">  
                              <i className={`fa-brands fa-github absolute top-4 right-5`} />
                              <h1 className="leading-none font-bold text-l">Github</h1>
                              <div className="flex items-center space-x-2 mt-1">
                              </div>
                              </a>        
                                </>   
                        </div>
                        <div  className="bg-[#cfd4d6] hover:bg-[#bccacf] relative transition-all duration-200 flex flex-col rounded-lg py-4 px-5">                       
                                <>     
                              <a href="https://discord.com/users/690634258691391589" target="_blank">  
                              <i className={`fa-brands fa-discord absolute top-4 right-5`} />
                              <h1 className="leading-none font-bold text-l">Discord</h1>
                              <div className="flex items-center space-x-2 mt-1">
                              </div>
                              </a>        
                                </>   
                        </div>
                </div>
               
                   
                </div>
            </div>
       
    );
}
