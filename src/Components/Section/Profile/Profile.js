import React from "react";
import styles from "./Styles";
import foto from "../../../assets/img/cv.jpg";

const Profile = () => {
  const { General, ContFoto, Perfil } = styles;

  return (
    <General>
      <ContFoto>
  
         <img className="foto" src={foto} alt="img-perfil" /> 
        <div className="datos">
          <p className='nombre'>ANDRÉS</p>
          <p className='apellido'>SÁNCHEZ</p>
        </div>
        <div className="datos numericos">
          <p>3013184491 <i className="fas fa-phone-alt cel icono"></i></p>
          <p>Bogotá-Colombia <i className="fas fa-map-marker-alt icono"></i></p>
          <p>camand10sa@gmail.com <i className="fas fa-envelope icono"></i></p>
          <p>Andrés Sánchez <i className="fab fa-linkedin icono"></i></p>
          <p>andres10sa <i className="fab fa-github icono"></i></p>

        </div>
      </ContFoto>

      <Perfil >
        <p className='presentacion'>
          Soy desarrollador de software fullstack con dominio de los stacks de Mean y Mern. Me considero alguien sumamente autodidacta y apasionado por el
          aprendizaje de nuevas técnicas y habilidades, lo cual me permite estar a la vanguardia del mercado.
          Soy una persona activa, hábil, puntual, con buena actitud de trabajo y facilidad de adquirir conocimiento y
          rápido aprendizaje, dispuesto a dar todo de mí parte para desarrollarme en cualquier ámbito laboral.
         </p>
        <hr />

        <div className='skills'>
          <div className='sub'>
            <h1 className='titulo'>Skills</h1>
            <p className='skill'><b>✓</b> Teamwork</p>
            <p className='skill'><b>✓</b> Autodidact</p>
            <p className='skill'><b>✓</b> Charisma</p>
            <p className='skill'><b>✓</b> Solidarity</p>
            <p className='skill'><b>✓</b> Responsability</p>
          </div>

          <div className='sub sub2'>
            <div className='contIcon'>
              <i className="fas fa-users ic"></i>

            </div>
            <div className='contIcon'>
              <i className="fas fa-chalkboard-teacher ic"></i>

            </div>
            <div className='contIcon'>
              <i className="fas fa-laugh-wink happy ic"></i>

            </div>
            <div className='contIcon'>
              <i className="fas fa-handshake ic"></i>

            </div>
            <div className='contIcon'>
              <i className="fas fa-lock candado ic"></i>

            </div>
          </div>

        </div>
      </Perfil>


      <Perfil >

        <hr />

        <div className='skills'>
         

           
          <div className='sub sub2'>
            <div className='contIcon c2'>
              <i className="fas fa-plane av"></i>
              <div className="sombra"></div>
              
            </div>
            
            <div className='contIcon c2'>
              <i className="fas fa-skiing-nordic"></i>
              <div className="sombra"></div>

            </div>

            <div className='contIcon c2'>
              <i className="fas fa-school sc"></i>
              <div className="sombra"></div>
            </div>

            <div className='contIcon c2'>
              <i className="fas fa-film pel"></i>
              <div className="sombra"></div>
            </div>

            <div className='contIcon c2'>
              <i className="fas fa-chess ch"></i>
              <div className="sombra"></div>
            </div>
          </div>

          <div className='sub subr'>
            <h1 className='titulo'>Interests</h1>
            <p className='skill'>Travel <b>✓</b> </p>
            <p className='skill'>Sports <b>✓</b> </p>
            <p className='skill'>Study <b>✓</b> </p>
            <p className='skill'>Movies <b>✓</b> </p>
            <p className='skill'>Chess <b>✓</b> </p>
          </div>

        </div>
      </Perfil>


      <Perfil >

        <hr />

        <div className='skills'>

          <h1 className='titulo titulo-social'>Social Networks</h1>

          <div className="red">
       

            <p className='nombre-red '>
              Linkedin: https://www.linkedin.com/in/andr%C3%A9s-s%C3%A1nchez-02a068120
               <i className="fab fa-linkedin icono linke"></i>

            </p>
            <p className='nombre-red'>Github: https://github.com/andres10sa<i className="fab fa-github icono git"></i></p>
          </div>

          <p className="nombre-red w">
          Whatsapp: https://api.whatsapp.com/send?phone=573013184491 <i className="fab fa-whatsapp-square what"></i>
          </p>


        </div>
      </Perfil>



    </General>
  );
};

export default Profile;
