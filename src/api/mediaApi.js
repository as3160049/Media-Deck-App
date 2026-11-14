import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PIXABAY_KEY = import.meta.env.VITE_PIXABAY_KEY
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY

export async function fetchPhotos(query, page=1, per_page=20) {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params:{query, page, per_page},
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
    })
    return res.data.results;
}

export async function fetchVideos(query, per_page=15) {
    const res = await axios.get(`https://pixabay.com/api/videos/?key=${PIXABAY_KEY}&q=${encodeURIComponent(query)}`, {
        params:{per_page}
    })
    return res.data.hits;
}

export async function fetchGif(query, limit=15) {
    const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params:{api_key:GIPHY_KEY, q:query, limit}
    })
    // console.log(res.data.data);
    
    return res.data.data;
}