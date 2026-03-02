import React, { useState } from "react"

// IMAGENS ARTISTAS
import kanye from "../imgs/kanyewest.jpg"
import mj from "../imgs/mj.webp"
import drake from "../imgs/drake.jpg"

// ALBUNS
import graduation from "../imgs/graduation.jpg"
import bad from "../imgs/bad.jpg"
import views from "../imgs/views.jpg"

import "./Artists.css"

function Artists() {
  const [artistaSelecionado, setArtistaSelecionado] = useState(null)

  const artistas = [
    {
      nome: "Michael Jackson",
      id: 1,
      idade: 50,
      img: mj,
      albumMaisVendido: {
        nome: "Thriller",
        dataLancamento: 1982,
        vendas: 100,
        img: bad,
      },
    },
    {
      nome: "Kanye West",
      id: 2,
      idade: 42,
      img: kanye,
      albumMaisVendido: {
        nome: "Graduation",
        dataLancamento: 2010,
        vendas: 14,
        img: graduation,
      },
    },
    {
      nome: "Drake",
      id: 3,
      idade: 38,
      img: drake,
      albumMaisVendido: {
        nome: "Take Care",
        dataLancamento: 2011,
        vendas: 12,
        img: views,
      },
    },
  ]

  function handleImg(nomeArtista) {
    if (artistaSelecionado === nomeArtista) {
      setArtistaSelecionado(null)
    } else {
      setArtistaSelecionado(nomeArtista)
    }
  }

  return (
    <div id="list-artists">
      {artistas.map((artista) => (
        <div key={artista.id} className="artist">
          <h2>{artista.nome}</h2>

          <img
            src={artista.img}
            alt={artista.nome}
            onClick={() => handleImg(artista.nome)}
          />

          {artistaSelecionado === artista.nome && (
            <div className="album-info">
              <img
                src={artista.albumMaisVendido.img}
                className="album"
                alt="album"
              />

              <ul>
                <li>{artista.albumMaisVendido.nome}</li>
                <li>{artista.albumMaisVendido.dataLancamento}</li>
                <li>{artista.albumMaisVendido.vendas} milhões</li>
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Artists