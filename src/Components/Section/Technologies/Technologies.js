import React from 'react';
import styles from './Styles';
import Tecnhnologie from './Technologie';

const Technologies = () => {
                   
    const {General,Contenedor,Titulo,Tecnologia,Nombre,Barra} = styles;
   
    return ( 
        <General>
            <Contenedor>
                   <Titulo>Tecnhologies</Titulo>
                   <Tecnhnologie name='HTML5' value='95' color='#f06529'/>
                   <Tecnhnologie name='React' value='85' color='#61DBFB'/>
                   <Tecnhnologie name='Angular' value='60' color='#B52E31'/>
                   <Tecnhnologie name='Javascript' value='85' color='#fcce63'/>
                   <Tecnhnologie name='Node' value='70' color='#68a063'/>
                   <Tecnhnologie name='Express' value='70' color='rgba(0,0,0,.6)'/>
                   <Tecnhnologie name='MongoDB' value='70' color='#589636'/>
                   <Tecnhnologie name='CSS3' value='95' color='rgb(41, 101, 241)'/>
            </Contenedor>
        </General>
     );
}
 
export default Technologies;