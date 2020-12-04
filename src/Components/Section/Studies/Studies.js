import React from 'react';
import styles from './Styles';
import Frontend from '../../../assets/img/bictia1.png';
import Henry from '../../../assets/img/henry.png';

const Studies = () => {
    const {General,Contenedor,Fecha,Instituto,Texto,Punto,Nombre,Titulo,Certificados,Certificado} = styles;
   
    return ( 
        <General>
            
            <Contenedor>
                
            <Titulo>Studies</Titulo>
          
                    
                <Fecha>
                   <Texto>2003-2008<Punto/></Texto>
                   <Texto>2008-2013<Punto style={{background:'orangered'}}/></Texto>
                   <Texto>2014-2019<Punto style={{background:'rgb(41, 101, 241)'}}/></Texto>
                   <Texto>2020-2020<Punto style={{background:'#589636'}}/></Texto>
                   <Texto>2020-2020<Punto style={{background:'#fcce63'}}/></Texto>
                   <Texto>2020-2020<Punto style={{background:'#61DBFB'}}/></Texto>
                   <Texto>2020<Punto style={{background:'#B52E31'}}/></Texto>
                </Fecha>
                <Instituto>
                   <Nombre><b>Primary School</b>  - CMO</Nombre>
                   <Nombre><b>Secondary School</b>  - CMO</Nombre>
                   <Nombre><b>University</b>  - Uniagraria</Nombre>
                   <Nombre><b>Frontend Developer</b>  - BICTIA</Nombre>
                   <Nombre><b>Fullstack Developer MEAN</b>  - BICTIA</Nombre>
                   <Nombre><b>Fullstack Developer JS</b>  - HENRY</Nombre>
                   <Nombre><b>Now I'm here!</b></Nombre>
                </Instituto>
            
                <Certificados>
                  <Certificado src={Henry}/>
                  <Certificado src={Frontend}/>
                  <Certificado src={Henry}/>
               </Certificados>

            </Contenedor>
            
        </General>
     );
}

export default Studies;