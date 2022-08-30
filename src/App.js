import logo from './logo.svg';
import './App.css';
import { FaFacebookSquare } from 'react-icons/fa'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'
import OverviewComponent from './Components/OverviewComponent';
import CardComponent from './Components/CardComponent';

function App() {
  return (
    <div className="App md:container">
      <div className='py-9 flex justify-between'>
        <div className='header'>
          <h1 className='text-xl font-bold'>Social Media Dashboard</h1>
          <p className=' text-sm font-bold'>Total Followers: 23,004</p>
        </div>
        <div className=''>
          <input type="checkbox" id='DarkMode' />
          <label htmlFor='DarkMode'>Dark Mode</label>
        </div>
      </div>
      <div className='grid gap-4 md:grid-cols-4 grid-cols-1 grid-rows-4 md:grid-rows-1  h-2/4 mb-3'>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
      <span className='text-xl font-bold'>Overview - Today</span>
      <div className='grid gap-4 md:grid-cols-4 grid-cols-1 grid-rows-8 md:grid-rows-2 mt-3'>
      <OverviewComponent />
      <OverviewComponent />
      <OverviewComponent />
      <OverviewComponent />
      <OverviewComponent />
      <OverviewComponent />
      <OverviewComponent />
      <OverviewComponent />
      </div>
    </div>
  );
}

export default App;
