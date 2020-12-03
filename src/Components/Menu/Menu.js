import React, { useState } from 'react';
import styles from './Styles';

const Menu = ({open,setOpen,currentItem,setCurrentItem}) => {
   const { Main } = styles;
   const [all,setAll]=useState(false);
   const [components, setComponents] = useState(true);
   const [source, setSource] = useState(true);
   
   const arrowGeneral= all ? 'fas fa-chevron-down flecha' : 'fas fa-chevron-right flecha';
   const arrowComponents = components ? 'fas fa-chevron-down flecha' : 'fas fa-chevron-right flecha';
   const arrowSource = source ? 'fas fa-chevron-down flecha' : 'fas fa-chevron-right flecha';

   const addOpen = (name)=>{
      const exists = open.find(ele=>ele===name);
      !exists && setOpen([...open,name]);
      setCurrentItem(name);
   }

   return (
      <Main >
          <div className='item activo first-item' onClick={()=>setAll(!all)}>
             <div>
             <i className={arrowGeneral}></i>
            <small>CV</small>
             </div>
           
            <div className="iconos-dere">
            <i className="fas fa-file-medical dericon d1"></i>
            <i className="fas fa-folder-plus dericon "></i>
            <i className="fas fa-redo dericon"></i>
            <i className="fas fa-minus-square dericon"></i>
            </div>
         </div>

        {all &&(
         <section>
         <div className='item'>
            <i className="fas fa-chevron-right flecha"></i>
            <i className="fas fa-folder carpeta"></i>
            <small>node_modules</small>
            <i className="fas fa-cog icono"></i>
         </div>
         <div className='item'>
            <i className="fas fa-chevron-right flecha"></i>
            <i className="fas fa-folder carpeta carpeta2"></i>
            <small>public</small>
            <i className="fas fa-users icono icono2"></i>
         </div>

         <div className='item' onClick={()=>{setSource(!source);setComponents(false)}}>
            <i className={arrowSource}></i>
            <i className={source ? 'fas fa-folder-open carpeta carpeta3':'fas fa-folder carpeta carpeta3'}></i>
            <small>src</small>
          {!source &&(<i className="fas fa-code icono icono2"></i>)} 
         </div>

         {source && (
            <div className='item subitem' onClick={() => setComponents(!components)}>
               <i className={arrowComponents}></i>
               <i className={components ?'fas fa-folder-open carpeta carpeta4' :'fas fa-folder carpeta carpeta4'}></i>
               <small>components</small>
            </div>
         )}


         {components && (
            <div>
               <div className='item subitem2' onClick={()=>addOpen('Profile.js')}>
                  <small className='js'>JS</small>
                  <small>Profile.js</small>
               </div>
               <div className='item subitem2' onClick={()=>addOpen('Technologies.js')}>
                  <small className='js'>JS</small>
                  <small>Technologies.js</small>
               </div>
               <div className='item subitem2'onClick={()=>addOpen('Studies.js')}>
                  <small className='js'>JS</small>
                  <small>Studies.js</small>
               </div>
               <div className='item subitem2' onClick={()=>addOpen('Experience.js')}>
                  <small className='js'>JS</small>
                  <small>Experience.js</small>
               </div>
               <div className='item subitem2' onClick={()=>addOpen('App.js')}>
                  <small className='js'>JS</small>
                  <small>App.js</small>
               </div>
               <div className='item subitem2' onClick={()=>addOpen('App.css')}>
                  <small className='js js2 cs'><i className="fab fa-css3-alt css"></i></small>
                  <small>App.css</small>
               </div>
            </div>
         )}
         <div className='item subitem'>
            <small className='js js2 js3'> <i className="fas fa-directions carpeta ignore css"></i></small>
            <small>.gitignore</small>
         </div>
         <div className='item subitem'>
            <i className="fab fa-npm carpeta npm"></i>
            <small>package.json</small>
         </div>
         <div className='item subitem'>
            <i className="fas fa-file-alt carpeta readme"></i>
            <small>README.md</small>
         </div>
         </section>)}


      </Main>
   );
}

export default Menu;