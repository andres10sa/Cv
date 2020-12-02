import React, { useState } from 'react';
import styles from './Styles';

const Menu = () => {
   const { Main } = styles;
   const [components, setComponents] = useState(false);
   const [source, setSource] = useState(false);

   const arrowComponents = components ? 'fas fa-chevron-down flecha' : 'fas fa-chevron-right flecha';
   const arrowSource = source ? 'fas fa-chevron-down flecha' : 'fas fa-chevron-right flecha';

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

         <div className='item' onClick={()=>{setSource(!source);setComponents(false)}}>
            <i class={arrowSource}></i>
            <i class="fas fa-folder carpeta carpeta3"></i>
            <small>src</small>
            <i class="fas fa-code icono icono2"></i>
         </div>

         {source && (
            <div className='item subitem' onClick={() => setComponents(!components)}>
               <i class={arrowComponents}></i>
               <i class="fas fa-folder carpeta carpeta4"></i>
               <small>components</small>
            </div>
         )}


         {components && (
            <div>
               <div className='item subitem2'>
                  <small className='js'>JS</small>
                  <small>Profile.js</small>
               </div>
               <div className='item subitem2'>
                  <small className='js'>JS</small>
                  <small>Technologies.js</small>
               </div>
               <div className='item subitem2'>
                  <small className='js'>JS</small>
                  <small>Studies.js</small>
               </div>
               <div className='item subitem2'>
                  <small className='js'>JS</small>
                  <small>Experience.js</small>
               </div>
               <div className='item subitem2'>
                  <small className='js'>JS</small>
                  <small>App.js</small>
               </div>
               <div className='item subitem2'>
                  <small className='js js2 cs'><i class="fab fa-css3-alt css"></i></small>
                  <small>App.css</small>
               </div>
            </div>
         )}

         <div className='item subitem'>
            <small className='js js2 js3'> <i class="fas fa-directions carpeta ignore css"></i></small>
            <small>.gitignore</small>
         </div>
         <div className='item subitem'>

            <i class="fab fa-npm carpeta npm"></i>
            <small>package.json</small>
         </div>

         <div className='item subitem'>
            {/* <i class="fab fa-readme carpeta readme"></i>   */}
            <i class="fas fa-file-alt carpeta readme"></i>
            <small>README.md</small>
         </div>


      </Main>
   );
}

export default Menu;