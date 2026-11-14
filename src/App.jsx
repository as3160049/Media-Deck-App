import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'


const App = () => {

  
  return (
    <div className='sm:w-full min-h-screen md:w-full text-white bg-gray-900'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>
      
    </div>
  )
}

export default App
