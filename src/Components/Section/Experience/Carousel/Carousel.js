import React from 'react';
import Cv from '../../../../assets/img/cvreact.PNG';
import Moonbank from '../../../../assets/img/moonbank.jpg';
import Nasdrovia from '../../../../assets/img/nasdrovia.jpg';
import Fenix from '../../../../assets/img/fenix.PNG';
import './Styles.css';



const Carousel = () => {
    return (  
        <div className="contenedor">
            <h1 className='exp'>Experience</h1>
            <small className='subtitulo-exp'>Freelance projects</small>
            
            <div className="carrousel">
                <figure><a href="https://github.com/Cristovk/Wallet-Native"><img src={Moonbank} title="Moonbank" alt="Moonbank"/></a></figure>
                <figure><a href="https://github.com/Lismairy-Sanchez/Nasdrovia"><img src={Nasdrovia} title="Nasdrovia" alt="Nasdrovia"/></a></figure>
                <figure><a href="https://github.com/andres10sa/Fenix"><img src={Fenix} title="Fenix" alt="Fenix"/></a></figure>
                <figure><a href="https://github.com/Cristovk/Wallet-Native"><img src={Cv} title="Curriculum" alt="Curriculum"/></a></figure>
                <figure><a href="https://github.com/Cristovk/Wallet-Native"><img src={Moonbank} title="Moonbank" alt="Moonbank"/></a></figure>
                <figure><a href="https://github.com/Cristovk/Wallet-Native"><img src={Moonbank} title="Moonbank" alt="Moonbank"/></a></figure>
                <figure><a href="https://github.com/Cristovk/Wallet-Native"><img src={Moonbank} title="Moonbank" alt="Moonbank"/></a></figure>
                <figure><a href="https://github.com/Cristovk/Wallet-Native"><img src={Moonbank} title="Moonbank" alt="Moonbank"/></a></figure>
                <figure><a href="https://github.com/Cristovk/Wallet-Native"><img src={Moonbank} title="Moonbank" alt="Moonbank"/></a></figure>
                <figure><a href="https://github.com/Cristovk/Wallet-Native"><img src={Moonbank} title="Moonbank" alt="Moonbank"/></a></figure>


            </div>

        </div>
    );
}
 
export default Carousel;