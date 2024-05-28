import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { fetchDiscordVerileri  } from '../api/util/discordAPi.jsx';

const UserActivityWithImage = () => {
  const [activity, setActivity] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDiscordVerileri();
        const activities = response.data.activities;
        const currentActivity = activities.find(activity => activity.timestamps && activity.name === 'Visual Studio Code');

        if (currentActivity) {
          setActivity(currentActivity);

          if (!startTime) {
            setStartTime(new Date(currentActivity.timestamps.start));
          }
        }
      } catch (error) {
        console.error('Error fetching user activity from Lanyard:', error);
      }
    };

    fetchData();
  }, [startTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (startTime) {
        const currentTime = new Date();
        const elapsedTimeInSeconds = Math.floor((currentTime - startTime) / 1000);
        setElapsedTime(elapsedTimeInSeconds);
      }
    }, 1000); // 1 saniyede bir güncelle
    return () => clearInterval(interval);
  }, [startTime]);

  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = elapsedTime % 60;

  return (
    <div style={{display: 'flex', alignItems: 'center',  height: '130px', width: '600px', border: '1px solid #aaa', padding: '16px', borderRadius: '8px', position: 'absolute', transform: 'translateX(-50%)', bottom:'-180px', whiteSpace: 'nowrap', fontSize: '15px' }}>
       <div style={{ fontSize: '14px', marginLeft: '10px', position: 'absolute', top: '8px', right: '8px', textAlign: 'right' }}>
          <p>@Leawty</p>
        </div>
      {activity ? (
        <>
          <img
           src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`}   alt="Activity Image"
            style={{
              maxWidth: '80px',
              height: 'auto',
              borderRadius: '20%',  
            }}
          />
          
           <div className="status-indicator" >
            <img
              src="https://cdn3.emoji.gg/emojis/2829_VSCode.png"
              alt="Dnd Emoji"
              style={{
                position: 'absolute',
                bottom: '23px',
                right: '81%',
                transform: 'translateX(-50%)',
                width: '25px',
                height: '25px',
                borderRadius: '52%',
                zIndex: '1', // Emoji üstte olsun
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '80%',
                transform: 'translateX(-50%)',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: '#f5f5f5',
                
                zIndex: '0', // Çember altta olsun
              }}
            />
          </div>
 
          <div style={{ fontSize:'14px', marginLeft: '10px' }}>
      
        
            <p><b>{activity.name}</b></p>
            <p>{activity.details}</p>
            <p>{activity.state}</p>
            <p>Geçen Süre: {hours} saat,   {minutes} dakika, {seconds} saniye</p>
          </div>
        </>
      ) : (    
        <p style={{ alignItems: 'center', marginLeft: '110px' }}>Currently not working in Visual Studio Code 💻</p>
        )}
    </div>
  );
};

export default UserActivityWithImage;
