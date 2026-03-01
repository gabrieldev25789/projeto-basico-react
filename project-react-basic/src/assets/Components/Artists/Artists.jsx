import React from 'react'
import kanye  from "../imgs/kanyewest.jpg"
import mj from "../imgs/mj.webp"
import drake from "../imgs/drake.jpg"

import "./Artists.css"

function Artists() {
  return (
    <>
    <div id="list-artists">

    <div id='kanye' className='artist'>
        <h2>KANYE WEST</h2>
        <img src={kanye} alt="Kanye West" />  
    </div>    

    <div id='kanye' className='artist'>
        <h2>Michael Jackson</h2>
        <img src={mj} alt="Michael Jackson" /> 
 
    </div> 

    <div id='kanye' className='artist'>
        <h2>Drake</h2>
        <img src={drake} alt="Drake" />  
    </div>  
</div>
    </>

  )
}

export default Artists