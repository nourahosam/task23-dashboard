import logo from './logo.svg';
import './App.css';
import { FaFacebookSquare, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'
import OverviewComponent from './Components/OverviewComponent';
import CardComponent from './Components/CardComponent';
import { useEffect } from 'react';
import UseTheme from './Hooks/useTheme';




function App() {

  const { themeBG, themeCardBG, themeText, handleChange } = UseTheme();

  return (
    <div className={`App md:container ${themeBG}`}>
      <div className='py-9 flex justify-between'>
        <div className='header'>
          <h1 className={`text-xl font-bold ${themeText}`}>Social Media Dashboard</h1>
          <p className={`text-sm font-bold ${themeText}`}>Total Followers: 23,004</p>
        </div>

        <div className=''>
          <input type="checkbox" id='DarkMode' onChange={(e) => handleChange(e)} />
          <label htmlFor='DarkMode'></label>
        </div>

      </div>
      <div className='grid gap-4 md:grid-cols-4 grid-cols-1 grid-rows-4 md:grid-rows-1  h-2/4 mb-3'>
        <CardComponent icons={<FaFacebookSquare style={{ color: '#3b5998' }} />} colorProp='bg-bg-facebook' before='before:bg-bg-facebook' themeBG={themeBG} themeCardBG={themeCardBG} themeText={themeText} />
        <CardComponent icons={<FaTwitter style={{ color: '#00acee' }} />} colorProp='bg-bg-twitter' before='before:bg-bg-twitter' themeBG={themeBG} themeCardBG={themeCardBG} themeText={themeText} />
        <CardComponent icons={<AiFillInstagram style={{ color: '#c13584' }} />} colorProp='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' font='bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600' before='before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' themeBG={themeBG} themeCardBG={themeCardBG} themeText={themeText} />
        <CardComponent icons={<FaYoutube style={{ color: '#FF0000' }} />} colorProp='bg-bg-youtube' before='before:bg-bg-youtube' font='text-youtube' themeBG={themeBG} themeCardBG={themeCardBG} themeText={themeText} />
      </div>
      <span className={`text-xl font-bold ${themeText}`}>Overview - Today</span>
      <div className='grid gap-4 md:grid-cols-4 grid-cols-1 grid-rows-8 md:grid-rows-2 mt-3'>
        <OverviewComponent icons={<FaFacebookSquare style={{ color: '#3b5998' }} />} themeBG={themeBG} themeCardBG={themeCardBG} themeText={themeText} />
        <OverviewComponent icons={<FaFacebookSquare style={{ color: '#3b5998' }} />} themeBG={themeBG} themeCardBG={themeCardBG} themeText={themeText} />
        <OverviewComponent icons={<FaTwitter style={{ color: '#00acee' }} />} themeBG={themeBG} themeCardBG={themeCardBG} themeText={themeText} />
        <OverviewComponent icons={<FaTwitter style={{ color: '#00acee' }} />} themeBG={themeBG} themeCardBG={themeCardBG} themeText={themeText} />
        <OverviewComponent icons={<AiFillInstagram style={{ color: '#c13584' }} />} themeBG={themeBG} themeCardBG={themeCardBG} themeText={themeText} />
        <OverviewComponent icons={<AiFillInstagram style={{ color: '#c13584' }} />} themeBG={themeBG} themeCardBG={themeCardBG} themeText={themeText} />
        <OverviewComponent icons={<FaYoutube style={{ color: '#FF0000' }} />} themeBG={themeBG} themeCardBG={themeCardBG} themeText={themeText} />
        <OverviewComponent icons={<FaYoutube style={{ color: '#FF0000' }} />} themeBG={themeBG} themeCardBG={themeCardBG} themeText={themeText} />
      </div>
    </div>
  );
}

export default App;
