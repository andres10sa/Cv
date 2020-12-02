import React from 'react';
import styles from './Styles';
import Logo from '../../assets/img/logo.png';

const Header = () => {
    const {Header,Imagen,Nav} = styles;
    return (  
        <Header>
            <Imagen src={Logo} alt="Logo"/>
            <Nav>
                  <p>File</p>
                  <p>Edit</p>
                  <p>Selection</p>
                  <p>View</p>
                  <p>Go</p>
                  <p>Run</p>
                  <p>Terminal</p>
                  <p>Help</p>

            </Nav>
           
        </Header>
    );
}
 
export default Header;