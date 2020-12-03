import React from 'react';
import styles from './Styles';
import Tecnhnologie from './Technologie';

const Technologies = () => {
                   
    const {General,Contenedor,Titulo,Tecnologia,Nombre,Barra} = styles;
   
    return ( 
        <General>
            <Contenedor>
                   <Titulo>Tecnhologies</Titulo>
                   <Tecnhnologie name='HTML5' value='70' color='grey'/>
                   <Tecnhnologie name='Javascript' value='80' color='#fcce63'/>
                   <Tecnhnologie name='React' value='70' color='#fcce63'/>
            </Contenedor>
        </General>
     );
}
 
export default Technologies;