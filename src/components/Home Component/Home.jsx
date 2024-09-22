import { useState,useEffect } from "react";
import hitRequest from "../../api/hitRequest";

const Home = () => {
    const [videos,setVideos] = useState([]);
    useEffect(() => {
        const fetchVideos = async () => {
            const res = await hitRequest('/videos/all-videos','GET');
            // const data = await res.json();
            setVideos(res.data);
        }
        fetchVideos();
    },[]);
    return ( 
        <div style={{display:"flex",gap:"10px"}}>
            {videos.map((video) =>(
                    <div key={video._id}>
                        {/* <img src={video.thumbnail} alt={video.title} /> */}
                        <video src={video.videoFile} controls height={300} width={370} />
                        <h2>{video.title}</h2>
                        <p>
                            {video.description}
                        </p>
                    </div>
            ))
            }
            {/* <h1>Home</h1> */}
        </div>
     );
}
 
export default Home;