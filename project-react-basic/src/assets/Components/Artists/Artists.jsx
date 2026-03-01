import React, { useState } from 'react'
// ARTISTAS 
import kanye  from "../imgs/kanyewest.jpg"
import mj from "../imgs/mj.webp"
import drake from "../imgs/drake.jpg"

// ALBUNS 
import graduation from "../imgs/graduation.jpg"
import bad from "../imgs/bad.jpg"
import views from "../imgs/views.jpg"

import "./Artists.css"

function Artists() {
   
    function handleImg(nomeArtista) {
  if (artistaSelecionado === nomeArtista) {
    setArtistaSelecionado(null) // fecha se clicar de novo
  } else {
    setArtistaSelecionado(nomeArtista) // abre
  }
}
     const [artistaSelecionado, setArtistaSelecionado] = useState(null)

  return (
    <>
    <div id="list-artists">

        <div id='kanye' className='artist'>
            <h2>KANYE WEST</h2>
            <img onClick={() => handleImg("kanye")} src={kanye} alt="Kanye West" />  
            {artistaSelecionado === "kanye" && 
            <img src={graduation} className='album' alt="graduation-album" />}
        </div>    

        <div id='kanye' className='artist'>
            <h2>Michael Jackson</h2>
            <img onClick={() => handleImg("Michael Jackson")} src={mj} alt="Michael Jackson" /> 
            {artistaSelecionado === "Michael Jackson" &&  <img src={bad} className='album' alt="bad-album" /> }

        </div> 

        <div id='kanye' className='artist'>
            <h2>Drake</h2>
            <img onClick={()=> handleImg("Drake")} src={drake} alt="Drake" />  
            {artistaSelecionado === "Drake" &&  <img src={views} className='album' alt="views-album" />}
        </div>  

    </div>
    </>
  )
}

export default Artists