import { useEffect, useState } from "react"
import axios from "../utils/Axios"


const Gallery = () => {
     const [imgdata, setimgdata] = useState([])
     


    const getImages = async()=> {
        try{
            const response = await axios.get("/");
            setimgdata(response.data);
        } catch (error) {
            console.error("Failed to fetch images:", error);
        }
        
    }


    const imageHandler = ()=>{
        getImages()
        console.log("something is happening")
    }

    useEffect(() => {
        getImages()
    }, [])
    

  return (
      <div>
          <button
              onClick={imageHandler}
              className="px-2 py-4 bg-blue-500 text-white text-xl m-4"
          >
              Fetch Images
          </button>
          <div className="flex flex-wrap gap-16 m-3">
              {imgdata.map((val) =>{
                    return (
                        <img
                            className="h-20 w-30"
                            key={val.id}
                            src={val.download_url}
                        />
                    );
              } )}
          </div>
      </div>
  );
}

export default Gallery
