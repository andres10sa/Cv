import React from 'react';
import styles from './Styles';
import Logo from '../../assets/img/logo.png';

const Header = () => {
    const {Header,Imagen,Nav} = styles;
    return (  
        <Header>
            <Imagen src={Logo} alt="Logo"/>
            <Nav>
                  <a>File</a>
                  <a>Edit</a>
                  <a>Selection</a>
                  <a>View</a>
                  <a>Go</a>
                  <a>Run</a>
                  <a>Terminal</a>
                  <a>Help</a>

            </Nav>
           
        </Header>
    );
}
 
export default Header;