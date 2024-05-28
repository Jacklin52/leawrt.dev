

import Footer from './panel/_footer.jsx'
import Header from './panel/_header.jsx'
import ReactDOM from 'react-dom';
import styles from './MyComponent.module.css';

import { Dialog, Menu, Listbox, Switch, Popover, Tab, Transition, Disclosure } from '@headlessui/react'
import React, { useEffect,useState } from "react";
export default function Home() {
  return (
    
    <div>
<Header />



          <div className='h-[100vh] w-full flex ' style={{ background: 'linear-gradient(to bottom, #b87af6, #f5f5f5)' }}>
          <div className=' lg:px-[3rem] md:px-[4rem] sm:px-[3rem] px-[2rem]'>
          <p className='text-4xl font-semibold lg:text-start ' style={{ marginTop: '200px' }}><b>Projects</b></p>
         <p>⚙️ Projects I've been to, developed and am developing.</p>
          </div>
          
          <div className={styles.card}>
           <div style={{ marginRight: '20px' }}>
           <div className={styles.bulurCard}>
           <img
             src="https://cdn.discordapp.com/attachments/924396992891871232/1193933376390967356/image.png?ex=65ae841b&is=659c0f1b&hm=9c8e08c2a839295ac21d9e515da1fe3355268b6c6ebe853de5114b161bf5be9f&"
             alt="Blurred Image"
             style={{ width: '100%', height: '100%', filter: 'blur(2px)' }} // Blur efekti uygula
           />
           <img
              className={styles.circleImage} src="https://cdn.discordapp.com/avatars/923938180263182356/b65c1587c9ec57e48fa56dcd3e0b945e.webp?size=2048" // Net resmin URL'sini değiştirin
             alt="Overlay Image"
           
           />
         </div>
           </div>
           <p className={styles.infoContainer}>Stal Bot</p>
           <p className={styles.description}>Stal BOT, sunucunuzu ücretsiz ve hızlı bir<br></br> şekilde yönetebilmenizi sağlayan sürekli <br></br>yenilenen özellikleriyle hizmetinizde!</p>
           <p className={styles.link}> <i class="fa-solid fa-link"></i>  <a target='_blank'href='https://www.stalbot.me/'> https://www.stalbot.me/</a></p>
           <img
        src="https://cdn.discordapp.com/attachments/967867657200205865/1193662290935959552/5968292.png?ex=65ad87a3&is=659b12a3&hm=40ab384cc0cdea56b6f3348334782e2b3c2406dd5a3ea3c10385c3a50d6540bc&"
        alt="Icon"
        className={styles.iconImage}
      /></div>
    
           </div>
        
     
  
        <Footer />
    </div>

  )

}
