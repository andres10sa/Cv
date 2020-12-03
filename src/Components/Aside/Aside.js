import React from 'react'
import styles from './Styles';


const Aside = ({setCurrent,current}) => {
    const {AsideContenedor}=styles;
    const active = current ? 'far fa-copy icon activo':'far fa-copy icon';
    return (  
        <AsideContenedor>
            <i className={active}onClick={()=>setCurrent(!current)}></i>
            <i className="fas fa-search icon"></i>
            <i className="fas fa-code-branch icon"></i>
            <i className="fas fa-bug icon"></i>
            <i className="far fa-copy icon"></i>
            <i className="fas fa-box icon"></i>
        </AsideContenedor>
    );
}
 
export default Aside;