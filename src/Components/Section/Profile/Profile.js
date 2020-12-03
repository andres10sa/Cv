import React from "react";
import styles from "./Styles";
import foto from "../../../assets/img/cv.jpg";

const Profile = () => {
  const { General, ContFoto,Perfil } = styles;

  return (
    <General>
      <ContFoto>
          <img className="foto" src={foto} alt="img-perfil" />
        <div className="datos">
          <p className='nombre'>ANDRÉS</p>
          <p className='apellido'>SÁNCHEZ</p>
        </div>
        <div className="datos numericos">
          <p>3013184491 <i class="fas fa-phone-alt cel icono"></i></p>
          <p>Bogotá-Colombia <i class="fas fa-map-marker-alt icono"></i></p>
          <p>camand10sa@gmail.com <i class="fas fa-envelope icono"></i></p>
          <p>Andrés Sánchez <i class="fab fa-linkedin icono"></i></p>
          <p>andres10sa <i class="fab fa-github icono"></i></p>
         
        </div>
      </ContFoto>

      <Perfil >
         <p className='presentacion'>
         Soy desarrollador de software fullstack con dominio de los stacks de Mean y Mern. Me considero alguien sumamente autodidacta y apasionado por el
         aprendizaje de nuevas técnicas y habilidades, lo cual me permite estar a la vanguardia del mercado.
         Soy una persona activa, hábil, puntual, con buena actitud de trabajo y facilidad de adquirir conocimiento y
         rápido aprendizaje, dispuesto a dar todo de mí parte para desarrollarme en cualquier ámbitolaboral
         </p>
         <hr/>
         <div className='skills'>
             <h1 className='titulo'>Skills</h1>
             <p className='skill'><b>✓</b> Teamwork</p>
             <p className='skill'><b>✓</b> Autodidact</p>
             <p className='skill'><b>✓</b> Charisma</p>
             <p className='skill'><b>✓</b> Solidarity</p>
             <p className='skill'><b>✓</b> Responsability</p>
         </div>
      </Perfil>

      <Perfil >
    
         <hr/>
         <div className='skills'>
             <h1 className='titulo'>Interests</h1>
             <p className='skill'><b>✓</b> Teamwork</p>
             <p className='skill'><b>✓</b> Autodidact</p>
             <p className='skill'><b>✓</b> Charisma</p>
             <p className='skill'><b>✓</b> Solidarity</p>
             <p className='skill'><b>✓</b> Responsability</p>
         </div>
      </Perfil>
     
    </General>
  );
};

export default Profile;
