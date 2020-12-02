import React from 'react'
import styles from './Styles';


const Aside = () => {
    const {AsideContenedor}=styles;
    return (  
        <AsideContenedor>
            <i className="far fa-copy icon activo"></i>
            <i className="fas fa-search icon"></i>
            <i class="fas fa-code-branch icon"></i>
            <i class="fas fa-bug icon"></i>
            <i className="far fa-copy icon"></i>
            <i class="fas fa-box icon"></i>
            
        </AsideContenedor>
    );
}
 
export default Aside;