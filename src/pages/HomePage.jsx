import React from 'react'
import { useSelector } from 'react-redux'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ToastContainer } from 'react-toastify';

const HomePage = () => {

    const { query} = useSelector((store) => store.search,);
  
    return (
    <div>
      <Navbar />  
      
      
      <SearchBar />
      
      {(query != '' ? 
      <div>
        <Tabs />
        <ResultGrid />
        <ToastContainer />
      </div> : '')}
    </div>
  )
}

export default HomePage
