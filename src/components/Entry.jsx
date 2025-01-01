import React from 'react'
import { GiPositionMarker } from "react-icons/gi";

const Entry = () => {
  return (
    <article className='journal-entry'>
      <div className='cont-image'>
      <img className='image' src="https://media.gettyimages.com/id/822273028/photo/fuji-mountain-in-autumn.jpg?s=612x612&w=0&k=20&c=pyaNf82uSbgKbR0nJGZBLzUeMrwfAsPXjbQd1Hc7jRs=" alt="Mounts" />
      </div>
      <div className='cont-text'>
        <GiPositionMarker   className='marker'/>
        <span className='country'>Japan</span>
        <a href="https://en.wikipedia.org/wiki/Mount_Fuji">View On Google Maps</a>
        <h2 className='title'>Mount Fuji</h2>
        <p className='dates'>12 Jan 2021 - 24 Jan 2021</p>
        <p className='text'>Mount Fuji is an active stratovolcano in Japan that last erupted in 1707–1708. The mountain stands about 100 kilometers southwest of Tokyo and is the most prominent peak in Japan, standing at 3,776.24 m (12,389 ft).</p>
      </div>
      
    </article>
  )
}

export default Entry
