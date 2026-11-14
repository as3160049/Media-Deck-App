import React from 'react'
import { useDispatch } from 'react-redux';
import { removeCollection, removeToast } from '../redux/features/collectionSlice';


const CollectionCard = ({item}) => {
    
    const dispatch = useDispatch()

    const removeFromCollection = (item) => {
        dispatch(removeCollection(item))
        dispatch(removeToast())
    }
  
    return (
    <div>
      <div className="sm:w-64 md:w-[16vw] ml-3 md:h-80 relative rounded-xl overflow-hidden bg-white">
      <a target="_blank" className="h-full" href={item.url}>
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
          ></video>
        ) : (
          ""
        )}
        {item.type == "gif" ? (
          <iframe
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
      </a>
      <div id="bottom" className="flex justify-between items-center w-full gap-2 px-2 py-4 absolute bottom-0 text-white">
        <h2 className="font-semibold text-lg h-14 overflow-hidden sm:text-sm capitalize ">{item.title}</h2>
        <button onClick={()=>{
            removeFromCollection(item)
        }} className="bg-indigo-500 text-white rounded px-3 py-1 cursor-pointer font-medium active:scale-95">Remove</button>
        </div>
    </div>
    </div>
  )
}

export default CollectionCard
