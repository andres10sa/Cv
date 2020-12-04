import React from 'react';
import styles from "./Styles";

const Empty = () => {
    const {General,Contenedor,Imagen,Texto,Boton}=styles;
    return (  
     <General>
         <Contenedor>
             <Imagen  src="https://img.icons8.com/ios-glyphs/240/000000/visual-studio.png"/>
             <Texto>
                 Show All Commands&nbsp;
                 <Boton>Ctrl</Boton>+<Boton>Shift</Boton>+<Boton>P</Boton>
            </Texto>
            <Texto>
                 Go to File&nbsp;
                 <Boton>Ctrl</Boton>+<Boton>P</Boton>
            </Texto>
            <Texto>
                 Find in Files&nbsp;
                 <Boton>Ctrl</Boton>+<Boton>Shift</Boton>+<Boton>F</Boton>
            </Texto>
            <Texto>
                 Start Debugging&nbsp;
                 <Boton>F5</Boton>
            </Texto>
            </Contenedor>
     </General>
    );
}
 
export default Empty;