// Header.jsx
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" />
import ContactForm from './ContactForm';
import { useState, useEffect } from 'react';
/// Veri Çekme işlemi (Lanyard)
import { fetchDiscordVerileri } from '../api/util/discordAPi.jsx';

const Header = () => {
  const [lanyardData, setLanyardData] = useState(null);
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  
    const handleContactButtonClick = () => {
      setIsContactFormOpen(true);
    };
  
    const handleCloseContactForm = () => {
      setIsContactFormOpen(false);
    };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDiscordVerileri();
        setLanyardData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  const isDnd = lanyardData && lanyardData.data.discord_status === 'dnd';
  const isIdle = lanyardData && lanyardData.data.discord_status === 'idle';
  const isOffline = lanyardData && lanyardData.data.discord_status === 'offline';
  const isOnline = lanyardData && lanyardData.data.discord_status === 'online';
  const isUsername = lanyardData && lanyardData.data.discord_user.username === 'memte.';
  return (
    <div>
    {lanyardData ? (
      <div style={{ position: 'relative' }}>
        <div>
          <nav className='bg-opacity-50 z-40 fixed text-black flex justify-between items-center xl:px-[12.5rem] lg:px-[12.5rem] md:px-[2rem] sm:px-[2rem] px-[2rem] h-[4rem] w-full' style={{ position: 'fixed', top: 0, left: 0, right: 0, backdropFilter: 'blur(10px)', borderBottomLeftRadius: '50% 20%', borderBottomRightRadius: '50% 20%', zIndex: 80 }}>
            <a>
              <div class="ornek">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                   src={`https://cdn.discordapp.com/avatars/${lanyardData.data.discord_user.id}/${lanyardData.data.discord_user.avatar}.webp`}      
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '60%',
                      border: 'none',
                      float: 'left',
                      marginLeft: '0px',
                    }}
                  />
                  <div style={{ marginLeft: '14px' }}>
                    <p className='text-black  dark:text-zinc-700 text-xl font-semibold' style={{ color: '#3c3f41', fontWeight: '' , margin: 0, fontSize: '15px' }}>{lanyardData.data.discord_user.global_name}</p>
                  </div>
                </div>
              </div>
          
     
              {isDnd && (
                   // status
            <div className="status-indicator" style={{ position: 'relative' }}>
            <img
              src="https://cdn3.emoji.gg/emojis/7907_DND.png"
              alt="Dnd Emoji"
              style={{
                position: 'absolute',
                bottom: '8px',
                right: '54%',
                transform: 'translateX(-50%)',
                width: '10px',
                height: '10px',
                borderRadius: '52%',
                zIndex: '1',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '7px',
                right: '52%',
                transform: 'translateX(-50%)',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#f5f5f5',
                zIndex: '0',
              }}
            />
          </div>
        )}

          {isIdle && (
            <div className="status-indicator" style={{ position: 'relative' }}>
              <img
                src="https://cdn3.emoji.gg/emojis/3929_idle.png"
                alt="Idle Emoji"
                style={{
                  position: 'absolute',
                  bottom: '8px',
                  right: '54%',
                  transform: 'translateX(-50%)',
                  width: '10px',
                  height: '10px',
                  borderRadius: '52%',
  
                  zIndex: '1', 
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '7px',
                  right: '52%',
                  transform: 'translateX(-50%)',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#f5f5f5',
                  zIndex: '0',
                }}
              />
            </div>
          )}

          {isOffline && (
            <div className="status-indicator" style={{ position: 'relative' }}>
              <img
                src="https://cdn3.emoji.gg/emojis/6610-invisible-offline-blank.png"
                alt="Offline Emoji"
                style={{
                  position: 'absolute',
                  bottom: '8px',
                  right: '54%',
                  transform: 'translateX(-50%)',
                  width: '10px',
                  height: '10px',
                  borderRadius: '52%',
  
                  zIndex: '1', 
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '7px',
                  right: '52%',
                  transform: 'translateX(-50%)',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#f5f5f5',
                  zIndex: '0',
                }}
              />
            </div>
          )}
 
          {isOnline && (
            <div className="status-indicator" style={{ position: 'relative' }}>
              <img
                src="https://cdn3.emoji.gg/emojis/1514-online-blank.png"
                alt="Online Emoji"
                style={{
                  position: 'absolute',
                  bottom: '8px',
                  right: '54%',
                  transform: 'translateX(-50%)',
                  width: '10px',
                  height: '10px',
                  borderRadius: '52%',
  
                  zIndex: '1', 
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '7px',
                  right: '52%',
                  transform: 'translateX(-50%)',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#f5f5f5',
                  zIndex: '0',
                }}
              />
            </div>
          )}
          </a>
          
       
        <div className=''>

          <ul className='text-sm hidden lg:flex md:flex sm:flex  gap-5'>
            <li className='group'><a href='/' className=''>Home</a>
            <div className='h-[0.3rem] rounded-full w-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:w-8 bg-blue-200 bg-gradient-to-r from-blue-800 to-blue-500 absolute'></div>
            </li>
            <li className='group'><a href='/project' className=''>Projects</a>
            <div className='h-[0.3rem] rounded-full w-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:w-8 bg-blue-200 bg-gradient-to-r from-blue-800 to-blue-500 absolute'></div>
            </li>    
          </ul>
        </div>
        
        <div>
  <a href="#" className='bg-black hover:bg-blue-500 bg-gradient-to-r from-blue-800 to-blue-500 text-white px-10 hover:shadow-xl hover:rounded-sm2 shadow-black py-2 rounded text-xs' onClick={handleContactButtonClick}>Contact</a>
</div>

      </nav>
      </div>
      {isContactFormOpen && <ContactForm onClose={handleCloseContactForm} />}
        </div>
     
      ) : (
        <p></p>
      )}
      <style>{`
        @keyframes wave {
          0%, 100% {
            transform: scale(1);
          }
          60% {
            transform: scale(1.5);
          }
        }
      `}</style>
    </div>
    
  );
};

export default Header;

