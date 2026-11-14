import React from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { ToastContainer } from 'react-toastify'
import { clearCollection } from '../redux/features/collectionSlice'

const CollectionPage = () => {
  
  const collection = useSelector(state => state.collection.items)

  const dispatch = useDispatch()

  const clearSavedCollection = () => {
    dispatch(clearCollection())
  }
  
  return (
    <div className='sm:w-full'>
      <Navbar />
      
      <ToastContainer />

      {collection.length > 0 ? <div className='flex px-4 py-6 justify-between mb-6'>
        <h2 className='text-xl font-medium'>Your Collection</h2>
        <button onClick={() => {
          clearSavedCollection()
        }} className='active:scale-95 transition cursor-pointer bg-red-600 px-5 py-2 text-base font-medium rounded'>Clear Collection</button>
      </div> : <div className='text-center p-5'>
        <h2 className='text-2xl font-semibold'>Your Collection is empty!</h2>
      </div> }
      <div className='flex flex-wrap gap-6 sm:w-full md:w-full overflow-auto px-10 py-5'>
        {collection.map((item, idx) => {
          return <div key={idx}>
            <CollectionCard item={item} />
          </div>
        })}
      </div>
    </div>
  )
}

export default CollectionPage
