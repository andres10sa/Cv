import React from 'react';
import styles from './Styles';

const Menu = () => {
    const {Main} =styles;
    return ( 
        <Main >
            <div className='item activo'>
              <i class="fas fa-chevron-right flecha"></i>
              <i class="fas fa-folder carpeta"></i>
               <small>node_modules</small> 
               <i class="fas fa-cog icono"></i>
            </div>
            <div className='item'>
              <i class="fas fa-chevron-right flecha"></i>
              <i class="fas fa-folder carpeta carpeta2"></i>
               <small>public</small> 
               <i class="fas fa-users icono icono2"></i>
            </div>
            <div className='item'>
              <i class="fas fa-chevron-right flecha"></i>
              <i class="fas fa-folder carpeta carpeta3"></i>
               <small>src</small> 
               <i class="fas fa-code icono icono2"></i>
            </div>
            <div className='item subitem'>
              <i class="fas fa-chevron-right flecha"></i>
              <i class="fas fa-folder carpeta carpeta4"></i>
               <small>components</small> 
            </div>
            <div className='item subitem2'>
               <small className='js'>JS</small>
               <small>components</small> 
            </div>
            
        </Main>
     );
}
 
export default Menu;