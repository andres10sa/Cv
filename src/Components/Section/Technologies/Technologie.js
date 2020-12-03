import React from 'react';
import styles from './Styles';

const Technologies = ({name,value,color}) => {
                   
    const {Tecnologia,Nombre,Barra,Sombra} = styles;
    const ancho={
        width:`${value}%`,
        background:color?color:'#ccc',
    }
    return ( 
                   <Tecnologia>
                      <Nombre>{name}</Nombre>
                      <Barra>
                          <Sombra style={ancho}/>
                      </Barra>
                    </Tecnologia>
     );
}
 
export default Technologies;