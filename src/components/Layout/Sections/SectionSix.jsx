import React, { useEffect, useState } from 'react'
import { getDataFromYtbAPI } from '../../../utils/apiYoutube'
import ReactPlayer from "react-player";
import Icon from '../../Icon/Icon';
import { faYoutube } from "@fortawesome/fontawesome-free-brands";
import TransitonGroup from "react-transition-group/TransitionGroup";
import Fade from "react-reveal/Fade";

const SectionSix = () => {

    const [embedVideos, setEmbedVideos] = useState([])
    
    
    useEffect(() => {
        const fetchVideosData =  async () => {
            
            try {     
                const data = await getDataFromYtbAPI();
                setEmbedVideos(data)
       
                } catch (error) {
                    console.log(error)
                }
                
            } 
            
           fetchVideosData()
        }, [])
        

        return (
        <div className="sec_6">
            <div className="ytb_tl">     
                <h3 className="ytb_tl_subtitle">
                    <Icon icon={faYoutube} cls="ytb_icon"/> My Most Popular Videos
                </h3>
            </div>
            <TransitonGroup>
                <div className="sec_6_grid">
                    { embedVideos && embedVideos.map( (data, index) => {
                        const { videoId } = data.id
                        return (
                            <Fade bottom>
                                <ReactPlayer 
                                key={index}
                                width="380px"
                                height="250px"
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                />
                            </Fade>
                        )
                    }) }
                </div>
            </TransitonGroup>
        </div>
    )
}

export default SectionSix
