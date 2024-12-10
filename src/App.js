import React from 'react';
import './App.css';
import User from './Task 3/Components/User.jsx';
import Messages from './Task 3/Components/Messages.jsx';
import Stats from './Task 3/Components/Stats.jsx';

function App() {
  
  const user1 = {
    name: "Bilal Azfar",
    email: "bilal.azfar@chaajao.com",
    role: "Junior BI Executive",
    profilePicture: <img style = {{height: '120px', width: '120px'}} src="My DP 1-2.jpeg" alt="Image not found."/>,
  };

  const stats1 = {
    totalUsers: 1000,
    activeUsers: 450,
    newSignups: 180,
    activePercentage: (450/1000)*100
  };

  const messages1 = {
    message1: "The number of active of users at any given time do not fall below 100.",
    message2: "All-time highest new signups in a day are 496.",
    message3: "Peak season is the month before exams."
  };

  return (
    <div className='flex-box'>
      <User user={user1} />
      <div className='flex-box2'>
        <Stats stats={stats1} />
        <Messages messages={messages1} />
      </div>
    </div>
  );
}

export default App;