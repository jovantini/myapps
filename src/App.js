import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Dialogs from './Components/Dialogs/Dialogs.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';




const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wraper-content'>
          <Routes>
            <Route path="Dialogs" element={<Dialogs dialogs={props.state.dialogs} message={props.state.message} />} />
            <Route path="Profile" element={<Profile post={props.state.posts} />} />
            <Route path="Music" element={<Music />} />
            <Route path="News" element={<News />} />
            <Route path='Settings' element={<Settings />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
