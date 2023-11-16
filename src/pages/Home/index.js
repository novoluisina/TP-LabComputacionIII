import React from 'react'
// import { useNavigate } from 'react-router'
// import useUser from '../../hooks/useUser'
import './index.css'

const Home = () => {
  // const navigate = useNavigate()
  // const { user } = useUser()
  return (
    <>
      <div className='containerIndex'>
        <div className='textos'>
          <h1>Bienvenido a RecetAR</h1>
          <p>Encuentra todas tus recetas favoritas en un solo lugar</p>
        </div>
        {/* 
        <img
          src='https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2023/04/03/mesa-llena-de-comida-arabe.jpeg'
          alt='Descripción de la imagen'
        ></img> */}
      </div>
      <div className='infoRecetar'>
        <div>
          <h2>¿Que es recetAR?</h2>
          <p>
            RecetAR es una página web creada por tres amigos programadores que
            comparten el amor por la cocina. En RecetApp, puedes subir tus
            propias recetas, comentar las de otros usuarios, y descubrir nuevas
            ideas para sorprender a tu paladar. RecetApp es más que una página
            de recetas, es un espacio para los apasionados por la cocina y una
            comunidad culinaria.
          </p>
        </div>
        <div>
          <h2>¿Cómo surgió RecetAR?</h2>
          <p>
            RecetApp nació en el año 2020, tras el boom de las comidas caseras
            en pandemia. Los tres amigos fundadores, que no se podían ver en
            persona, decidieron crear una página web para compartir sus recetas
            favoritas y mantenerse en contacto. Así, RecetApp se convirtió en un
            proyecto que les permitió unir sus dos pasiones: la programación y
            la cocina
          </p>
        </div>
        <div>
          <h2>¿Qué esperas para unirte a RecetAR?</h2>
          <p>
            En RecetApp, puedes hacer muchas cosas relacionadas con la cocina.
            Puedes subir tus recetas, con fotos, ingredientes, instrucciones y
            consejos. Si te gusta la cocina, no lo dudes más y únete a RecetAR.
            Es gratis, fácil y divertido. Solo tienes que registrarte con tu
            correo electrónico y crear una contraseña. Luego, podrás acceder a
            todas las funciones de la página y empezar a compartir tus recetas y
            a conocer a otros usuarios. RecetAR es la página web que estabas
            esperando, la que te hará vivir la cocina de una manera diferente.
            ¡Te esperamos!{' '}
          </p>
        </div>
      </div>
      <div class='fakeFooter'>
        <h2>Nuestros chefs fundadores:</h2>
        <div class='fundadoresInfo'>
          <div class='fundador'>
            <h3>Luisina Novo</h3>
            <img
              src='https://webvieja.ucel.edu.ar/media/k2/items/cache/cb8a6a7181b791c9ee7b93a30025859d_Generic.jpg'
              alt='Luisina Novo'
            ></img>
          </div>

          <div class='fundador'>
            <h3>Cintia Avendaño</h3>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5NIVcTxI-q2mjTIqgBjdvaHfI9fGnLDu4SY31ghv2A&s'
              alt='Cintia Avendaño'
            ></img>
          </div>

          <div class='fundador'>
            <h3>Mateo Bernardi</h3>
            <img
              src='https://www.instagram.com/p/CZp9Q4VlzWFxagaAQGV0VCiXLb1kxUBHqRr8TM0/?hl=es-la&img_index=1'
              alt='Mateo Bernardi'
            ></img>
          </div>
        </div>
      </div>

      {/* <button
        onClick={() => {
          navigate('/recetas')
        }}
      >
        Ver recetas
      </button>
      <button
        onClick={() => {
          navigate('/registrar')
        }}
      >
        Registrarse
      </button> */}
    </>
  )
}

export default Home
