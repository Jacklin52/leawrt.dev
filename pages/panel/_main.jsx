import { useState, useEffect } from 'react';
import TextAnimation from './_centerText.jsx'; // TextAnimation bileşenini içe aktar
import Oynuyor from './_oynuyor.jsx'; // TextAnimation bileşenini içe aktar
import { fetchDiscordVerileri } from '../api/util/discordAPi.jsx';

const Main = () => {
  const [lanyardData, setLanyardData] = useState(null);

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

 // Aktivite bilgilerini al
 const activities = lanyardData?.data?.activities || [];

 // İlk aktivitenin "state" özelliğini al
 const firstActivityState = activities.length > 0 ? activities[0].state : null;

  const isDnd = lanyardData && lanyardData.data.discord_status === 'dnd';
  const isIdle = lanyardData && lanyardData.data.discord_status === 'idle';
  const isOffline = lanyardData && lanyardData.data.discord_status === 'offline';
  const isOnline = lanyardData && lanyardData.data.discord_status === 'online';
  const isUsername = lanyardData && lanyardData.data.discord_user.username === 'memte.';

  
  return (
    <div>

  
        
      {lanyardData ? (
        <div style={{ position: 'relative' }}>
          
       
          <p style={{ position: 'absolute', transform: 'translateX(-50%)', bottom:'20px', whiteSpace: 'nowrap', fontSize: '70px', fontWeight: 'bold', fontFamily: 'Pacifico, cursive' }}>
          𝐻𝑒𝓎! 𝐼 𝒶𝓂    <span style={{ color: '#2572be' }}>
          𝓁𝑒𝒶𝓌𝓉𝓎
        </span>
</p>


<p style={{ position: 'absolute', transform: 'translateX(-50%)', bottom:'-20px', whiteSpace: 'nowrap', fontSize: '18px', fontWeight: '650', fontFamily: 'Arial, sans-serif' }}>
<TextAnimation />
</p>
<Oynuyor />
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

export default Main;
